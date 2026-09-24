function filterCourses(category) {

    let courses = document.querySelectorAll(".course-card");

    courses.forEach(function(course) {

        if (category === "all" || course.dataset.category === category) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }

    });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let messageError = document.getElementById("messageError");
        let successMessage = document.getElementById("successMessage");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let isValid = true;

        if (name === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        if (email === "") {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        }

        if (message === "") {
            messageError.textContent = "Please enter a message.";
            isValid = false;
        }

        if (isValid) {
            successMessage.textContent = "Your message has been sent successfully!";
            contactForm.reset();
        }

    });

}

function toggleFAQ(number) {

    let answer = document.getElementById("faq" + number);

    answer.classList.toggle("hidden");
}

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

if (menuButton) {
    menuButton.addEventListener("click", function () {
        menu.classList.toggle("hidden");
    });
}