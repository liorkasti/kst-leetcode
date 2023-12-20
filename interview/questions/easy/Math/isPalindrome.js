/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    //guess if it's a uni digit  integer, it's automatically a palindrome
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }

    if (x.toString().split('').reverse().join('') === x.toString()) {
        return true
    } else {
        return false
    }

};

function isPalindrome2(x) {
    // Negative numbers are not palindrome
    if (x < 0) return false;
    // Compare the first and last digit of the number
    let div = 1;
    while (x / div >= 10) div *= 10;
    while (x > 0) {
        let l = Math.floor(x / div);
        let r = x % 10;
        if (l !== r) return false;
        x = Math.floor((x % div) / 10);
        div /= 100;
    }
    return true;
}

var isPalindrome3 = function (x) {
    if (x < 0) return false

    let rev = 0
    for (let i = x; i >= 1; i = Math.floor(i / 10)) rev = rev * 10 + i % 10
    return rev === x
};
console.log(isPalindrome(121));

/* The first solution that uses the toString() method to convert the input to a string, then uses the split(), reverse(), and join() methods to reverse the string, and finally compares the reversed string to the original string is relatively simple and easy to understand but it has a time complexity of O(n) where n is the length of the number in digits. This is because the function has to iterate over each character in the string and compare it to the corresponding character in the reversed string. This is not the most efficient solution and for large integers, it could be slow.

The second solution that uses mathematical operations to compare the first and last digits and move inward is more efficient in terms of time complexity. It has a time complexity of O(log10(n)) where n is the input number. It avoids creating a new string and also it doesn't need to reverse the input. This algorithm compares only half of the digits which is less than the first solution and for large integers, it will be faster.

In terms of space complexity, both solutions have a space complexity of O(1) because they don't use any data structures to store additional information.

In conclusion, the second solution is more efficient than the first one, it's both faster and uses less memory. */