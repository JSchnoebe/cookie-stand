'use strict';
console.log('the app js file is connected');

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

//comment
/**
 * multi line comment 
 * enter 
 * enter 
 * 
 */
/////////////////////Global Variables/////////////////////////
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let tableElement = document.getElementById('storeTable');



// getElementById();
// createElement();
// prompt()
// alert()








//////////////////////////Prototype Function Calls/////////////////////////
StoreCreator.prototype.calcCustEachHour = function(){
  for(let i = 0; i < hours.length; i++){
    this.custEachHour.push( random(this.minCustPerHour, this.maxCustPerHour));
  }
};

StoreCreator.prototype.calcCookiesEachHour = function(){
  this.calcCustEachHour();
  for (let i = 0; i < hours.length; i++){
    let oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerSale);
    this.cookiesEachHour.push(oneHour);
    //totals
    this.totalDailyCookies = this.totalDailyCookies + oneHour;
  }

};







///////////////////////Render////////////////////////////////
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


function makeFooterRow(){
  const tableRow = document.createElement('tr');
  let tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Totals';
  tableRow.appendChild(tableHeaderElement);


  let totalOfTotals = 0;

  for(let i = 0; i < hours.length; i++){

    let hourlyTotals = 0;

    for(let j = 0; j < StoreCreator.allStoresArray.length; j++){
      hourlyTotals += StoreCreator.allStoresArray[j].cookiesEachHour[i];
      totalOfTotals = totalOfTotals + StoreCreator.allStoresArray[j].cookiesEachHour[i];
    }
    tableHeaderElement = document.createElement('th');
    tableHeaderElement.textContent = hourlyTotals;
    tableRow.appendChild(tableHeaderElement);
  }
  tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = totalOfTotals;
  tableRow.appendChild(tableHeaderElement);
  tableElement.appendChild(tableRow);
}


//////////////////////New Stores/////////////////////////////
StoreCreator.allStoresArray = [];


new StoreCreator('Seattle', 23, 65, 6.3);
new StoreCreator('Tokyo', 3, 24, 1.2);
new StoreCreator('Dubai', 11, 38, 3.7);
new StoreCreator('Paris', 20, 38, 2.3);
new StoreCreator('Lima', 2, 16, 4.6);


                        
// const allStores = [storeOne, storeTwo, storeThree, storeFour, storeFive];





function random(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

///////////////////////Form/////////////////////////




///////////////////////ADD an Event Listener/////////////////////////





(function renderAllStores(){
  makeHeaderRow();
  for(let i = 0; i < StoreCreator.allStoresArray.length; i++){
    StoreCreator.allStoresArray[i].render();
    console.log('this is inside the');
  }
  makeFooterRow();
})();
