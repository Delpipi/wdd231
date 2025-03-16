//Select DOM element
const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const links = document.querySelectorAll('nav a');
const currentYear = document.querySelector('#currentYear');
const lastModified = document.querySelector('#lastModified');


//current date
const today = new Date(document.lastModified);
const formattedDate = today.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
}).replace(',', '');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navigation.classList.toggle('open');
});
//update DOM element content
currentYear.textContent = today.getFullYear();
lastModified.textContent = formattedDate;
