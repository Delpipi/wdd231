const baseUrl = "https://api.worldbank.org/v2/country/CI/indicator";


export async function getMalariaIncidence() {
    const apiUrl = `${baseUrl}/SH.MLR.INCD.P3?format=json&per_page=1`;
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data[1][0]);
            return data[1][0];
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

export async function getPolioVaccinationRate() {
    const apiUrl = `${baseUrl}/SH.IMM.POL3?format=json&per_page=1`;
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data[1][0]);
            return data[1][0];
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

export async function getMeaslesVaccination() {
    const apiUrl = `${baseUrl}/SH.IMM.MEAS?format=json&per_page=1`;
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data[1][0]);
            return data[1][0];
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}
