let randomParagraph = document.getElementById(`randomParagraph`)
let zeroTenParagraph = document.getElementById(`zeroTenParagraph`)
let wholeNumberParagraph = document.getElementById(`wholeNumberParagraph`)

// generate a random number between 0 and 0.999...
let random = Math.random()

// show a random number between 0 and 0.999...
randomParagraph.innerHTML = random

// show a random number between 0 and 9.999...
zeroTenParagraph.innerHTML = random * 10

// show a random whole number between 0 and 9
wholeNumberParagraph.innerHTML = Math.floor(random * 10)
