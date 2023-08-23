// Using Iteration Version 
function fibs(num) {
  const sequence = [0, 1];

  if (num < 2) return sequence.splice(0, num); 

  while (num > 2) {
    const newNum = sequence.at(-1) + sequence.at(-2);
    sequence.push(newNum);
    num--;
  }

  return sequence;
}

// Using Recursion Version
const fibsRec = (num, seq = [0, 1]) => {
  if (seq.length >= num) return seq;
  return fibsRec(num, [...seq, seq[seq.length - 2] + seq[seq.length - 1]]);
}


console.log(fibs(3)); // [ 0, 1, 1]
console.log(fibs(5)); // [ 0, 1, 1, 2, 3 ]
console.log(fibsRec(8)); // [ 0, 1, 1,  2, 3, 5, 8, 13 ]