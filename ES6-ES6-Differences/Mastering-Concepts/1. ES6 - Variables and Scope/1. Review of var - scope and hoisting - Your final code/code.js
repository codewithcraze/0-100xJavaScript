//ES5: we declared variables using var
var x = 1; 
//global scoped

// Variables were global scoped or function scoped

function add1(y){
    var x = 2; //function scoped
    return y + x;
}
console.log(add1(3)); // result -> 5

function add2(y){
    return y + x;
}
console.log(add2(3)); // result -> 4

// They were also hoisted
var z;
console.log(z); // undefined, No error thanks to hoisting
var z = 1;
console.log(z); // result -> 1


//GLOBAL SCOPE, LOCAL SCOPE
var x = 23;

function add(y){
    var x = 34;
    // local variable
    return x + y;
}

console.log(add(3)); // result -> 37


let l = 34;
console.log(l); // Simple result is 34