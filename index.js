// Write your solution in this file!

var customerName = 'bob'

const upperCaseCustomerName = () => {
  console.log(customerName.toUpperCase())
  customerName = customerName.toUpperCase();
  return customerName
}


function setBestCustomer() {
    bestCustomer = 'not bob';
}

const overwriteBestCustomer = () =>  {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'jim';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'tom'
}