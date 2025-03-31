const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#mylevelInfo");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

// Show the dialog button opens the dialog modally
openButton.addEventListener('click', () => {
    mylevelInfo.showModal();

});


