
const bubbleSort = (array) => {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {

      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }

    }
    
  }
  return array
};

const test = () => {
  console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
  console.log(bubbleSort([5,1,3,2,4,6,0]));
};

test()
