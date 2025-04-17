import { getMalariaIncidence, getPolioVaccinationRate, getMeaslesVaccination } from "./api.js";

//Select element from DOM
const malariaStatContainer = document.querySelector('#malaria-stat');
const polioStatContainer = document.querySelector('#polio-stat');
const vaccinationStatContainer = document.querySelector('#vaccination-stat');


async function apiFetchMalariaIncidence() {
    try {
        const data = await getMalariaIncidence();
        //console.table(data);
        displayMalariaStat(data);
    } catch (error) {
        console.error(error);
    }
}

async function apiFetchPolioVaccinationRate() {
    try {
        const data = await getPolioVaccinationRate();
        //console.table(data);
        displayPolioStat(data);
    } catch (error) {
        console.error(error);
    }
}

async function apiFetchMeaslesVaccination() {
    try {
        const data = await getMeaslesVaccination();
        //console.table(data);
        displayMeaslvesStat(data);
    } catch (error) {
        console.error(error);
    }
}

function displayMalariaStat(data) {
    malariaStatContainer.innerHTML = `
    <section class="stat-card">
        <h3>${data.date}</h3>
        <p>${data.indicator.value}</p>
    </section>`;
}

function displayPolioStat(data) {
    polioStatContainer.innerHTML = `
    <section class="stat-card">
        <h3>${data.date}</h3>
        <p>${data.indicator.value}</p>
    </section>`;
}

function displayMeaslvesStat(data) {
    vaccinationStatContainer.innerHTML = `
    <section class="stat-card">
        <h3>${data.date}</h3>
        <p>${data.indicator.value}</p>
    </section>`;
}

apiFetchMalariaIncidence();
apiFetchPolioVaccinationRate();
apiFetchMeaslesVaccination();