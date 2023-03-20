export default function palindrome(str) {
  const processedStr = str
    .toLowerCase()
    .match(/[^_\W]+/g)
    .join("");
  const testStr = processedStr.split("").reverse().join("");
  return processedStr === testStr;
}
