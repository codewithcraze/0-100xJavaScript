function palidrome(string){
    return string === string.split('').reverse().join('');
}

const result = palidrome('mam');
console.log(result);