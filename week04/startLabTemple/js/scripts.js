import { temples } from '../data/temples.js';
//console.log(temples);

import { url } from '../data/temples.js';
//console.log(url);

const showHere = document.querySelector('#showHere');
const mydialog = document.querySelector('#mydialog');
const myTitle = document.querySelector('#mydialog h2');
const closeButton = document.querySelector('#mydialog button');
const myInfo = document.querySelector('#mydialog p');

closeButton.addEventListener('click', () => {
    mydialog.close();
});

//----------LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(data) {
    //console.log(data);
    data.forEach(x => {
        //console.log(x);
        const photo = document.createElement('img');
        photo.src = `${url}${x.path}`;
        photo.alt = x.name;
        photo.addEventListener('click', () => showstuff(x));
        showHere.appendChild(photo);
    });
} //end function

function showstuff(x) {
    myTitle.innerHTML = x.name;
    myInfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}.`;
    mydialog.showModal();

}

displayItems(temples);