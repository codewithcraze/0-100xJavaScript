/*
Here is an example of merging and sorting of two array passing as an argument into function
*/
function mergeSorted(array1, array2){
    let arrayItem1 = array1[0];
    let arrayItem2 = array1[0];
    const mergedArray = [];
    while(array1 || array2){
      if(arrayItem2 = undefined || arrayItem1 > arrayItem2){
        mergedArray.push(arrayItem1);
        arrayItem1 = array1[i];
        i++;
      }else{
        mergedArray.push(arrayItem2);
        arrayItem2 = array2[j];
        j++;
      }
    }
}