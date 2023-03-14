// convert to roman

// convertToRoman module
const convertToRoman = (() => {
  // returns roman number equivalent of alpha numeric
  const romanNumeral = (num) => {
    const roman = {
      1: "I",
      4: "IV",
      5: "V",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M",
    };
    if (!roman.hasOwnProperty(num)) {
      const rest = num.replace(/^\d/, "1");
      if (+num[0] > 5) {
        const first = num.replace(/^\d/, "5");
        return roman[first] + roman[rest].repeat(+num[0] - 5);
      }
      return roman[rest].repeat(+num[0]);
    }
    return roman[num];
  };

  const getRomanNumber = (num) => {
    const len = num.toString().length - 1;
    const newNum = num.toString().split("");
    return newNum
      .map((elm, ind) => {
        const newElm = elm + "0".repeat(len - ind);
        if (/^0+/g.test(newElm) === false) return romanNumeral(newElm);
      })
      .join("");
  };

  return { getRomanNumber };
})();

export default { convertToRoman };
