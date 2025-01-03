//let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
console.log(greetingEl)

let combinedSentence = ""

for (i=0;i<sentence.length; i++) {
    word = sentence[i] + " "
    //console.log(word)
    combinedSentence+=word
    //console.log(combinedSentence)
}

console.log(combinedSentence)

greetingEl.textContent= combinedSentence