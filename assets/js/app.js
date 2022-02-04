let weather = {
  key: '1bf73baddf230ec1549856f8efbec406',
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { temp, humidity } = data.main;
    const { icon, description } = data.weather[0];
    const { speed } = data.wind;
    document.querySelector('.data').innerHTML = `
    <h1 class="loc">Weather in ${name}</h1>
    <h2 class="temp">${temp}°C</h2>
    <div class='desc flex'>
      <img src='http://openweathermap.org/img/wn/${icon}.png'/>
      <h2>${description}<h2/>
    </div>
    <h2 class="humidity">Humidity: ${humidity}%</h2>
    <h2 class="wind">Wind: ${speed}km/h</h2>
    `;
  },
};
