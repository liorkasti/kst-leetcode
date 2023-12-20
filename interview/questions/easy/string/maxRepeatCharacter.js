<<<<<<< HEAD
const s = "aaaggggcccvvvvcc"
// const s = "StreamChecker"
const maxRepeatCharacter1 = (s) => {
    var char = '';
    var max = 0;
    var repeat = 0;
    var map = {};

    for (var i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            char = s[i];
            repeat++;
        } else {
            repeat = 1;
        }
        map[s[i]] = s[i];
        max = Math.max(max, repeat);
    }

    console.log('char \'' + map[s[max]] + '\' repeats: ' + max);
    return max;
}
const maxRepeatCharacter = (s) => {
    var counts = [26][2];
    var chs = s.Arrays.toCharArray();

    for (var i = 0; i < chs.length; i++) {
        var idx = chs[i] - 'a';
        if (counts[idx][0] == 0) {
            counts[idx][1] = i;
        }
        counts[idx][0]++;
    }

    var max = 0;
    var char = '';

    for (var i = 0; i < counts.length; i++) {
        if (counts[i][0] > max) {
            max = c[1];
            char = c[0];
        }
    }

    console.log('char \'' + (maxIdx + '\'') + ' repeats: ' + max);

    return max;
};

=======
const s = "aaaggggcccvvvvcc"
// const s = "StreamChecker"
const maxRepeatCharacter1 = (s) => {
    var char = '';
    var max = 0;
    var repeat = 0;
    var map = {};

    for (var i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            char = s[i];
            repeat++;
        } else {
            repeat = 1;
        }
        map[s[i]] = s[i];
        max = Math.max(max, repeat);
    }

    console.log('char \'' + map[s[max]] + '\' repeats: ' + max);
    return max;
}
const maxRepeatCharacter = (s) => {
    var counts = [26][2];
    var chs = s.Arrays.toCharArray();

    for (var i = 0; i < chs.length; i++) {
        var idx = chs[i] - 'a';
        if (counts[idx][0] == 0) {
            counts[idx][1] = i;
        }
        counts[idx][0]++;
    }

    var max = 0;
    var char = '';

    for (var i = 0; i < counts.length; i++) {
        if (counts[i][0] > max) {
            max = c[1];
            char = c[0];
        }
    }

    console.log('char \'' + (maxIdx + '\'') + ' repeats: ' + max);

    return max;
};

>>>>>>> origin/master
console.log(`output:`, maxRepeatCharacter(s));