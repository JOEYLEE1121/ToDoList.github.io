const clock = document.querySelector("#clock");
const today = document.querySelector("#date");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    today.innerText = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;
}

setInterval(getClock,1000); 