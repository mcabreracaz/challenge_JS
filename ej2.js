let arr = [0, 3, 8, 9, 12, 11, 34, 37];

const getEvenList = (arr) => {
  let tempArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      tempArr.push(arr[i]);
    }
  }
  return tempArr;
};

console.log(getEvenList(arr));
