// 📅 Day-04.js: Arrays & Methods

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(n => console.log(n));
let doubled = numbers.map(n => n * 2);
let evens = numbers.filter(n => n % 2 === 0);
let sum = numbers.reduce((acc, curr) => acc + curr, 0);

/*
🧠 Day-04 Questions:
1. What does `map()` do? (Easy)
2. How is `reduce()` different from `filter()`? (Medium)
3. What happens if we return nothing in `map()`? (Medium)
4. How to clone an array using spread operator? (Hard)
5. Can you use `reduce()` to flatten a nested array? (Hard)
*/