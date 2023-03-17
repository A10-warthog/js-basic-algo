export default function telephoneValidator(str) {
  const regex = /^1{0,1}(\s*(\(\d{3}\)|\d{3})[-\s]*\d+[-\s]\d+$|\d{10}$)/;
  return regex.test(str);
}
