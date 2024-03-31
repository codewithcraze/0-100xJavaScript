function sumOfArray(array){
    const result = array.reduce((accumulator, currentValue) => accumulator + currentValue);
    return result;    
}

const array = [1,2,3,45,6,23];
const result = sumOfArray(array);
console.log(result);