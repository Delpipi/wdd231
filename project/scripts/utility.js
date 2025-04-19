//Get current date
export const today = new Date(document.lastModified);

export const formattedDate = today.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
});

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