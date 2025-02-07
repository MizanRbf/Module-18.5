const numbers = [3, 4, 64, 33]
console.log(numbers.length);
console.log(numbers[3]);
numbers[3] = 99;
console.log(numbers);
numbers.push(55);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift(34);
console.log(numbers);
numbers.unshift(34);
console.log(numbers);

console.log(numbers.includes(57));

console.log(numbers.indexOf(64));

console.log(Array.isArray(numbers));
