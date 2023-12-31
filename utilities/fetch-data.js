const api = {
  key: "9df50d02716378ec6b29987274a3f4f2",
  base: "https://api.openweathermap.org/data/2.5/",
};

export function fetchData(url) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getWeather(city) {
  const { key, base } = api;
  const search = city ? city : "London";

  const forecastURL = `${base}weather?q=${search}&units=metric&APPID=${key}`;
  return fetchData(forecastURL)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getWeatherFiveDays(city) {
  const { key, base } = api;
  const search = city ? city : "London";
  let forecastURL = `${base}forecast?q=${search}&units=metric&APPID=${key}`;

  return fetchData(forecastURL)
    .then((data) => {
      const listForecast = data.list.filter(
        (d) =>
          d.dt_txt.includes("18:00:00") &&
          d.dt_txt.slice(0, 10) !== new Date().toISOString().slice(0, 10)
      );

      if (listForecast.length < 5) {
        const listForecast = data.list.filter(
          (d) =>
            d.dt_txt.includes("00:00:00") &&
            d.dt_txt.slice(0, 10) !== new Date().toISOString().slice(0, 10)
        );
        return listForecast;
      }

      return listForecast;
    })
    .catch((error) => {
      console.error(error);
    });
}
