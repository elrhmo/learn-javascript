let hasCompletedCourse = true
let givesCertificate = true

//nested if statements
if (hasCompletedCourse === true) {
    if (givesCertificate === true) {
        generateCertificate()
    }
}

//logical AND operator
if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

//logical AND operator and remove equal to true as the variables are already true
if (hasCompletedCourse && givesCertificate) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
}


