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

showMessage();