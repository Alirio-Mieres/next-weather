"use client"
import "./Dashboard.css";
import Card from "../Card/Card";
import Hightlights from "../Hightlights/Hightlights";
export default function Dashboard({ weather, today }) {

  console.log(weather)
  return (
    <section id="dashboard">
      <div className="dash-container">
        <div className="card-container">
          {weather.map((w, i) => {
            return <Card key={i} weather={w} />;
          })}
        </div>
        <Hightlights today={today}/>
      </div>
    </section>
  );
}
