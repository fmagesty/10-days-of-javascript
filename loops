'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
let vowels = ['a', 'e', 'i' ,'o' ,'u'];

function vowelsAndConsonants(s) {
    for (let letter of s) {
        if (vowels.includes(letter)) {
            console.log(letter);
        }
    }
    for (let letter of s) {
        if (!vowels.includes(letter)) {
            console.log(letter);
        }
    }
}


