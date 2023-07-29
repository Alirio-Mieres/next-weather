export default function convertMetersToMiles(meters) {
  const conversionFactor = 0.000621371;
  const miles = meters * conversionFactor;
  return  parseFloat(miles.toFixed(1))
}
