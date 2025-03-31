const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));
console.log(myInfo.get('ordinance'));
console.log(myInfo.get('date'));
console.log(myInfo.get('location'));

document.querySelector('#results').innerHTML = `
<p>${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} Temple</p>
<p>${myInfo.get('phone')}</p>
<p>${myInfo.get('email')}</p>`;