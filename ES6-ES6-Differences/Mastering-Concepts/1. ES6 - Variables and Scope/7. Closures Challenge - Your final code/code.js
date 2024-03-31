// Create an empty array. 
// Using a for loop insert three functions logging their corresponsing index inside the array.
// Provide the solution in both ES5 and ES6


// ES6 (easiest)  This is an array function

let cars = []; 

for(let i = 0; i < 3; i++){
    cars[i] = function(){
        console.log(i);
    }
}

cars[0]();
cars[1]();
cars[2]();



// let mars = [];
// for (let j = 0; j < 4; j++) {
//     mars[j] = function(){
//         console.log(j + " This is the funny One");
//     };
// }

// mars[0]();
// mars[1]();
// mars[2]();
// mars[3]();


// ES5
var bikes = [];
function f(x){ // Closures
    return function(){
        console.log(x);
    };
}

let tempo = [];
for(var i = 0; i < 3; i++){
    tempo[i] = f(i);
}

tempo[0]();
tempo[1]();
tempo[2]();

for(var i = 0; i < 3; i++){
    bikes[i] = function(){
        console.log(i) 
    }; // Here it will return only 3.
}

bikes[0]();
bikes[1]();
bikes[2]();


// function fr(x){
//     return function (){
//         console.log(x);
//     }
// }
// let ram = [];
// for(let k = 0; k < 3 ; k++){
//     ram[k] = fr(k)
// }
// ram[0](); 