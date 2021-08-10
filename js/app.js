'use strict';
console.log('the app js file is connected');


/////////////////////Global Variables/////////////////////////
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let tableElement = document.getElementById('storeTable');


/////////////////////Constructor////////////////////////
function StoreCreator(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerSale){
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.custEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  StoreCreator.allStoresArray.push(this);
}
StoreCreator.allStoresArray = [];

//////////////////////////Prototype Function Calls/////////////////////////
StoreCreator.prototype.calcCustEachHour = function(){
  for(let i = 0; i < hours.length; i++){
    this.custEachHour.push( random(this.minCustPerHour, this.maxCustPerHour));
  }
};

StoreCreator.prototype.calcCookiesEachHour = function(){
  this.calcCustEachHour();
  for (let i = 0; i < hours.length; i++){
    this.cookiesEachHour.push(Math.ceil(this.custEachHour[i] * this.avgCookiesPerSale));
    //totals
    this.totalDailyCookies += Math.ceil(this.custEachHour[i] * this.avgCookiesPerSale);
  }
};

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}





///////////////////////Render////////////////////////////////
function makeHeaderRow(){
  const tableRow = document.createElement('tr');
  let tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Locations';
  tableRow.appendChild(tableHeaderElement);

  for(let i = 0; i < hours.length; i++){
    let tableHeaderElement = document.createElement('th');
    tableHeaderElement.textContent = hours[i];
    tableRow.appendChild(tableHeaderElement);
  }
  tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Location Totals';
  tableRow.appendChild(tableHeaderElement);
  tableElement.appendChild(tableRow);
}


StoreCreator.prototype.render = function(){
  this.calcCookiesEachHour();
  let storeTable = document.getElementById('storeTable');
  let tableRow = document.createElement('tr');

  let locationNameCell = document.createElement('td');
  locationNameCell.textContent = this.locationName;
  tableRow.appendChild(locationNameCell);

  for (let i = 0; i < hours.length; i++){
    let cookieData = document.createElement('td');
    cookieData.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(cookieData);
  }
  let cookieTotal = document.createElement('td');
  cookieTotal.textContent = this.totalDailyCookies;
  tableRow.appendChild(cookieTotal);
  storeTable.appendChild(tableRow);
};

function makeFooterRow(){
  const tableFooter = document.getElementById('storeTable');
  const tableRow = document.createElement('tr');
  let tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Totals';
  tableRow.appendChild(tableHeaderElement);
  tableFooter.appendChild(tableRow);

  let totalOfTotals = 0;

  for(let i = 0; i < hours.length; i++){

    let hourlyTotals = 0;

    for(let j = 0; j < StoreCreator.allStoresArray.length; j++){
      hourlyTotals += StoreCreator.allStoresArray[j].cookiesEachHour[i];
      totalOfTotals += StoreCreator.allStoresArray[j].cookiesEachHour[i];
    }
    tableHeaderElement = document.createElement('th');
    tableHeaderElement.textContent = hourlyTotals;
    tableRow.appendChild(tableHeaderElement);
  }
  tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = totalOfTotals;
  tableRow.appendChild(tableHeaderElement);
  tableFooter.appendChild(tableRow);

}


StoreCreator.prototype.renderAllStores = function (){
  let tbody = document.getElementById('storeTable');
  tbody.innerHTML = '';

  makeHeaderRow();

  for(let i = 0; i < StoreCreator.allStoresArray.length; i++){
    StoreCreator.allStoresArray[i].render();
  }
  makeFooterRow();
};




//////////////////////New Stores/////////////////////////////
new StoreCreator('Seattle', 3, 5, 1.3);
new StoreCreator('Tokyo', 3, 24, 1.2);
new StoreCreator('Dubai', 11, 38, 3.7);
new StoreCreator('Paris', 20, 38, 2.3);
new StoreCreator('Lima', 2, 16, 4.6);




StoreCreator.prototype.renderAllStores();

///////////////////////Form/////////////////////////
//add handle function
function handleFormSubmit(event){
  event.preventDefault();
  this.totalDailyCookies = 0;
  let locationInput = document.getElementById('location');
  let locationValue = locationInput.value;

  let minCustInput = document.getElementById('minCustomers');
  let minCustValue = parseInt(minCustInput.value);

  let maxCustInput = document.getElementById('maxCustomers');
  let maxCustValue = parseInt(maxCustInput.value);

  let avgCustInput = document.getElementById('avgCustomers');
  let avgCustValue = parseInt(avgCustInput.value);

  let shopForm = document.getElementById('new-locations');
  shopForm.reset();

  let newStore = new StoreCreator(locationValue, minCustValue, maxCustValue, avgCustValue);
 
  newStore.calcCustEachHour();
  newStore.calcCookiesEachHour();
  newStore.renderAllStores();

}



///////////////////////ADD an Event Listener/////////////////////////
let formData = document.getElementById('new-locations');
formData.addEventListener('submit', handleFormSubmit);

