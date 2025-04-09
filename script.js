// ===== Tabs (Skills/Experience/Education) =====
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// ===== Mobile Menu Toggle =====
var sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}

// ===== Google Sheet Contact Form Submission =====
const scriptURL = 'https://script.google.com/macros/s/AKfycbyHFb3y1uVV5xSzRYOi07CNPIZ9mitYMN2Tm9X-qZ3k86oh1MqJm30z5mYF6cIcOIqQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Message sent successfully';
            setTimeout(() => msg.innerHTML = '', 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});