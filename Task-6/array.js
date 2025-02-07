// length
const numbers = [3, 4, 64, 33]
console.log(numbers.length);

// index
console.log(numbers[3]);

// set value by index
numbers[3] = 99;
console.log(numbers);

// add value
numbers.push(55);
console.log(numbers);

// delete value
numbers.pop();
console.log(numbers);

// delete value from first
numbers.shift(34);
console.log(numbers);

// readd value
numbers.unshift(34);
console.log(numbers);

// includes
console.log(numbers.includes(57));

// indexOf
console.log(numbers.indexOf(64));

// isArray
console.log(Array.isArray(numbers));
