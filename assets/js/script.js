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

           // Use AJAX to fetch current weather data, data type utilized JSON
           $.ajax({
            url: currentWeatherURL,
            method: 'GET',
            dataType: 'json',
            success: function (currentData) {
                // Runs function to update current weather data
                updateCurrentWeather(currentData);
            },
                // Logs an error message if there is an error
            error: function (error) {
                console.error('Error fetching current weather data:', error);
            }
         });

            // Use AJAX to fetch 5-day forecast data, data type utilized JSON
            $.ajax({
                url: forecastURL,
                method: 'GET',
                dataType: 'json',
                success: function (forecastData) {
                    // Logs 5-day forecast data
                    console.log(forecastData);
                },
                    // Logs an error message if there is an error
                error: function (error) {
                    console.error('Error fetching 5-day forecast data:', error);
                }
            });
        }

    // Creates an event listener for the search button

    $("#searchButton").on("click",function() {
        var userInput = $("#userInput").val().trim();

        //Create conditional logic so that if the input is not an empty string, the nested code
        // will execute
        if (userInput !== '') {

            // Clear the input field
            $('#userInput').val('');

            // Add the searched city to the search history
            $('#searchResultList').append(`<li>${userInput}</li>`);

            // Fetch weather data for the searched city
            getWeatherData(userInput);
        }
    });

     // Event listener for dynamically generated list items
     $('#searchResultList').on('click', 'li', function () {
        const selectedCity = $(this).text();
        // Fetch weather data for the selected city
        getWeatherData(selectedCity);
    });

    //Created a function that pulls relevant data from the OpenWeatherMap API and displays them individually as list items in the currentConditionsList
    function updateCurrentWeather(data) {

        //
        

        //Convert temperature from Kelvin to Celsius
        var kelvinTemperature = data.main.temp;
        var celsiusTemperature = kelvinTemperature - 273.15;

        // Update HTML elements with current weather data LINES WERE ADJUSTED FOR READABILITY
        $('#currentConditionsList').html(
            `<li>${data.name}</li>
            <li>${formattedDate}</li>
            <li>${celsiusTemperature}°C</li>
            <li>${data.wind.speed} m/s</li>
            <li>${data.main.humidity}%</li>
            <li>${data.weather[0].icon}</li>`
            );

            
    } 
});




