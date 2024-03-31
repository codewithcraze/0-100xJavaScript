let y = 2;

{
    let x = 1;
    let z = 2;
    console.log(z); // result -> 2.
    console.log(x); // result -> 1.
}

{
    // console.log(x); //error
    let z = 4;// no redeclaration error, variables are in different scopes now.
    console.log(z);
    console.log(y); // 2
}

//ES5 using IIFE (fake scoping)

function temp(){
   let x = 1;
   let z = 2;
   console.log(z);
};

temp();

function ramp(){
   let z = 4;
   console.log(z);
   console.log(y);
};

ramp();

// Problem.

let mark = 80;
if(mark > 50){
   let pass = true;
}else{
   let pass = false;
}
console.log(pass); // result ->  ReferenceError: pass is not defined


// To fix this:
let pass;
// let mark = 40;
if(mark > 50){
    pass = true;
}else{
    pass = false;
}
console.log(pass);

