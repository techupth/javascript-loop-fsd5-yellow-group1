// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber;
for (let i = 0; i < numbers.length - 1; i++) {
  numbers[i] < numbers[i + 1]
    ? (minNumber = numbers[i])
    : (minNumber = numbers[i + 1]);
}

console.log(minNumber);
