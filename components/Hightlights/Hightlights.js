import convertMetersToMiles from "../../utilities/convert-meters";
import "./Hightlights.css";
export default function Hightlights({ today }) {
  const humidity = today.main.humidity;
  const visibility = convertMetersToMiles(today.visibility);
  const pressure = today.main.pressure;
  const wind = today.wind.speed;

  return (
    <section>
      <div className="hightlights">
        <div>
          <span>Wind status</span>
          <h2>
            {wind}
            <span>mph</span>
          </h2>
          <div>
            <div className="wind-status">
              <div className="wind-status-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_329)">
                    <path
                      d="M6.02379 12.0507L7.12476 3.90019C7.18595 3.44903 7.77026 3.2999 8.03683 3.67067L9.78531 6.06342C9.87169 6.17777 9.99917 6.25137 10.1414 6.269L13.0878 6.58686C13.5397 6.63672 13.7052 7.21292 13.3451 7.4915L6.83705 12.5202C6.48133 12.8013 5.9626 12.5018 6.02379 12.0507Z"
                      fill="#E7E7EB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_329">
                      <rect
                        width="12.1825"
                        height="12.1825"
                        fill="white"
                        transform="translate(10.6266 17.2048) rotate(-150)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span>WSW</span>
            </div>
          </div>
        </div>

        <div>
          <span>Humidity</span>
          <h2>{humidity}%</h2>
          <div className="progress-container">
            <div>
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: `${humidity}%` }}>
              </div>
            </div>
            <span className="percentage-bar">%</span>
          </div>
        </div>

        <div>
          <span>Visibility</span>
          <h2>
            {visibility} <span>miles</span>
          </h2>
        </div>

        <div>
          <span>Air Pressure</span>
          <h2>
            {pressure}
            <span>mb</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
