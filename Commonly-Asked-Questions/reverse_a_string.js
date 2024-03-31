// Reverse a String.

function reverseString(string){
    let result = string.split('').reverse().join('');
    return result;
}

let str = "Hello World!";
console.log(reverseString(str));