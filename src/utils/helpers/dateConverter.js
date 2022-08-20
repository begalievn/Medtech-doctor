export const dateConverter = (date, symbolBetween, reversed=false) => {
  const newDate = new Date(date);
  const sb = symbolBetween;
  let result = `${newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate()}${sb}${newDate.getMonth() + 1 < 10 ? "0" + (newDate.getMonth() + 1) : newDate.getMonth()}${sb}${newDate.getFullYear()}`;
  if(reversed) {
    return result.split(symbolBetween).reverse().join(symbolBetween);
  }
  return result;
}