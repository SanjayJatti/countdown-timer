const daysEl = document.querySelector("#days");
const hrsEl = document.querySelector("#hours");
const minsEl = document.querySelector("#minutes");
const secEl = document.querySelector("#seconds");

const newYear = "1 jan 2022"

function countdown(){
    const newYearDate = new Date(newYear);
    const todaysDate = new Date();
    const totalSecondsLeft = (newYearDate - todaysDate)/1000
    const days = Math.floor(totalSecondsLeft / 3600 / 24);
    const hrs = Math.floor(totalSecondsLeft / 3600) % 24;
    const mins = Math.floor(totalSecondsLeft / 60) % 60;
    const sec = Math.floor(totalSecondsLeft) % 60;

    daysEl.innerHTML = days;
    hrsEl.innerHTML = formatTime(hrs);
    minsEl.innerHTML = formatTime(mins);
    secEl.innerHTML = formatTime(sec);
}
function formatTime(time) {
    if (time < 10){
        return `0${time}`
    } else {
        return time;
    }

}

countdown();
setInterval(countdown, 1000);