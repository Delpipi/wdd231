export function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
}

export function getDateTime(timestamp) {
    const today = new Date(timestamp);
    return today.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
}

export function getWeekDateName(datetime) {
    const today = new Date(datetime);
    return today.toLocaleDateString('en-US', { weekday: "long" });
}

export function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

export function getMillisecondsInDay() {
    return 1000 * 60 * 60 * 24;
}