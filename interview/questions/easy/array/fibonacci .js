var fib = function(n) {
    if (n < 2) return n;
    
    let a = 0;
    let b = 1;
    let sum = a + b;

    while(n>1){
        sum= a + b;
        a= b;
        b= sum;
        n--;
    }
    return sum;
}

console.log(fibonacci(8))
console.log(fibonacci(5))
console.log(fibonacci(9))
console.log(fibonacci(10))