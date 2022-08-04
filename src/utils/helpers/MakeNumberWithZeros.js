export const makeNumberWithZeros = (num) => {
  let numStr = String(num);
  if (numStr.length < 3) {
    for (let i = numStr.length; i < 3; i++) {
      numStr = "0" + numStr;
    }
  }
  return numStr;
};
