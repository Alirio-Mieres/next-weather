"use client"
import "./Dashboard.css";
import Card from "../Card/Card";
import Hightlights from "../Hightlights/Hightlights";
export default function Dashboard({ weather, today }) {


  return (
    <section id="dashboard">


      <div className="dash-container">
        <div className="button-grades hidden">
          <button>
            °C
          </button>
          <button>
            °F
          </button>
        </div>

        <div className="card-container">
          {weather.map((w, i) => {
            return <Card key={i} weather={w} />;
          })}
        </div>
        <Hightlights today={today} />
      </div>
    </section>
  );
}
