export default function rot13(str) {
  let encryption = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i].charCodeAt(0);
    if (char > 64 && char < 91) {
      if (char + 13 > 90) {
        // when unicode is > 90 reset unicode to start
        encryption += String.fromCharCode(char + 13 - 90 + 64);
      } else encryption += String.fromCharCode(char + 13);
    } else encryption += str[i];
  }

  return encryption;
}
