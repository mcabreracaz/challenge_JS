let arr = [2, 5, 8, 10, 11, 15];

const sumAllElements = (arr) => {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    x = x + arr[i];
  }

  return x;
};

console.log(sumAllElements(arr));
