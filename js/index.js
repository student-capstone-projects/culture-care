window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./serviceworker.js");
  }
};

function set_option(option){
  choice = document.querySelector(`input[name=${option}]:checked`).value
  localStorage.setItem(option, choice)
  window.location.href='booking.html'
}
