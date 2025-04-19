import { getMalariaIncidence, getPolioVaccinationRate, getMeaslesVaccination } from "./api.js";

//Select element from DOM
const malariaStatContainer = document.querySelector('#malaria-stat');
const polioStatContainer = document.querySelector('#polio-stat');
const vaccinationStatContainer = document.querySelector('#vaccination-stat');

function displayStat(container, data) {
    container.innerHTML = `<strong>${data.date} :</strong> ${data.indicator.value}</p>`;
}

async function apiFetchMalariaIncidence() {
    try {
        const data = await getMalariaIncidence();
        //console.table(data);
        displayStat(malariaStatContainer, data);
    } catch (error) {
        console.error(error);
    }
}

async function apiFetchPolioVaccinationRate() {
    try {
        const data = await getPolioVaccinationRate();
        //console.table(data);
        displayStat(polioStatContainer, data);
    } catch (error) {
        console.error(error);
    }
}

async function apiFetchMeaslesVaccination() {
    try {
        const data = await getMeaslesVaccination();
        //console.table(data);
        displayStat(vaccinationStatContainer, data);
    } catch (error) {
        console.error(error);
    }
}

apiFetchMalariaIncidence();
apiFetchPolioVaccinationRate();
apiFetchMeaslesVaccination();