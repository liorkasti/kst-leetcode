<<<<<<< HEAD
/* console.log([...new Set([
    'aabb', 'aabb', 'abab',
    'abba', 'abab', 'abba',
    'aabb', 'aabb', 'abab',
    'abba', 'abab', 'abba',
    'baab', 'baba', 'baab',
    'baba', 'bbaa', 'bbaa',
    'baab', 'baba', 'baab',
    'baba', 'bbaa', 'bbaa'
])]); */

/* Write 2 functions in js: 
one, is insert that receives a string and inserts it into a data structure. 
and two, is get that receives a string and returns an array of all possible 
permutations to the received string if they exist in a data structure */
let data = {};

function insert(str) {
    data[str] = true;
}

function get(str) {
    let permutations = [];

    function permute(str, l, r) {
        if (l == r) {
            console.log(str);
            permutations.push(str);
        } else {
            for (let i = l; i <= r; i++) {
                str = swap(str, l, i);
                permute(str, l + 1, r);
                str = swap(str, l, i);
            }
        }
    }

    function swap(str, i, j) {
        let temp = str.split('');
        let tempValue = temp[i];
        temp[i] = temp[j];
        temp[j] = tempValue;
        return temp.join('');
    }

    permute(str, 0, str.length - 1);

    let result = permutations.filter(function (val) {
        return data.hasOwnProperty(val);
    });

    return result;
}

str = 'aabb'

insert('aabb');
insert('abab');
insert('abba');
insert('baba');
=======
/* console.log([...new Set([
    'aabb', 'aabb', 'abab',
    'abba', 'abab', 'abba',
    'aabb', 'aabb', 'abab',
    'abba', 'abab', 'abba',
    'baab', 'baba', 'baab',
    'baba', 'bbaa', 'bbaa',
    'baab', 'baba', 'baab',
    'baba', 'bbaa', 'bbaa'
])]); */

/* Write 2 functions in js: 
one, is insert that receives a string and inserts it into a data structure. 
and two, is get that receives a string and returns an array of all possible 
permutations to the received string if they exist in a data structure */
let data = {};

function insert(str) {
    data[str] = true;
}

function get(str) {
    let permutations = [];

    function permute(str, l, r) {
        if (l == r) {
            console.log(str);
            permutations.push(str);
        } else {
            for (let i = l; i <= r; i++) {
                str = swap(str, l, i);
                permute(str, l + 1, r);
                str = swap(str, l, i);
            }
        }
    }

    function swap(str, i, j) {
        let temp = str.split('');
        let tempValue = temp[i];
        temp[i] = temp[j];
        temp[j] = tempValue;
        return temp.join('');
    }

    permute(str, 0, str.length - 1);

    let result = permutations.filter(function (val) {
        return data.hasOwnProperty(val);
    });

    return result;
}

str = 'aabb'

insert('aabb');
insert('abab');
insert('abba');
insert('baba');
>>>>>>> origin/master
console.log(get(insert(str)));