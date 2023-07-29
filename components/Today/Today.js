"use client";
import Image from "next/image";
import "./Today.css";
import formatDate from "../../utilities/date";
import weatherIcon from "../../utilities/weather";
import { useRef , useState } from "react";

export default function Today({ weather, handleCityBySelect, handleCityByInput }) {
  const [main, setMain] = useState(false);
  const [search, setSearch] = useState(true);
  const formattedDate = formatDate();
  const inputRef = useRef(null);
  const icon = weatherIcon(
    weather.weather[0].main,
    weather.weather[0].description
  );

  const changeOpen = () => {
    setMain(!main);
    setSearch(!search);
  };

  return (
    <>
      <section className={`today-section ${main ? "first-inactive" : ""}`}>
        <div className="search-buttons">
          <button onClick={changeOpen}>Search for places</button>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g filter="url(#filter0_d_1_258)">
                <circle
                  cx="24"
                  cy="20"
                  r="20"
                  fill="white"
                  fill-opacity="0.3"
                />
                <circle
                  cx="24"
                  cy="20"
                  r="20"
                  fill="#6E707A"
                  fill-opacity="0.3"
                />
                <path
                  d="M24 16C21.79 16 20 17.79 20 20C20 22.21 21.79 24 24 24C26.21 24 28 22.21 28 20C28 17.79 26.21 16 24 16ZM32.94 19C32.48 14.83 29.17 11.52 25 11.06V10C25 9.45 24.55 9 24 9C23.45 9 23 9.45 23 10V11.06C18.83 11.52 15.52 14.83 15.06 19H14C13.45 19 13 19.45 13 20C13 20.55 13.45 21 14 21H15.06C15.52 25.17 18.83 28.48 23 28.94V30C23 30.55 23.45 31 24 31C24.55 31 25 30.55 25 30V28.94C29.17 28.48 32.48 25.17 32.94 21H34C34.55 21 35 20.55 35 20C35 19.45 34.55 19 34 19H32.94ZM24 27C20.13 27 17 23.87 17 20C17 16.13 20.13 13 24 13C27.87 13 31 16.13 31 20C31 23.87 27.87 27 24 27Z"
                  fill="#E7E7EB"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_258"
                  x="0"
                  y="0"
                  width="48"
                  height="48"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_258"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_258"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div id="div-image">
          <div id="background-image"></div>
          <div>
            <Image src={icon} alt="#" width={180} height={180} />
          </div>
        </div>

        <h3>{Math.round(weather.main.temp)} °C</h3>
        <p>Shower</p>

        <div className="today-footer">
          <div className="today-info">
            <span>Today</span>
            <div>
              <span>.</span>
            </div>
            <span>{formattedDate}</span>
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1_275)">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                    fill="#88869D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_275">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <span>{weather.name}</span>
          </div>
        </div>
      </section>

      <section className={`search-section ${search ? "first-inactive" : ""}`}>
        <div className="x-icon">
          <div onClick={changeOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g clip-path="url(#clip0_1_223)">
                <path
                  d="M24.4 7.61293C23.88 7.09293 23.04 7.09293 22.52 7.61293L16 14.1196L9.47996 7.59959C8.95996 7.07959 8.11996 7.07959 7.59996 7.59959C7.07996 8.11959 7.07996 8.9596 7.59996 9.4796L14.12 15.9996L7.59996 22.5196C7.07996 23.0396 7.07996 23.8796 7.59996 24.3996C8.11996 24.9196 8.95996 24.9196 9.47996 24.3996L16 17.8796L22.52 24.3996C23.04 24.9196 23.88 24.9196 24.4 24.3996C24.92 23.8796 24.92 23.0396 24.4 22.5196L17.88 15.9996L24.4 9.4796C24.9066 8.97293 24.9066 8.1196 24.4 7.61293Z"
                  fill="#E7E7EB"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_223">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="input-container">
          <div className="input-search">
            <div className="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1_215)">
                  <path
                    d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39002C15.44 5.61002 13.12 3.39002 10.32 3.05002C6.09001 2.53002 2.53002 6.09001 3.05002 10.32C3.39002 13.12 5.61002 15.44 8.39002 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.50002 14C7.01002 14 5.00002 11.99 5.00002 9.50002C5.00002 7.01002 7.01002 5.00002 9.50002 5.00002C11.99 5.00002 14 7.01002 14 9.50002C14 11.99 11.99 14 9.50002 14Z"
                    fill="#616475"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_215">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <input ref={inputRef} type="text" placeholder="Search location" />
          </div>

          <button onClick={() => handleCityByInput(inputRef)}>Search</button>
        </div>

        <div className="countrys">
          <div onClick={handleCityBySelect}>
            <span>London</span>
            <span className="selector-city">&gt;</span>
          </div>
          <div onClick={handleCityBySelect}>
            <span>Barcelona</span>
            <span className="selector-city">&gt;</span>
          </div>
          <div onClick={handleCityBySelect}>
            <span>Long Beach</span>
            <span className="selector-city">&gt;</span>
          </div>
        </div>
      </section>
    </>
  );
}
