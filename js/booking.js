const language = localStorage.getItem('language')
const service = localStorage.getItem('service')
const suburb = localStorage.getItem('location')
const time = localStorage.getItem('time')

document.getElementById('language').innerHTML = language
document.getElementById('service').innerHTML = service
document.getElementById('location').innerHTML = suburb
document.getElementById('time').innerHTML = time

find_button = document.getElementById('find-service')
if (language && service && suburb && time){
  find_button.disabled = false
}
else {
  find_button.disabled = true
}
