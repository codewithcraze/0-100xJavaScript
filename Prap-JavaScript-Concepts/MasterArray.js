// 50 Easy Array Questions.
// Example Here I solve 50 question of javascript that helps in understanding core concept of javascript.

// 1. Adding two Arrays.

function mergeArray(array1, array2) {
    return array1.concat(array2); // Concat method merge two and more arrays.
}

const result = mergeArray([1, 2, 3, 4], [5, 6, 7, 8, 9]);
console.log(result);

//  2. Example Here we create an function which takes an array and gives the average of the arrays values.

function average(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
// Another Way.
function Average(arr){
    const sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);  

    return sum / arr.length;
}

//  3. Example Create a function that takes an array and create a new Array which have string that is greater than 5 length from the existing array.
function stringGreat(arr) {
    const shortedArray = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) {
            shortedArray.push(arr[i]);
        }
    }
    return shortedArray;
}
stringGreat(['Banana', 'Grapes', 'pea', 'Tomato', 'Oranges', 'Pine Apple']);

//  4. Example Write a function that takes an array of number and returns a new array with all the odd number;
function fingerboard(arr) {
    const numbers = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            numbers.push(arr[i]);
        }
    }
    return numbers;
}
fingerboard([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 5. Example Write an function that takes an array of numbers and return a new array with all the even number and also find the sum of all the even numbers;
function even1fun(arr) {
    let evenness = [];
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenness.push(arr[i]);
            temp = temp + arr[i];
        }
    }
    return {sum: temp, array: evenness}; // return mutliple values by encapsulating the data in object and array.
}

const resu = even1fun([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(resu);


// 6. Example Write a function that takes an array and return the maximum of the index.values;

function maximum(arr) {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const maxvalue = maximum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(maxvalue);

// 7. Example Sum of the elements of array

function sum(arr) {
    let add = 0;
    for (i = 0; i < arr.length; i++) {
        add += arr[i];
    }
    return add;
}

sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// 8. Find Sum of all positive number from an Array.

function sumOfPositiveNumbers(arr) {
    return arr.filter(val => val > 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const res = sumOfPositiveNumbers([23,-323,21,4,-12,-42]);
console.log(res);


// 9. Rotate An Array to Right By K Steps. 

function rotateArray(arr, k){
    let rot = k % arr.length;
    return arr.slice(-rot).concat(arr.slice(0, -rot));;
    
}

const rotateArrayResult = rotateArray([3,4,5,6,7,8], 2);
console.log(rotateArrayResult);

// 10. 
