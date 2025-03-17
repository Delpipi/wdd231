
//Select DOM elements
const btnGrid = document.querySelector('#grid');
const btnList = document.querySelector('#list');
const businessList = document.querySelector('#businessList');

const url = '/wdd231/chamber/data/member.json';

let members;

function buildMember(member) {
    return `
        <section class="card">
            <h2>${member.name}</h2>
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <p><span>Address: </span>${member.address}</p>
            <p><span>Phone: </span>${member.phone}</p>
            <p>
                <span>Url: </span> <a href="${member.website}"
                    target="_blank">${member.website}</a>
            </p>
        </section>
    `;
}


function filteredMember(town, members) {
    return town === 'ALL' ? members : members.filter(member => member.address.includes(town));
}

async function getMembersData() {

    try {
        const reponse = await fetch(url);
        if (reponse.ok) {
            const data = await reponse.json();
            members = data.members;
            console.table(members);
            displayMembers();
        }
    } catch (error) {
        console.error(error);
    }
}

function displayMembers() {
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

getMembersData();