let arr = ["a", "b", "g", "y", "w", "v"];

const hasString = (x) => {
  let rtn = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      console.log(arr[i]);

      rtn = true;
    }
  }
  return rtn;
};

hasString("a");
