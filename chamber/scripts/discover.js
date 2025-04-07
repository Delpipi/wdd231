import { getAllDiscoverAreas } from "./api.js";
import { getMillisecondsInDay } from "./utility.js";

//Select DOM element
const areaList = document.querySelector('#areaList');
const visitDialog = document.querySelector('#dialogBox');
const closeDialog = document.querySelector('#dialogBox button');
const dialogMessage = document.querySelector('#dialogBox p');

const today = Date.now();

let lastVisited = Number(localStorage.getItem('last-visit-day'));

closeDialog.addEventListener('click', () => {
    visitDialog.close();
});

function initLastVisited() {
    lastVisited = Date.now();
    localStorage.setItem('last-visit-day', lastVisited);
}

function getDialogMessage(numberOfDays) {
    if (numberOfDays === 1) {
        return `You last visited ${numberOfDays} day ago`;
    } else {
        return `You last visited ${numberOfDays} days ago`;
    }
}

function showMessage() {
    //check if this visitor already visited the page
    if (lastVisited > 0 && !isNaN(lastVisited)) {
        //this visitor already visited the page
        const millisecondsInDay = getMillisecondsInDay();
        const numberOfDays = Math.floor((today - lastVisited) / millisecondsInDay);
        //console.log(`Number Of Days: ${numberOfDays}`);
        if (numberOfDays > 0) {
            dialogMessage.textContent = getDialogMessage(numberOfDays);
            initLastVisited();
        } else if (numberOfDays === 0) {
            dialogMessage.textContent = `Back so soon! Awesome!`;
        }
    } else {
        dialogMessage.textContent = `Welcome! Let us know if you have any questions.`;
        initLastVisited();
    }
    visitDialog.showModal();
}

async function apuFetchDicoveryAreaList() {
    try {
        const areas = await getAllDiscoverAreas();
        //console.table(areas);
        displayAreasCards(areas);
    } catch (error) {
        console.error(error);
    }
}

function buildCard(area) {
    return `
        <div class="card">
            <h2 class="title">${area.name}</h2>
            <figure class="image">
                <img src="images/${area.image}" alt="${area.name}" loading="lazy">
            </figure>
            <p class="description">${area.description}</p>
            <address class="address">${area.address}</address>
            <a href="#" class="btnLearnMore">Learn More </a>
        </div>
    `;
}

function displayAreasCards(areas) {
    areaList.innerHTML = areas.map(area => buildCard(area)).join(" ");
}

apuFetchDicoveryAreaList();
showMessage();