function longestPalindrome(s) {
    // ll: Left index of the longest palindrome.
    // rr: Right index of the longest palindrome.
    let ll = 0, rr = 0;
  
    // Iterate all palindromes with center indices
    // [..., i, ...] or [... i, i+1, ...]
    for (let i = 0; i < s.length; i++) {
      for (let j of [i, i+1]) {
        for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
  
          // Found a new palindrome [l, ..., i, j, ..., r]
          // Update the ll, rr if the newly found palindrome is longer than the
          // existing one.
          console.log( [ll, rr] );
          [ll, rr] = (r-l+1) > (rr-ll+1) ? [l, r] : [ll, rr];
      }
    }
    return s.substring(ll, rr+1);
  }

  function longestPalindrome2(s) {
    let longest = "";
    for (let i = 0; i < s.length; i++) {
        let palindrome1 = expandAroundCenter(s, i, i); // for odd length palindrome
        let palindrome2 = expandAroundCenter(s, i, i + 1); // for even length palindrome
        let currentLongest = palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;
        longest = currentLongest.length > longest.length ? currentLongest : longest;
    }
    return longest;
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left + 1, right);
}

  s = "cbbd"

  console.log(longestPalindrome(s));

  /* This approach has a time complexity of O(n^2) 
  where n is the length of the input string, because for each character 
  in the string, it takes O(n) time to expand around the center 
  and find the longest palindrome substring. However, it's quite 
  efficient, and it's one of the most common approach used to solve
  this problem. */

  function longestPalindrome3(s) {
    let T = preProcess(s);
    let n = T.length;
    let P = new Array(n).fill(0);
    let C = 0, R = 0;
    for (let i = 1; i < n - 1; i++) {
        let iMirror = 2 * C - i;
        P[i] = (R > i) ? Math.min(R - i, P[iMirror]) : 0;

        // Attempt to expand palindrome centered at i
        while (T[i + 1 + P[i]] === T[i - 1 - P[i]]) {
            P[i]++;
        }

        // If palindrome centered at i expand past R,
        // adjust center based on expanded palindrome.
        if (i + P[i] > R) {
            C = i;
            R = i + P[i];
        }
    }

    // Find the longest palindrome
    let maxLen = 0, centerIndex = 0;
    for (let i = 1; i < n - 1; i++) {
        if (P[i] > maxLen) {
            maxLen = P[i];
            centerIndex = i;
        }
    }

    return s.slice((centerIndex - 1 - maxLen) / 2, (centerIndex - 1 + maxLen) / 2);
}

// preprocessing the input string
function preProcess(s) {
    let n = s.length;
    if (n === 0) return "^$";
    let ret = "^";
    for (let i = 0; i < n; i++) ret += "#" + s[i];
    ret += "#$";
    return ret;
}
/* This approach has a time complexity of O(n) where n is the length of the i
nput string, it's faster than the expanding around center approach and it's 
considered as one of the most efficient algorithms to solve this problem. 
The space complexity is O(n), as it uses an additional array of size n to 
store the lengths of palindrome. */