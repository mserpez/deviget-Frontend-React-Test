export function getElapsedTimeHumanly(date: number) {
    const ms = new Date().getTime() - date;
    let secs = ms / 1000;
    let minutes = secs / 60; secs = secs % 60;
    const hours = minutes / 60; minutes = minutes % 60;

    return `${hours > 24 ? `more than 24hs ago` : `${parseInt(minutes.toString())}min, ${hours}hs`}`;
}