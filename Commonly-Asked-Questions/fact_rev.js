function factorial(n){
    if (n === 0) {
        return;
    }else{
        let fact = 1; 
        while(n > 0){
            fact *= n;
            n--;
        }
        return fact;
    }
}

const result = factorial(5);
console.log(result);