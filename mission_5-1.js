async function getWeatherData(citynumber){
const response = await fetch(`https://weather.tsukumijima.net/api/forecast/city/${citynumber}`)
  const weatherData = await response.json()
  console.log(weatherData)

const text = `${weatherData.forecasts[0].date}の${weatherData.location.city}の天気: ${weatherData.forecasts[0].telop}`;

var object = document.getElementById("tenkidata");
object.textContent = text;
}

getWeatherData("270000")
//大阪府大阪市のID