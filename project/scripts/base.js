import { today, formattedDate } from "./utility.js";

//Select DOM element
const hamburger = document.querySelector('#menu');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('nav a');
const currentYear = document.querySelector('#currentYear');
const lastModified = document.querySelector('#lastModified');


//Handle hamburger click event
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
});

//Handle active link mennu wayfinding
links.forEach(link => {
    link.addEventListener('click', (event) => {
        links.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    });
});

//Display date
currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last Modified : ${formattedDate}`;