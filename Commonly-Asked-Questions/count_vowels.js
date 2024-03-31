function countVowels(string){
    let vowels = 0;
    for(let i = 0; i < string.length; i++){
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
            vowels++;
        }
    }
    return vowels;
}


const string = 'deepak chaudhary'
const result = countVowels(string);
console.log(result);