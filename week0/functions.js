/**
 * 1. Write a funcion that accepts your firstName and lastName
 * Should return 'I'm firstName lastName'
 */

function sayWho1(firstName, lastName) {
    return `I'm ${firstName} ${lastName}`;
}

console.log(sayWho1('Viktor', 'Gurev'));


function sayWho2([firstName, lastName]) {
    return `I'm ${firstName} ${lastName}`;
}

console.log(sayWho2(['Viktor', 'Gurev']));


function sayWho3() {
    return `I'm ${arguments[0]} ${arguments[1]}`;
}

console.log(sayWho3('Viktor', 'Gurev'));


function sayWho4(str) {
    return `I'm ${str.split(' ')[0]} ${str.split(' ')[1]}`;
}

console.log(sayWho4('Viktor Gurev'));

/**
 * 2. Write a function that accepts numbers and return their sum
 * No limits for arguments count
 */

function countSum(...arr) {
    return arr.reduce((sum, item) => sum + item);
}

console.log(countSum(4, 5, 23));
console.log(countSum(10, 50, 212, 300, 22));
console.log(countSum(1, 2));

/**
 * 3. Write a function that count number of letters in provided string
 */

function countLetters1(string, letter) {
    return string.split(letter).length - 1;
}

console.log(countLetters1('Node developer', 'd'));


function countLetters2(string, letter) {
    return string.match(new RegExp(letter, 'g')).length;
}

console.log(countLetters2('Node developer', 'd'));

/**
 *  4. Write function that will return random integer in range that you provided
 */

function getRandom(start, end) {
    return Math.floor(start + Math.random() * (end - start + 1));
}

console.log(getRandom(0, 10));
console.log(getRandom(90, 200));