setInterval( () => {
    let date = new Date();

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hourRotation = 30*hour + minutes/2;
    minutesRotation = 6*minutes;
    secondsRotation = 6*seconds;

    document.querySelector("#hour").style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector("#minute").style.transform = `rotate(${minutesRotation}deg)`;
    document.querySelector("#sec").style.transform = `rotate(${secondsRotation}deg)`;
}, 1000);