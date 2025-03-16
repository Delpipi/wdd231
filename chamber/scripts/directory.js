//Select DOM elements
const btnGrid = document.querySelector('#grid');
const btnList = document.querySelector('#list');
const businessList = document.querySelector('#businessList');

//handle main menu event
btnGrid.addEventListener('click', () => {
    businessList.classList.remove('list');
    businessList.classList.add('grid');
});

btnList.addEventListener('click', () => {
    businessList.classList.remove('grid');
    businessList.classList.add('list');
});
