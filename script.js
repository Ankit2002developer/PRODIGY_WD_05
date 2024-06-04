const submit = document.getElementById('submit');
const city = document.getElementById('city');
const cityName = document.getElementById('cityName');
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a6185f170bmshae0510b9dda5878p122a61jsn83fdcfa8f3b0',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)  => {
    cityName.innerHTML = 'Weather for ' + city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then(response => {
    
    console.log(response)
    cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_deg.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;    
})
.catch(err => console.error(err));
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(city.value)
});

getWeather("Delhi")