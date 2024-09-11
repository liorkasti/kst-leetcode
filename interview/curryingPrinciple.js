function sumXY(x) {
    return function (y) {
        return x + y;
    }
}

// You can also use arrow function for this purpose
const sum = x => y => x + y;

let add5 = sum(5);
console.log(add5(3)); // 8
console.log(add5(10)); // 15


/* Currying is an advanced technique of working with functions. It’s used not only in JavaScript, but in other languages as well.
Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
Currying doesn’t call a function. It just transforms it.
Let’s see an example first, to better understand what we’re talking about, and then practical applications.
We’ll create a helper function curry(f) that performs currying for a two-argument f. In other words, curry(f) for two-argument f(a, b) translates it into a function that runs as f(a)(b):
 */
function curry(f) { // curry(f) does the currying transform
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}

// usage
function sumRegular(a, b) {
    return a + b;
}

const add = (a, b, c) => {
    return a + b + c
}
// console.log(add(2, 3, 5)) // 10

// Curried version//
const addCurry = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(addCurry(2)(3)(5)) // 10