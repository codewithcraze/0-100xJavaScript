function calculateArithmatic(a, b, fn){
    return fn(a, b);
}

const sum = (a, b) => {
    return a + b;
}

const result = calculateArithmatic(12, 23, sum);
console.log(result); 