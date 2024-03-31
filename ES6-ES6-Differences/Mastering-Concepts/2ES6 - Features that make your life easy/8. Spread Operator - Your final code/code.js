console.log(Math.min(3, 6, 9));
console.log(Math.min(...[3, 6, 9]));
console.log(Math.max(...[343,3434,3432,2342,34234]))

// ES5
console.log(Math.min.apply(null, [3, 6, 9]));

//ES6
console.log(Math.min(...[3, 6, 9]));

let x = [3, 4, 17];
console.log(Math.max(1, 3, ...x, 19));

console.log([1, 3, 6, ...x, 5]);

let z = [3,353,53,323,532];
let y = [...z, ...x, ...[23,23,534,46,22]];

console.log(Math.max(...y));
console.log(([33,43,23,133, ...z]))