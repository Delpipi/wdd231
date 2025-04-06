//Select DOM element for output
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

//Get the system current Date
const today = new Date(document.lastModified);

//Update DOM element content
currentYear.textContent = today.getFullYear();
lastModified.textContent = `last Modified : ${today}`;