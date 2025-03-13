//Select DOM element
const cards = document.querySelector('#cards');
const filteredButtons = document.querySelector('#filteredButtons');

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
    "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
    "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const filteredButtonTitleList = ['ALL', 'born in Utah', 'outside of USA', 'years', 'children >= 10', 'president >= 15']

let prophets;

async function getProphetData(url) {
    try {
        const reponse = await fetch(url);
        if (reponse.ok) {
            const data = await reponse.json();
            //console.table(data);
            prophets = data.prophets;
            displayProphets();
        }
    } catch (error) {
        console.error(error);
    }
}

function buildFilteredButton(title) {
    return `<button type="button" data-button="${title}">${title}</button>`;
}

function buildFilteredButtonList() {
    filteredButtons.innerHTML = filteredButtonTitleList.map(title => buildFilteredButton(title)).join("");
}

function buildCard(prophet) {
    return `
        <section class="card">
            <div class="card-header">
                <h2>${prophet.name} ${prophet.lastname}</h2>
            </div>
            <div class="card-body">
                <p>Date of Birth: ${prophet.birthdate}</p>
                <p>Place of Birth: ${prophet.birthplace}</p>
                <img src="${prophet.imageurl}"
                    alt="Portrait of ${prophet.name} ${prophet.lastname} – ${prophet.order}th Latter-day President">
            </div>
        </section>
    `;
}

function filteredProphets(prophets, search) {
    if (search === 'ALL') {
        return prophets;
    } else if (search === 'born in Utah') {
        return prophets.filter(prophet => prophet.birthplace === 'Utah');
    } else if (search === 'outside of USA') {
        return prophets.filter(prophet => !usStates.includes(prophet.birthplace));
    } else if (search == 'years') {
        return prophets.filter(prophet => getAgeAtDeathInYears(prophet.birthplace, prophet.death));
    } else if (search === 'children >= 10') {
        return prophets.filter(prophet => prophet.numofchildren >= 10);
    } else if (search === 'president >= 15') {
        return prophets.filter(prophet => prophet.length >= 15);
    }
}

function getAgeAtDeathInYears(birthdate, deathdate) {
    let birth = new Date(birthdate);
    let death = new Date(deathdate);
    if (deathdate === null) {
        death = new Date();
    }
    return Math.floor((death - birth) / (365 * 24 * 60 * 60 * 1000));
}

function displayProphets() {
    cards.innerHTML = filteredProphets(prophets, "ALL").map(prophet => buildCard(prophet)).join("");

    document.querySelectorAll('#filteredButtons button').forEach(button => {
        button.addEventListener('click', () => {
            let title = button.getAttribute('data-button');
            cards.innerHTML = filteredProphets(prophets, title).map(prophet => buildCard(prophet)).join("");
        });
    });
}

/* const displayProphets = (prophets) => {
    prophets.forEach(prophet => {

        //create elements in DOM
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');

        //assign data to created element
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} – ${prophet.order}th Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '150px');
        portrait.setAttribute('height', 'auto');

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
} */

getProphetData(url);
buildFilteredButtonList();