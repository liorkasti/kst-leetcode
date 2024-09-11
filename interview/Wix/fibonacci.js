// Fibonacci program 
// Fibonacci series - 1,1,2,3,5,8,13,21.... f(n) = f(n-1)+f(n-2)

let arr = [];

function fibonacci(index) {
    if (arr[index] != null) {
        return arr[index]
    }

    let start = arr.length || 1;

    if (index < 2) return index;

    let a = start + 1, b = start, sum = a + b, len = index;
    arr.push(a)
    arr.push(b)

    while (len > start) {
        sum = a + b;
        a = b;
        b = sum;
        --len;
    }
    arr.push(sum);
    return sum;
}

console.log(fibonacci(8))
console.log(fibonacci(5))
console.log(fibonacci(9))
console.log(fibonacci(10))