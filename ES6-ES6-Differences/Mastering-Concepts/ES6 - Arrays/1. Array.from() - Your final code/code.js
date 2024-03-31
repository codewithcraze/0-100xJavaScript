// Why do you need to create arrays from other objects?

let arr = [1, 2, 3];
console.log(arr.map((x) => x * 3));

let str = 'Hello';
console.log(arr.map( (x) => x + 'A' ));

// Map return an array after performing an operation on each value of the array.
console.log(str.split('').map((el) => el + 1));

// ES5
console.log(Array.prototype.map.call(str, function(x){
    return x + 'a'; 
}));


let array = Array.from(str);
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

 // Create an array from function arguments
function g(x, y){
    console.log(Array.from(arguments));
}

g(1, 2, ...arr);

// Use the optional map function
let str2 = 'strawberry';
console.log(Array.from(str2, (x) => x + " "));


console.log(Array.from(str2, (x) => x.toUpperCase() + " SriNivasan"));
// From any object with a length property

const obj = {length: 4}; // Property 

console.log(Array.from(obj)); 
console.log(Array.from(obj, (value)  => 2 * 2));
console.log(Array.from(obj, (value, index) => index * 2));


// Create an array from Sets and Maps (Iterable Objects)
let mySet = new Set();
mySet.add('John');
mySet.add(1);

console.log(mySet);
console.log(typeof(mySet));

console.log(mySet.size);

console.log(Array.from(mySet));

const object = {
    name: 'Deepak',
    class: 12,
    year: 2003
}

const arrayofObject = Object.entries(object);
let result = '';
for(let i = 0; i < arrayofObject.length; i++){
    result += `${arrayofObject[i][0]} : ${arrayofObject[i][1]}, \n`
}

console.log(result);

{
  let temp = (Array.from(mySet)); // Convert object into array.
  for (let i = 0; i < temp.length; i++) {
     console.log(temp[i]);
  }
}


let myrat = new Set();

myrat.add(3);
myrat.add(2);
myrat.add(4);
console.log(myrat); 
// Different and unique element set

const myMap = new Map([[1,2], [3,4]]);
console.log(myMap);
console.log(Array.from(myMap));