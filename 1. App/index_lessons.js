//document.getElementById("count-el").innerHTML = 5


//Creating and logging variables 
//********************************************** 
// storing count value in a variable
let count_test = 5
// logging count variable to the console 
console.log("Count test: ",count_test)



//Lessons 
//********************************************** 
//********************************************** 

//04. Write your first JavaScript variable
//********************************************** 
//creating a variable 'myAge'
let myAge = 27
// logging variable to the console 
console.log("Age: ", myAge)

//05. Basic mathematical operations
//********************************************** 
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio
console.log("My dog age: ", myDogAge)

//06. Reassigning and incrementing
//********************************************** 
// let variables can be reassigned but const variables can't be reassigned
count_test = 3
count_test = 1
count_test = 1 + count_test

let bonusPoints = 50
bonusPoints = bonusPoints + 50
bonusPoints = bonusPoints - 75
bonusPoints = bonusPoints + 45
console.log("Bonus points: ", bonusPoints)

//07. Adding a button
//********************************************** 
// see index.html file 

//08. The onclick event listener
//********************************************** 
//listen for clicks on the increment button
// see index.html file 
//function that logs text to the console when the button is clicked
function increment_test() {
    console.log("The button was clicked") 
}

//09. Using functions to write less code
//**********************************************


//count down to a race
console.log("5") 
console.log("4") 
console.log("3") 
console.log("2") 
console.log("1") 

//creating a function instead of the above code to avoid rewriting 5 lines when needing to restart the code
function countdown() {
    console.log("5") 
    console.log("4") 
    console.log("3") 
    console.log("2") 
    console.log("1") 
}

//first race
console.log("First race in...")
countdown()
//second race
console.log("First race in...")
countdown()
 
//10. Write your first function
//**********************************************
//function that logs a number to the console
function numberLog() {
    console.log("Number: ", 42) 
}
//invoking the function
numberLog()

//11. Write a function that logs the sum
//**********************************************
let lap1 = 34
let lap2 = 33
let lap3 = 36

// function that logs the sum of the lap times
function logLapTime() {
    let totalTime = lap1 + lap2 + lap3 // note, let variables defined within a function aren't global so they can only be used inside of the function
    console.log("Total lap time: ", totalTime)
}

//12. Write a function that increments
//**********************************************
let lapsCompleted = 0 

function incrementLap() {
    lapsCompleted = lapsCompleted + 1
} 

incrementLap()
incrementLap()
incrementLap()

console.log("Incremented lap value: ", lapsCompleted)


//13/14/16. Increment on clicks and display the count with innerText
//**********************************************
// initialize count variable as 0
let count = 0 
//listen for clicks on the increment button
// see index.html file 
//function:
//  that logs text to the console when the button is clicked
//  increment the count variable when the button is clicked

//get element by id using js dot notation for the DOM (Document Object Model)
let countEl = document.getElementById("count-el")
console.log("HTML element: ", countEl)
let countElText = document.getElementById("count-el").innerText
console.log("Inner text element: ", countElText)

function increment() {
    console.log("The button was clicked")
    count = count + 1 
    console.log("count value: ", count)
    //change the count-el in the HTML to reflect the new count
    countEl.innerText = count
}


//15. The Document Object Model
//**********************************************
// how you use JS to modify a website


//17. Create the save button
//**********************************************
// function that logs out the count. This function is called when the save button is clicked
function save() {
    console.log("Saved count: ", count)
}


save()
//18. what is a string?
//**********************************************
// text in double quote marks


//19. Write your first string variable
//**********************************************
let username = "Person"
console.log(username)

let message = "you have three new notifications"

// concatenate strings
messageToUser = username + ", " + message+ "!"
console.log(username + ", " + message+ "!")


//20. Log a greeting to the console
//**********************************************
let name = "Elliot"
let greeting = "Hi, my name is "

let myGreeting = greeting + name + "!"

console.log(myGreeting)


//21. Strings vs. Numbers
//**********************************************
// strings always win!!
let points = 4

let bonusPointNum = "10"

//number + plus a string is the same as a string + string
// therefore 4 + "10" = "4"+"10" = "410"
let totalPoints = points + bonusPointNum

console.log(totalPoints)

console.log(4 + 5) // 9
console.log("2"+"4") // "24"
console.log("5"+1) // "51"
console.log(100+"100") // "100100"


//22. Render a welcome message
//**********************************************
let welcomeEl = document.getElementById("welcome-el") 

let name_2 = "Elliot"
let greeting_2 = "Welcome back "

let myGreeting_2 = greeting_2 + name_2 + "!"

welcomeEl.innerHTML = myGreeting_2


//23. Improve the message with string concatenation
//**********************************************
// using the '+=' operator to concatenate two strings
welcomeEl.innerHTML+=" ✌"

//24. Use plus equal for count
//**********************************************
function increment() {
    count += 1 
    countEl.innerHTML = count
}


//25. Create the save feature
//**********************************************
let saveEl = document.getElementById("save-el")

console.log(saveEl)

function save2() {
    let countStr = count + " -  "
    console.log(countStr)
    
    saveEl.innerHTML += countStr
    
}

//26. Debugging online
//**********************************************
//mdn web docs
//https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

//27. Set the count to 0
//**********************************************
function save3() {
    let countStr = count + " -  "
    console.log(countStr)
    
    saveEl.innerHTML += countStr

    countEl.textContent = 0
    count = 0
    
}
//28. Congrats & recap
//**********************************************