import { getMembersList } from "./api.js";

//Select DOM elements
const btnGrid = document.querySelector('#grid');
const btnList = document.querySelector('#list');
const businessList = document.querySelector('#businessList');

async function apiFetchMembersData() {

    try {
        const members = await getMembersList();
        displayMembers(members);
    } catch (error) {
        console.error(error);
    }
}

function buildMember(member) {
    return `
        <section class="card">
            <div class="card-header">
                <h2>${member.name}</h2>
                <p>Level: <strong>${member.level}</strong></p>
            </div >
            <div class="card-body">
                <img src="${member.image}"
                 alt="${member.name}" loading="lazy">
                <ul>
                    <li><strong>Address: </strong>${member.address}</li>
                    <li><strong>Phone: </strong>${member.phone}</li>
                    <li><strong>URL: </strong><a href="${member.website}"
                        target="_blank">${member.website}</a></li>
                </ul>
            </div >
        </section>
    `;
}


function filteredMember(town, members) {
    return town === 'ALL' ? members : members.filter(member => member.address.includes(town));
}

function displayMembers(members) {
    businessList.innerHTML = filteredMember('ALL', members).map(member => buildMember(member)).join("");
}

//handle main menu event
btnGrid.addEventListener('click', () => {
    businessList.classList.remove('list');
    businessList.classList.add('grid');
});

btnList.addEventListener('click', () => {
    businessList.classList.remove('grid');
    businessList.classList.add('list');
});

apiFetchMembersData();