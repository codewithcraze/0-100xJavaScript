// Push Method

let arr = [1, 2, 3];

console.log(arr.push(4));
// Add an element at last.

console.log(arr.pop());
// Remove an element at Last

console.log(arr.shift());
// Remove an element at First.

console.log(arr.unshift(4));
// Add an element at First.

console.log(arr);

/*
|--------------------------|
*/

let Array = [1, 2, 3, 4, 5, 6, 7, 8];

// Slice Extract The part from the Array.

console.log(Array.slice(-2));
// - (Negative Sign Extract Part from the last)
console.log(Array.slice(3, 4));
// Don't mutate the final Array.
console.log(Array);

// Splice  |-> It mutate the Array.
// It is use for adding removeing elements.

// array.splice(start[, deleteCount, item1[, item2[, ...]]]])
// start: The index at which to start changing the array.If negative, it counts from the end of the array.
// deleteCount: An optional parameter specifying the number of elements to remove.If set to 0, no elements are removed.
// item1, item2, ...: Optional parameters representing the elements to be added to the array at the specified start index.

console.log(Array.splice(1)); 
console.log(Array.splice(1,0,23,23,23,23)); 
// remove all the element from the main array except the initial one.
console.log(Array);

// Reduce.

const Sum = Array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(Sum);

// Filter

const NumbersArray = [1,2,3,4,5,6,7,8,9];

const getEven = NumbersArray.filter(a => a % 2 === 0);
console.log(getEven);

const getOdd = NumbersArray.filter(a => a % 2 !== 0)
console.log(getOdd);


// Map get iterate over the each value of the array and modify it.

let mutatedArray = NumbersArray.map(item => item * 4);
console.log(mutatedArray);


// forEach Don't create a new Array like the map it directly mutate the real Array.

NumbersArray.forEach(item => console.log(item));
let array = [23,4,5,6,7,2];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}

let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}
let count = 0;
do{
  console.log(array[count]);
  count++;
}while(count < array.length);










