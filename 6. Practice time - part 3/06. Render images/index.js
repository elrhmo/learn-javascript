// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg",
    "images/hip3.jpg",
    "images/hip3.jpg"
]

// document.getElementById("container").innerHTML = "I have changed!";
// document.getElementById("container").innerHTML = `<img class="team-img" src="images/hip2.jpg">`

// don't predict code below
function renderEmpolyee(imagesArr) {
    for (let i = 0; i < imagesArr.length; i++) {
        document.getElementById("container").innerHTML += `<img alt="Employee" class="team-img" src="${imagesArr[i]}">`;
    }
};

renderEmpolyee(imgs);

