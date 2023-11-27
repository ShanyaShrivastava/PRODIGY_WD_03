const apiKey="38c37b2a5f1a77a8b9db2e476de29f76";
const apiUrl="https://api.openweathermap.org/data/2.5/weather";

const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const searchButton = document.getElementById('search');
const locationInput = document.getElementById('location');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;

    fetch(`${apiUrl}?q=${location}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const city = data.name;
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert from Kelvin to Celsius
            const description = data.weather[0].description;

            cityElement.textContent = `City: ${city}`;
            temperatureElement.textContent = `Temperature: ${temperature}°C`;
            descriptionElement.textContent = `Description: ${description}`;
        })
        .catch(error => {
            console.error('Error:', error);
            cityElement.textContent = 'City:Not Available';
            temperatureElement.textContent = 'Temperature:Not Available';
            descriptionElement.textContent = 'Description:Not Available';
        });
});
