'use strict'
// Code your solutions in this file
function writeCards(messages) {
    const newArr = [];
    for (let i = 0; i < messages.length; ++i) {
        newArr.push(`Thank you, ${messages[i]}, for the wonderful surprise gift!`)
    }
    return newArr;
}

function countdown(num) {
    while (num >= 0) {
        console.log(num);
        num -= 1;
    }
}