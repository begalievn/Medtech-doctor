export const dateConverter = (date, symbolBetween) => {
  const newDate = new Date(date);
  const sb = symbolBetween;
  let result = `${newDate.getDate()}${sb}${newDate.getMonth()}${sb}${newDate.getFullYear()}`;
  return result;
}