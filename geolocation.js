const API_KEY = "4cb7db6c87b8bb4b2b15f971b183539d";
const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");
function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        city.innerText = data.name; 
        weather.innerText = `${data.weather[0].main}, ${data.main.temp} degree`;
    });
}

function onGeoError() {
    alert("Location Not Found");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
