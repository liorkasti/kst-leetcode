/**
 * @param {string} s
 * @return {boolean}
 */

// const s = "}{"
const s = "({((hgdhgd)[ghd]{hgdhg})})"
// const s = "{[bfsbfs]}"
// const s = "([)]"

const isValid = (s) => {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '(' || s[i] !== '[' || s[i] !== '{') {continue;}// if not opening bracket, continue to next iteration of loop.
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {// push the opening bracket into the stack if it is an opening bracket .
            stack.push(s[i])
            console.log(`stack`, stack)
        } else {
            if (stack.length === 0) {// if the stack is empty, then the current closing bracket is invalid.
                return false
            }
            const last = stack.pop()// pop the last opening bracket from the stack.
            console.log(`last`, last)
            if (s[i] === ')' && last !== '(') {// if the current closing bracket is a ) and the last opening bracket is not a (, then the current closing bracket is invalid.
                return false
            }
            if (s[i] === ']' && last !== '[') {// if the current closing bracket is a ] and the last opening bracket is not a [, then the current closing bracket is invalid.
                return false
            }
            if (s[i] === '}' && last !== '{') {// if the current closing bracket is a } and the last opening bracket is not a {, then the current closing bracket is invalid.
                return false
            }
        }
    }
    return stack.length === 0
};


// const isValid = (s) => {
//     var st = []
//     for (var l of s)
//         if ((i = "({[]})".indexOf(l)) > -1)
//             if (st[st.length - 1] + i === 5)
//                 st.length--;
//             else
//                 st.push(i);
//     return st.length === 0
// };

console.log(`output: `, isValid(s));

/*
 T.C: O(N)
 S.C: O(N)
Idea:
    When we encounter an opening bracket, we will need its closing bracket in the nearest future.
    Therefore, we push a closing bracket of the same type into a stack.
    When we encounter a closing bracket, it should be equivalent to the popped bracket (on top of stack).
    Otherwise, the given string is invalid.
    At the end, the stack should be empty (all parentheses had its own pair)
*/