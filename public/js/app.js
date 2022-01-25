//console.log('hello');

//const { response } = require("express");

var fetchWeather = '/weather';

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const weatherIcon = document.querySelector('.weatherIcon I');
const weatherCondition = document.querySelector('.weatherCondition');

const tempElement = document.querySelector('.temperature span');
const locationElement = document.querySelector('.place');
const dateElement = document.querySelector('.date');

const monthNames = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

dateElement.textContent = new Date().getDate() + ", " + monthNames[new Date().getMonth()].substring(0, 3);



weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    //console.log(search.value);
    locationElement.textContent = "Loading...";
    tempElement.textContent = "";
    weatherCondition.textContent = "";
    const locationAPI = fetchWeather + "?address=" + search.value;
    fetch(locationAPI).then(response => {
       response.json().then(data => {
            console.log(weatherIcon.className);
            if(data.error){
                locationElement.textContent = data.error;
                tempElement.textContent = "";
                weatherCondition.textContent = "";
            }else{
                // if(data.description === 'rain' || data.description === 'fog' ){
                //     weatherIcon.className = "wi wi-day-" + data.description;
                // }else{
                //     weatherIcon.className = "wi wi-cloudy-";
                // }
                locationElement.textContent = data.cityName;
                tempElement.textContent = (data.temperature - 273.5).toFixed(1) + String.fromCharCode(176)+ "C";
                weatherCondition.textContent =data.description.toUpperCase();
                
            }
       }) 
    });

});