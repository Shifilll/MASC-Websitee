const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get values

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const email = document.getElementById("email").value.trim();

    const age = document.getElementById("age").value.trim();

    const interest = document.getElementById("interest").value;

    const photo = document.getElementById("photo").files[0];

    const address = document.getElementById("address").value.trim();


    // Clear old message

    message.innerText = "";


    // NAME VALIDATION

    if (name === "") {

        showError("Please enter your name.");

        return;
    }


    const namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {

        showError("Name should contain only letters.");

        return;
    }


    // PHONE VALIDATION

    if (phone === "") {

        showError("Please enter your phone number.");

        return;
    }


    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {

        showError(
            "Phone number must contain exactly 10 digits."
        );

        return;
    }


    // EMAIL VALIDATION

    if (email === "") {

        showError("Please enter your email.");

        return;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        showError("Please enter a valid email address.");

        return;
    }


    // AGE VALIDATION

    if (age === "") {

        showError("Please enter your age.");

        return;
    }


    if (age < 13 || age > 100) {

        showError("Age must be between 13 and 100.");

        return;
    }


    // INTEREST VALIDATION

    if (interest === "") {

        showError("Please select your area of interest.");

        return;
    }


    // PHOTO VALIDATION

    if (!photo) {

        showError("Please upload your profile photo.");

        return;
    }


    // ADDRESS VALIDATION

    if (address === "") {

        showError("Please enter your address.");

        return;
    }


    // CREATE MEMBER ID

    const memberId =
        "MASC-" + Math.floor(1000 + Math.random() * 9000);


    // READ PHOTO

    const reader = new FileReader();


    reader.onload = function () {

        // Create member object

        const memberData = {

            name: name,

            phone: phone,

            email: email,

            age: age,

            interest: interest,

            address: address,

            photo: reader.result,

            memberId: memberId

        };


        // Save member data

        localStorage.setItem(
            "mascMember",
            JSON.stringify(memberData)
        );


        // Go to member card page

        window.location.href = "member-card.html";

    };


    // Convert photo to usable data

    reader.readAsDataURL(photo);

});


// ERROR FUNCTION

function showError(text) {

    message.innerText = "⚠️ " + text;

    message.style.color = "red";

    message.style.fontWeight = "bold";

}

const eventButtons = document.querySelectorAll(".event-btn");

const eventPopup = document.getElementById("eventPopup");

const popupTitle = document.getElementById("popupTitle");

const popupDate = document.getElementById("popupDate");

const popupVenue = document.getElementById("popupVenue");

const popupInfo = document.getElementById("popupInfo");

const closePopup = document.getElementById("closePopup");

const closePopupBottom = document.getElementById("closePopupBottom");


eventButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        popupTitle.innerText = button.dataset.title;

        popupDate.innerText = button.dataset.date;

        popupVenue.innerText = button.dataset.venue;

        popupInfo.innerText = button.dataset.info;

        eventPopup.style.display = "flex";

    });

});


closePopup.addEventListener("click", function() {

    eventPopup.style.display = "none";

});


closePopupBottom.addEventListener("click", function() {

    eventPopup.style.display = "none";

});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const phone = document.getElementById("contactPhone");
    const message = document.getElementById("contactMessage");


    // Name validation
    if (name.value.trim() === "") {

        name.style.border = "2px solid red";
        name.focus();

        alert("Please enter your name.");
        return;
    }


    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {

        email.style.border = "2px solid red";
        email.focus();

        alert("Please enter a valid email.");
        return;
    }


    // Phone validation
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone.value.trim())) {

        phone.style.border = "2px solid red";
        phone.focus();

        alert("Please enter a valid 10-digit phone number.");
        return;
    }

});