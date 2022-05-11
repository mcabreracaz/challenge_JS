let arr = [2, 5, 8, 10, 11, 15];

const reverseArr = (arr) => {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
};

console.log(reverseArr(arr));
