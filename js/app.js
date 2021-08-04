'use strict';
console.log('the app js file is connected');

const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


// locationName: 'Seattle',
//     minCustPerHour: 23,
//     maxCustPerHour: 65,
//     avgCookiesPerSale: 6.3,
//     custEachHour: [],
//     cookiesEachHour: [],
//     totalDailyCookies: 0
function StoreCreator(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerSale){
    this.locationName = locationName;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesPerSale = avgCookiesPerSale;
    this.custEachHour = [];
    this.cookiesEachHour = [];
    this.totalDailyCookies = 0;

}



StoreCreator.prototype.calcCustEachHour = function(){
    for(let i = 0; i < hours.length;  i++){
        this.custEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
 }
};

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

StoreCreator.prototype.calcCookiesEachHour = function(){

    for (let i = 0; i < hours.length; i++){
        let oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerSale);
        this.cookiesEachHour.push(oneHour);
        //totals
        this.totalDailyCookies = this.totalDailyCookies + oneHour;
    }

};

StoreCreator.prototype.render = function(){

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

    storeTable.appendChild(tableRow);



}
















let storeOne = new StoreCreator('Seattle', 23, 65, 6.3);

storeOne.calcCustEachHour();
storeOne.calcCookiesEachHour();
console.log(storeOne);

let storeTwo = new StoreCreator('Tokyo', 3, 24, 1.2);

storeTwo.calcCustEachHour();
storeTwo.calcCookiesEachHour();
console.log(storeTwo);

let storeThree = new StoreCreator('Dubai', 11, 38, 3.7);

storeThree.calcCustEachHour();
storeThree.calcCookiesEachHour();
console.log(storeThree);

let storeFour = new StoreCreator('Paris', 20, 38, 2.3);

storeFour.calcCustEachHour();
storeFour.calcCookiesEachHour();
console.log(storeFour);

let storeFive = new StoreCreator('Lima', 2, 16, 4.6);

storeFive.calcCustEachHour();
storeFive.calcCookiesEachHour();
console.log(storeFive);

const allStores = [storeOne, storeTwo, storeThree, storeFour, storeFive];

(function renderAllStores(){
    for(let i = 0; i < allStores.length; i++){
        allStores[i].render();
        console.log('this is inside the')
    }

})();