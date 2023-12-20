/**
 * @param {string} text
 * @return {number}
 */
/* var maxNumberOfBalloons = function(text) { //strait forward shortest way
    const map = { b: 0, a: 0, l: 0, o: 0, n: 0, };

    for (const l of text) {
        map[l]++; 
    }

    return Math.floor(
        Math.min(map.b, map.a, map.l / 2, map.o / 2, map.n)
    );
}; */

/*  // Javascript | ES6 | Hashmap | O(N) Beats 95.16%
   let freq = t => {
    let frequencies = new Map();
    for (const c of t) {
        frequencies.set(c, (frequencies.get(c) || 0) + 1);
    }
    console.log(frequencies);
    return frequencies;
}

var maxNumberOfBalloons = function(text) {

    // 1. Count the char fequencies in text
    // 2. Count the char fequencies in const
    // 3. for each char in const: freqText / freqConst
    // 4. return the min of #3 above.
    const word = 'balloon'
    let freqText = freq(text);
    let freqConst = freq(word);
    let min = Number.MAX_VALUE;

    for (const [c, count] of freqConst) {
        if (!freqText.has(c)) return 0;
        let constCharInText = Math.floor(freqText.get(c) / count);
        console.log('count', count)
        if (constCharInText == 0) return 0;
        min = Math.min(min, constCharInText);
    }
    return min;
}; */

let maxNumberOfBalloons = text => { // Minimal javascript 
    let occurrences = {}, result = 0;
    for (let el of text) {
        occurrences[el] = (occurrences[el] || 0) + 1;
    }
    while (occurrences['a'] > 0 &&
            occurrences['b'] > 0 &&
            occurrences['l'] > 1 &&
            occurrences['n'] > 0 &&
            occurrences['o'] > 1) {
        result++;
        occurrences['a']--;
        occurrences['b']--;
        occurrences['l'] -= 2;
        occurrences['n']--;
        occurrences['o'] -= 2;
    }
    return result;
}

text = "nlaebolko";
text2 = "loonbalxballpoon"

console.log(maxNumberOfBalloons(text2))

// Using the String.prototype.match() method:
// Copy code
const str = "The quick brown fox jumps over the lazy dog";
const substring = "the";
const regex = new RegExp(substring, "gi");
const match = str.match(regex);
const count = match ? match.length : 0;
// console.log(count); // 2 