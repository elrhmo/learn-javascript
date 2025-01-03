let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function randomItem() {
    let randomIndex = Math.floor(Math.random(hands)*3)
    //console.log(randomIndex)
    //console.log(hands[randomIndex])
    return hands[randomIndex]
};

console.log(randomItem());

