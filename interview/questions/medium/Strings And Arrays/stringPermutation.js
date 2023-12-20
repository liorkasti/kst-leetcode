function permute(str, result = []) {
    if (str.length === 0) {
        console.log(result.join(''));
    } else {
        for (let i = 0; i < str.length; i++) {
            let firstChar = str[i];
            let remainingStr = str.slice(0, i) + str.slice(i + 1);
            permute(remainingStr, result.concat(firstChar));
        }
    }
}

// permute("abc");

const getPermutations = (str) => {
    let permutations = [];

    function permute(currentPerm, unusedChars) {
        // console.log('currentPerm, unusedChars :>> ', currentPerm, unusedChars);
        if (unusedChars.length === 0) {
            permutations.push(currentPerm);
        } else {
            for (let i = 0; i < unusedChars.length; i++) {
                permute(currentPerm + unusedChars[i], unusedChars.slice(0, i) + unusedChars.slice(i + 1));
            }
        }
    }
    permute("", str);
    // console.log('permutations :>> ', permutations);
    return [...new Set(permutations)];
}

console.log(getPermutations("aabb"));
// console.log([...new Set([
//     'aabb', 'aabb', 'abab',
//     'abba', 'abab', 'abba',
//     'aabb', 'aabb', 'abab',
//     'abba', 'abab', 'abba',
//     'baab', 'baba', 'baab',
//     'baba', 'bbaa', 'bbaa',
//     'baab', 'baba', 'baab',
//     'baba', 'bbaa', 'bbaa'
// ])]);

/* 
Note that this solution has a time complexity of O(n! * n)
and space complexity of O(n!), 
where n is the length of the input string. 
It is therefore not recommended for very large inputs. 
*/