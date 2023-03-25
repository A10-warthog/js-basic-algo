export default checkCashRegister(price, cash, cid) {
   // fixed value to dollar
  const currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };
  // change all values to pennies
  for (let val in currency) currency[val] = currency[val] * 100;

  // get change
  let change = cash * 100 - price * 100;

  // get total cash in register
  const totalCash = cid.reduce((addTo, val) => addTo + val[1], 0) * 100;

  // return obj with status closed and cid
  if (change === totalCash)
    return {
      status: "CLOSED",
      change: cid,
    };  
  
}