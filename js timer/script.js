const startingMinutes = 20; // set starting time
let time = startingMinutes * 60; // multiply minutes by 60 to get seconds

const countdownEl = document.getElementById('countdown'); //target p with id="countdown"

setInterval(updateCountdown, 1000); //calls updateCountdown function every seconds (1000 ms)

function updateCountdown() { //define function updateCountdown
    const minutes = Math.floor(time / 60); //create a 'minutes' variable, use Math.floor to get whole number of minutes remaining by dividing seconds by 60
    let seconds = time % 60; //after minute are divided out, modulo the seconds remaining
    seconds = seconds < 10 ? '0' + seconds : seconds; //if seconds is less than 10, add a 0 + seconds remanining, otherwise just use seconds
    countdownEl.innerHTML = `${minutes}:${seconds}`; //write function results into HTML (p element with countdown id)
    time--; //decrease time variable
}