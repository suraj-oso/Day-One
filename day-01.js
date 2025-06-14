const value= 1;
console.log(value);
console.log(value + 1); 



// this is a code from deepanshu 
//ever or odd
const number = 2;
if (number % 2 === 0) {
    console.log("Even");
}else {
    console.log("Odd");
}

const value2= 5;
console.log(value2);



// FIRST QUESTION IN ARRAY ------

let arr = [1, 4, 5, 6, 0, 0, 9, 0];
let pos = 0; // Position to place the next non-zero

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    // Swap arr[i] with arr[pos] if i != pos
    if (i !== pos) {
      let temp = arr[i];
      arr[i] = arr[pos];
      arr[pos] = temp;
    }
    pos++;
  }
}

console.log(arr);  // [1, 4, 5, 6, 9, 0, 0, 0]





