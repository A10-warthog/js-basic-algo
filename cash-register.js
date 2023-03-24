export default checkCashRegister(price, cash, cid) {
  const currency = { 
    Penny: 0.01,
    Nickel: 0.05,
    Dime: 0.1,
    Quarter: 0.25,
    'One Dollar': 1,
    'Five Dollars': 5,
    'Ten Dollars': 10,
    'Twenty Dollars': 20,
    'Hundred Dollars': 100,
  };
  let change = cash - price;  
  
}