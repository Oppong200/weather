const city="Accra"
const key=""
const weatherAPI=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

fetch(weatherAPI)
    .then(response=>response.json())
    .then(data=>console.log(data))