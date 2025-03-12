document.getElementById("submitBtn").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value.trim();
    let raceCategory = document.getElementById("raceCategory").value;
    let confirmationMessage = document.getElementById("confirmationMessage");

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let ageError = document.getElementById("ageError");
    let raceCategoryError = document.getElementById("raceCategoryError");

    // Reset previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";
    raceCategoryError.textContent = "";
    confirmationMessage.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Please enter your full name.";
        isValid = false;
    }

    // Email validation (only checks if empty, does not check format)
    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    }

    // Age validation (Removed isNaN check since type=number ensures numeric input)
    if (age === "") {
        ageError.textContent = "Please enter your age.";
        isValid = false;
    } else if (age < 18) {
        alert("You must be 18 or older to participate.");
        isValid = false;
    }

    // Race category validation
    if (raceCategory === "") {
        raceCategoryError.textContent = "Please select a race category.";
        isValid = false;
    }

    // If all inputs are valid, show confirmation message
    if (isValid) {
        let message = "";
        if (raceCategory === "5K") {
            message = `Welcome to the 5K Marathon, ${name}! Get ready to sprint!`;
        } else if (raceCategory === "10K") {
            message = `Welcome to the 10K Marathon, ${name}! Get ready to run!`;
        } else if (raceCategory === "Half Marathon") {
            message = `Welcome to the Half Marathon, ${name}! Prepare for an incredible challenge!`;
        }
        confirmationMessage.textContent = message;
    }
});

document.getElementById("helpButton").addEventListener("click", function () {
    document.getElementById("helpMessage").textContent = "Please call +977:9812345678 for more details.";
});