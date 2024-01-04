//This variable stores the OpenWeatherMap API Key
const apiKey ="78f50753dfedd5fed54761976c0adf1e";

// WRAP LOGIC/FUNCTIONS SO THAT FUNCTIONS DON'T RUN UNTIL
// AFTER THE DOM HAS ALREADY FINISHED RENDERING

$(document).ready(function () {
    
    //Creates a function that fetches weather data based on city name searched by user
    function getWeatherData(city) {

        //OpenWeatherMap API URL for current weather
        const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        //OpenWeatherMap API URL for 5-day forecast
        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    }






}


//---- NOTES FOR FUNCTION CREATION ---- //

// Create an array, each index number associated with today, and then 
// each individual day after today in a 5-day forecast
//
// [0] = today, [1] = tomorrow, ... etc.

// Create function/logic that pairs each element in the array to
// the appropriate HTML element, using the HTML element ID's

// Create a function/functions which call data from the Weather API,
// gathering the relevant conditions as laid out in the HTML file
    // May need to parse 5-day forecast out, then apply each parsed
    // value to the appropriate spot in the array

// Create function/functions that takes the value(s) from the function
// that gathers data from the Weather API, and pairs them to the
// appropriate HTML elements

// Creates a function that stores the city that a user searches for in the Search... bar when 
// the user clicks the "Search" button

document.getElementById("searchButton").addEventListener("click",function() {
    var cityInput = document.getElementById("userInput").value;

    //Added console.log for option of troubleshooting in console

    console.log("Selected city:", cityInput);
});
