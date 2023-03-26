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
  
  // arrange cid array from highest to lowest
  const drawer = cid
    .reverse()
    .filter((elm) => elm[1] > 0)
    .map((elm) => {
      elm[1] = Math.round(elm[1] * 100);
      return elm;
    });

  // Reduce drawer array to get changes
  const returnChange = drawer.reduce((arr, cashIn) => {
    if (change >= currency[cashIn[0]]) {
      // val is current cashIn currency
      const val = currency[cashIn[0]];
      // increment inc to store changes
      let inc = 0;
      while (cashIn[1] > 0) {
        change = change - val;
        inc += val;
        cashIn[1] -= val;
        if (change < val) break;
      }
      arr.push([cashIn[0], inc / 100]);
    }
    return arr;
  }, []);

  // return object with array with all the changes and status open
  if (change === 0)
    return {
      status: "OPEN",
      change: returnChange,
    };

  // return object when there are no sufficient funds
  if (change !== 0)
    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };
}