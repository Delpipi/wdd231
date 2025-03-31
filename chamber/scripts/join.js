const dialogBox = document.querySelector('#dialogBox');
const learnMoreButton = document.querySelector('.membership-level .card button');

learnMoreButton.addEventListener('click', () => {
    dialogBox.showModal();
});