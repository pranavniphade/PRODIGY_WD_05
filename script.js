const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e0dd6b7218mshd8957e7c2ae3dd6p17c5abjsn2aca143bd573',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}

const submit = document.getElementById("submit");  

submit.addEventListener("click", (e) => {  
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Sangamner");
