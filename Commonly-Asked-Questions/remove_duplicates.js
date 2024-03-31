function removeDuplicates(array){
   let uniquArray = [];
   for(let item of array){
    if(!uniquArray.includes(item)){
        uniquArray.push(item);
    }
   }
   return uniquArray;
}


const array = [12,12,44,23,56,64,75];
const result = removeDuplicates(array);
console.log(result);