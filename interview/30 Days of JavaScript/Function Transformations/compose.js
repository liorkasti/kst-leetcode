/* 2629. Function Composition [Easy]
https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

 

Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function */
/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function(functions) {
    return function(x) {
    if (functions.length === 0) {
      return x;
    } else {
      var result = x;
      for (var i = functions.length - 1; i >= 0; i--) {
        console.log(result)

        result = functions[i](result);
      }
      return result;
    }
  }
};

// const compose = (functions) => {
//     return functions.reduce((acc, fn) => {
//       return (x) => acc(fn(x));
//     }, (x) => x);
//   };

  const fn = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
  console.log(fn(4)); // 4000

/* const compose = (functions) => (x) => {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }

  return functions.reduceRight(function (prevFn, nextFn) {
    return function (x) {
      return nextFn(prevFn(x));
    };
  });
};


// give:
// var compose = function (functions) {
//   return function (x) {};
// };

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
/* 
Using Array.prototype.reduce():
const compose = (functions) => {
  return functions.reduce((acc, fn) => {
    return (x) => acc(fn(x));
  }, (x) => x);
};


Using the spread operator and Function.prototype.bind():
const compose = (functions) => {
  const composed = functions.reduceRight((acc, fn) => {
    return acc.bind(null, fn);
  }, (x) => x);
  return composed;
};


Using the spread operator and Function.prototype.call():
const compose = (functions) => {
  const composed = (x) => {
    return functions.reduceRight((acc, fn) => {
      return fn.call(null, acc);
    }, x);
  };
  return composed;
};

Using the spread operator and Function.prototype.apply():
const compose = (functions) => {
  const composed = functions.reduceRight((prevFn, nextFn) => {
    return function(x) {
      return prevFn.apply(null, [nextFn(x)]);
    };
  }, function(x) { return x; });
  
  return composed;
};

Using recursion:
const compose = (functions) => {
  if (functions.length === 0) {
    return (x) => x;
  } else if (functions.length === 1) {
    return functions[0];
  } else {
    const [fn, ...rest] = functions;
    return (x) => fn(compose(rest)(x));
  }
}; */
 */