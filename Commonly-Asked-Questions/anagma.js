function anagma(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let charSet1 = {};
    let charSet2 = {};

    for(let char of str1){
        charSet1[char] = (charSet1[char] || 0) + 1;
    }
    
    for(let char of str2){
        charSet2[char] = (charSet2[char] || 0) + 1;
    }

    for(let char in charSet1){
        if(!charSet2.hasOwnProperty(char)){
            return false;
        }
    }
    return true;
}

const result = anagma('ram', 'mar');
console.log(result);