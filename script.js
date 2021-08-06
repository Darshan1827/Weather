function getDetails(place){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc =>abc.json())
    .then(abc =>document.getElementById('name').innerHTML = abc.name)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc =>abc.json())
    .then(abc => document.getElementById('lat').innerHTML = abc.coord.lat)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc =>abc.json())
    .then(abc => document.getElementById('lon').innerHTML = abc.coord.lon)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc =>abc.json())
    .then(abc => document.getElementById('country').innerHTML = abc.sys.country)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc =>abc.json())
    .then(abc => document.getElementById('temp').innerHTML = parseInt(abc.main.temp-273.15)+"C")

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc =>abc.json())
    .then(abc => document.getElementById('speed').innerHTML = abc.wind.speed+"km/hr")
}
function callMe(){
    var myplace = document.getElementById('place').value;
    getDetails(myplace)
}