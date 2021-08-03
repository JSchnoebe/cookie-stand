'use strict';
console.log('the app js file is connected');

const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];



let storeOne = {
    locationName: 'Seattle',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiesPerSale: 6.3,
    custEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustEachHour: function(){
        for(let i = 0; i < hours.length;  i++){
            this.custEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
        }
    },
    calcCookiesEachHour: function(){
        this.calcCustEachHour();
        for (let i = 0; i < hours.length; i++){
            let oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerSale);
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies = this.totalDailyCookies + oneHour;
        }
    },
    render(){
        this.calcCookiesEachHour();
        const unorderedList = document.getElementById('seattle');
        for(let i = 0; i < hours.length; i++){
            let listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + 'cookies';
            unorderedList.appendChild(listItem);
        }
        let listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }
};


let storeTwo = {
    locationName: 'Tokyo',
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookiesPerSale: 1.2,
    custEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustEachHour: function(){
        for(let i = 0; i < hours.length;  i++){
            this.custEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
        }
    },
    calcCookiesEachHour: function(){
        this.calcCustEachHour();
        for (let i = 0; i < hours.length; i++){
            let oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerSale);
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies = this.totalDailyCookies + oneHour;
        }
    },
    render(){
        this.calcCookiesEachHour();
        const unorderedList = document.getElementById('tokyo');
        for(let i = 0; i < hours.length; i++){
            let listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + 'cookies';
            unorderedList.appendChild(listItem);
        }
        let listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }
};


let storeThree = {
    locationName: 'Dubai',
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCookiesPerSale: 3.7,
    custEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustEachHour: function(){
        for(let i = 0; i < hours.length;  i++){
            this.custEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
        }
    },
    calcCookiesEachHour: function(){
        this.calcCustEachHour();
        for (let i = 0; i < hours.length; i++){
            let oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerSale);
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies = this.totalDailyCookies + oneHour;
        }
    },
    render(){
        this.calcCookiesEachHour();
        const unorderedList = document.getElementById('dubai');
        for(let i = 0; i < hours.length; i++){
            let listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + 'cookies';
            unorderedList.appendChild(listItem);
        }
        let listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }
};


let storeFour = {
    locationName: 'Paris',
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCookiesPerSale: 2.3,
    custEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustEachHour: function(){
        for(let i = 0; i < hours.length;  i++){
            this.custEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
        }
    },
    calcCookiesEachHour: function(){
        this.calcCustEachHour();
        for (let i = 0; i < hours.length; i++){
            let oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerSale);
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies = this.totalDailyCookies + oneHour;
        }
    },
    render(){
        this.calcCookiesEachHour();
        const unorderedList = document.getElementById('paris');
        for(let i = 0; i < hours.length; i++){
            let listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + 'cookies';
            unorderedList.appendChild(listItem);
        }
        let listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }
};


let storeFive = {
    locationName: 'Lima',
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookiesPerSale: 1.2,
    custEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustEachHour: function(){
        for(let i = 0; i < hours.length;  i++){
            this.custEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
        }
    },
    calcCookiesEachHour: function(){
        this.calcCustEachHour();
        for (let i = 0; i < hours.length; i++){
            let oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerSale);
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies = this.totalDailyCookies + oneHour;
        }
    },
    render(){
        this.calcCookiesEachHour();
        const unorderedList = document.getElementById('lima');
        for(let i = 0; i < hours.length; i++){
            let listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + 'cookies';
            unorderedList.appendChild(listItem);
        }
        let listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }
};

function random(minCust, maxCust){
    return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust
}

const allStores = [storeOne, storeTwo, storeThree, storeFour, storeFive];

(function renderAllStores(){
    for(let i = 0; i < allStores.length; i++){
        allStores[i].render();
        console.log('this is inside the')
    }

})();