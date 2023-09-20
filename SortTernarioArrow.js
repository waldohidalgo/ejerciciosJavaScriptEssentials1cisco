let numbers = [50, 60, 50, 30, 10, 5, -8];

let sorted = numbers.sort((a, b) => (a == b ? 0 : a < b ? -1 : 1));
console.log(sorted); // [10, 20, 30, 40, 50]
