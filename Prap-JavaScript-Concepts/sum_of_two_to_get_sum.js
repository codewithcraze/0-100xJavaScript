/*
This is the question asked in google this is the solution through O(n^2)

here we have given and array [1,4,3,4]
and we have find the sum of any index = 8 

Here I solve the question with nested for loop.
and this is not the best solution for the given problem in consideration of time complexcity and speed complexicity.

*/
let array = [1,4,3,4];

myFunction = array =>{
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
                let sum = array[i] + array[j];
                if(sum == 8){
                    console.log("here we find the sum is 8   " + array[i] + "  " + array[j]);
                    continue;
                }

        }  
    }
}


myFunction(array);
