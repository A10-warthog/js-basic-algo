export default checkCashRegister(price, cash, cid) {
  let change = cash - price;  
  for (let i = 0; i < cid.length; i++) {
     change = change - cid[i][1];
     cid[i][1] = 0;
     if (change === 0 && cid.every(elm => elm[1] === 0))
      return change
  }
}