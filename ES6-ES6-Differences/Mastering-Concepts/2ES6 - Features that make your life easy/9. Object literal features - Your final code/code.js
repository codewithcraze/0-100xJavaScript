// Object literal features

// Method definition
const phone = {
    ring(i){
       // window.alert("beep ".repeat(i));
       console.log("beep".repeat(i));
    }, 
    bing(){
        console.log(' bing'.repeat(5));
    }
};
phone.bing();
phone.ring(2);

// Computed property keys
const x = 'make';
function g(){
    return 'ring';
}

const phone2 = {        // g() ---> ring.
    [x]: 'Samsung',
    [g()](i){
        console.log("beep ".repeat(i));
    }
};   

// We can create Custom keys for an Object.


console.log(phone2);
phone2.ring(4);

//new Object methods: assign
Object.assign(phone2, {warranty: 24});
console.log(phone2);

