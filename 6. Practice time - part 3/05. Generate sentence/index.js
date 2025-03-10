// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
// function generateSentence(desc, arr) {
    
// }



// Test cases
function generateSentence(desc, arr) {
    str =""
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length-1) {
            str += arr[i]+ ", "
        }
        else {
            str += arr[i]
        }
        //console.log(str)
    }
   console.log(`The ${arr.length} ${desc} are ${str}`)
   
};


generateSentence("largest countries", ["China", "India", "USA"]); // The 3 largest countries are China, India, USA


generateSentence("best fruits", ["Apples", "Bananas", "Oranges", "Grapes"]); // The 4 best fruits are Apples, Bananas, Oranges, Grapes