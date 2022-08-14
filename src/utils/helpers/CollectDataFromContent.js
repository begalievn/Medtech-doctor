export const collectDataFromContent = (content) => {
  const resultArr = [];
  content.forEach((item) => {
    if(!resultArr[item.weekNumber]) {
      resultArr[item.weekNumber] = [item];
    } else {
      resultArr[item.weekNumber].push(item);
    }
  })
  return resultArr;
}