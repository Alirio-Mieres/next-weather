"use client";
import Image from "next/image";
import "./Card.css";
import formatDate from "../../utilities/date";
import weatherIcon from "../../utilities/weather";
export default function Dashboard({ weather }) {
  const dates = formatDate(weather.dt_txt);
  const { description, main } = weather.weather[0];
  const maxTemp = Math.round(weather.main.temp_max);
  const minTemp = Math.round(weather.main.temp_min);
  const icon = weatherIcon(main, description);

  return (
    <div className="card">
      <span>{dates}</span>
      <div>
        <Image src={icon} width={50} height={50} />
      </div>
      <div>
        <span>{maxTemp} °C</span>
        <span className="second-grade">{minTemp} °C</span>
      </div>
    </div>
  );
}
