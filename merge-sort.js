// Merge Sort Algorithm
const mergeSort = (array) => {
  if (array.length < 2) return array;

  const midPoint = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0, midPoint));
  const rightHalf = mergeSort(array.slice(midPoint));
  return merge(leftHalf, rightHalf);
}

const merge = (left, right) => {
  const mergeResult = [];

  while(left.length > 0 && right.length > 0) {
    const arrayWithin = left[0] < right[0] ? left : right;
    const mergeArray = arrayWithin.shift();
    mergeResult.push(mergeArray);
  }

  return mergeResult.concat(left, right);
}

const array = [6, 9, 3, 2, 7, 5]; // [ 2, 3, 5, 6, 7, 9 ]
console.log(mergeSort(array));