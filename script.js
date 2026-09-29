/* =========================
   LOGIN
========================= */

function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}


/* =========================
   SIGNUP
========================= */

function showSignup() {

    closeLogin();

    document.getElementById("signupModal").style.display = "flex";
}

function closeSignup() {

    document.getElementById("signupModal").style.display = "none";
}


/* =========================
   SIGNUP VALIDATION
========================= */

function signupUser(event) {

    event.preventDefault();

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword =
        document.getElementById("confirmPassword").value;


    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }


    if (password.length < 6) {

        alert("Password must contain at least 6 characters.");

        return;
    }


    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);


    alert(
        "Account created successfully. You can now login."
    );


    closeSignup();

    openLogin();
}


/* =========================
   LOGIN VALIDATION
========================= */

function loginUser(event) {

    event.preventDefault();

    let email =
        document.getElementById("loginEmail").value;

    let password =
        document.getElementById("loginPassword").value;


    let savedEmail =
        localStorage.getItem("userEmail");

    let savedPassword =
        localStorage.getItem("userPassword");


    if (
        email === savedEmail &&
        password === savedPassword
    ) {

        alert(
            "Login successful. Welcome to House of Alangkrut!"
        );

        closeLogin();

    } else {

        alert(
            "Invalid email or password."
        );
    }
}


/* =========================
   SAVE FAVOURITE BLOG
========================= */

function saveBlog(blogName) {

    let favourites =
        JSON.parse(
            localStorage.getItem("favourites")
        ) || [];


    if (!favourites.includes(blogName)) {

        favourites.push(blogName);

        localStorage.setItem(
            "favourites",
            JSON.stringify(favourites)
        );

        alert(
            blogName + " saved to your favourites."
        );

    } else {

        alert(
            "This blog is already in your favourites."
        );
    }
}


/* =========================
   BLOG FILTER
========================= */

function filterBlogs(category) {

    let cards =
        document.querySelectorAll(".blog-card");


    cards.forEach(function(card) {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }

    });
}


/* =========================
   BLOG SEARCH
========================= */

function searchBlogs() {

    let search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    let cards =
        document.querySelectorAll(".blog-card");


    cards.forEach(function(card) {

        let text =
            card.innerText.toLowerCase();


        if (text.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }

    });
}


/* =========================
   NEWSLETTER
========================= */

function subscribeUser(event) {

    event.preventDefault();

    let email =
        document.getElementById("email").value;


    localStorage.setItem(
        "subscriberEmail",
        email
    );


    alert(
        "Thank you for subscribing to House of Alangkrut."
    );


    document.getElementById("email").value = "";
}


/* =========================
   CONTACT FORM
========================= */

function contactForm(event) {

    event.preventDefault();

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("contactEmail").value;

    let message =
        document.getElementById("message").value;


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert("Please fill all fields.");

        return;
    }


    alert(
        "Thank you " + name +
        ". Your message has been submitted."
    );


    document.querySelector(".contact-form").reset();
}


/* =========================
   ABOUT MESSAGE
========================= */

function showMessage() {

    alert(
        "House of Alangkrut is a fashion and lifestyle blogging website created to share fashion, jewellery and lifestyle inspiration."
    );
}


/* =========================
   CLOSE MODALS
========================= */

window.onclick = function(event) {

    let loginModal =
        document.getElementById("loginModal");

    let signupModal =
        document.getElementById("signupModal");


    if (event.target === loginModal) {

        closeLogin();
    }


    if (event.target === signupModal) {

        closeSignup();
    }
};