const dialogBox = document.querySelector('#dialogBox');
const dialogInfo = document.querySelector('#dialogBox p');
const dialogTitle = document.querySelector('#dialogBox h3');

const closeButton = document.querySelector('#dialogBox button');

const npLevelButton = document.querySelector('#npLevelButton');
const bronzeLevelButton = document.querySelector('#bronzeLevelButton');
const silverLevelButton = document.querySelector('#silverLevelButton');
const goldLevelButton = document.querySelector('#goldLevelButton');

const currentDate = document.querySelector('#timestamp');

npLevelButton.addEventListener('click', () => {
    dialogTitle.textContent = "Benefits of NP Level";
    dialogInfo.textContent = "Non profit organizations, there is no fee.";
    dialogBox.showModal();
});

bronzeLevelButton.addEventListener('click', () => {
    dialogTitle.textContent = "Benefits of Bronze Level";
    dialogInfo.textContent = "Basic membership with access to events and small discounts.";
    dialogBox.showModal();
});


silverLevelButton.addEventListener('click', () => {
    dialogTitle.textContent = "Benefits of Silver Level";
    dialogInfo.textContent = "Includes training, additional discounts, and access to networking events.";
    dialogBox.showModal();
});


goldLevelButton.addEventListener('click', () => {
    dialogTitle.textContent = "Benefits of NP Level";
    dialogInfo.textContent = "All Silver benefits, plus spotlight advertising and premium training.";
    dialogBox.showModal();
});


closeButton.addEventListener('click', () => {
    dialogBox.close();
});

window.addEventListener('click', (event) => {
    if (event.target === dialogBox) {
        dialogBox.close();
    }
});

currentDate.value = Date.now();