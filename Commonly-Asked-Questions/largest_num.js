function findLargest(array){
    let largest = Number.NEGATIVE_INFINITY;
    for(let i = 0; i <array.length; i++){
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest
}
const array = [2,12,42,15,63,61]
const result = findLargest(array);
console.log(result);
