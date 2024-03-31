// ES6
// let x = 1;
// redeclaration throws an error unlike var

//scope
let x = 1; // Global scope
function add(y){
    let x  = 34; 
    //local scope
    return y + x;
}
console.log(add(3)); // result -> 37.
//so let variables can be accessed from inside functions if declared in their outer environment just like var
function add2(y){
    let x = 2;
    return y + x;
}
console.log(add2(3)); // result -> 5.

// Hoisting
// console.log(z);
// Temporal dead zone
console.log(z); // throw an error that can't access z before initilization.
// while in case of var we get an undefined.
let z; // z value should defined till then it is undefined.
console.log(z);
z = 1;
console.log(z);