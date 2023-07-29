export default function weatherIcon(main, description) {
  let icon = "/LightCloud.png";

  switch (main) {
    case "Clear":
      icon = "/Clear.png";
      break;
    case "Clouds":
      if (
        description === "scattered clouds" ||
        description === "broken clouds"
      ) {
        icon = "/HeavyCloud.png";
        break;
      } else {
        icon = "/LightCloud.png";
        break;
      }
    case "Drizzle":
      icon = "/LightRain.png";
      break;
    case "Rain":
      if (description === "shower rain") {
        icon = "/Shower.png";
        break;
      } else if (description === "light rain") {
        icon = "/LightRain.png";
        break;
      } else {
        icon = "/HeavyRain.png";
        break;
      }
    case "Thunderstorm":
      icon = "/Thunderstorm.png";
      break;
    case "Snow":
      icon = "/Snow.png";
      break;
    default:
      icon = "/LightCloud.png";
      break;
  }

  return icon;
}
