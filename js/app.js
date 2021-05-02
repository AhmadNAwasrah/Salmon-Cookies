'use strict';


let seattle =
{
    storeName: 'Seattle',
    minCustomerPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiePerSale: 6.3,
    hoursArray: ['6 am','7 am','8 am','9 am','10 am','11 am','12 am','1 pm','2 pm','3 pm ','4 pm','5 pm','6 pm','7 pm','8 pm'],
    numberOfCustomersArray:[],
    sales: [],
    render: function () {
        let divEl = document.getElementById('sales');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h2El = document.createElement('h2');
        h2El.textContent = this.storeName;
        articleEl.appendChild(h2El);
        // let pEl = document.createElement('p');
        // pEl.textContent = `i am ${this.sales} months old.`
        // articleEl.appendChild(pEl);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.sales.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent =    this.hoursArray[i]+"       "+this.sales[i] + '   cookies';
            ulEl.appendChild(liEl)
        }

    }


}


function numberOfCustomers(min, max) {
    min = Math.ceil(seattle.minCustomerPerHour);
    max = Math.floor(seattle.maxCustomersPerHour);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

for (let i = 1; i <= 14; i++) {
    seattle.numberOfCustomersArray.push(numberOfCustomers(seattle.minCustomerPerHour, seattle.maxCustomersPerHour));

}
console.log(seattle.hoursArray);
numberOfCustomers();
function salesPerHour() {
    var calculation;
    var startTime = 6;
    var endTime = 20;
    var totalSales = 0;
    for (var j = 0; j <= seattle.hoursArray.length; j++) {
        calculation = Math.round(seattle.avgCookiePerSale * seattle.hoursArray[j]);
        totalSales += calculation;
        seattle.sales.push(calculation);
        // console.log(totalSales);
    }
    seattle.sales.push(totalSales);





} console.log('calc' + seattle.sales);
salesPerHour();
console.log(seattle.sales);

numberOfCustomers();
var urEli = document.getElementById('sales');
var ulEli = document.createElement('ul');
var liEli = document.createElement('li');
liEli.textContent = 'seattle';
seattle.render();

