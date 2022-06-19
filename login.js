const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todo = document.querySelector("#todo-form");
const Weather = document.querySelector("#weather");
const clockTime = document.querySelector("h2");
const clockDate = document.querySelector("h3");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Welcome ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todo.classList.remove(HIDDEN_CLASSNAME);
    Weather.classList.remove(HIDDEN_CLASSNAME);
    clockDate.classList.remove(HIDDEN_CLASSNAME);
    clockTime.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}