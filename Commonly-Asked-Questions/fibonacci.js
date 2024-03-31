function fibonacci(n){
    let firstTerm = 0;
    let secondTerm = 1;
    let fibonacci = firstTerm + " " + secondTerm + " "; 
    for(let i = 0; i < n-2; i++){
        let nextTerm = firstTerm + secondTerm;
        fibonacci += nextTerm + " ";
        [firstTerm, secondTerm] = [secondTerm, nextTerm];
    }
    return fibonacci;
}

const result = fibonacci(10);
console.log(result);