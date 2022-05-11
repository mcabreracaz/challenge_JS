let evenArray = [];

const insertEven = (num) => {
  if (num % 2 === 0) {
    evenArray.push(num);
  } else {
    console.log(num, "is not even");
  }
};

insertEven(1);
insertEven(2);
insertEven(0);
insertEven(3245);

console.log(evenArray);
