"use client";
import Image from "next/image";
import Today from "../../components/Today/Today";
import Dashboard from "../../components/Dashboard/Dashboard";
import { getWeather, getWeatherFiveDays } from "../../utilities/fetch-data";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

export default function Main() {
  const [todayWeather, setTodayWeather] = useState({});
  const [fiveDaysWeather, setFiveDaysWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getWeather(), getWeatherFiveDays()])
      .then(([todayWeather, fiveDaysWeather]) => {
        setTodayWeather(todayWeather);
        setFiveDaysWeather(fiveDaysWeather);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleCityByInput = (input, select) => {
    setLoading(true);
    let city;

    if (input) {
      city = input.current.value;
    } else {
      city = select;
    }

    Promise.all([getWeather(city), getWeatherFiveDays(city)])
      .then(([todayWeather, fiveDaysWeather]) => {
        if (todayWeather.cod !== "404" && fiveDaysWeather.cod !== "404") {
          setTodayWeather(todayWeather);
          setFiveDaysWeather(fiveDaysWeather);
        } else {
          alert("City not found");
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main id="main">
      <Today weather={todayWeather} handleCityByInput={handleCityByInput} />
      <Dashboard today={todayWeather} weather={fiveDaysWeather} />
    </main>
  );
}
