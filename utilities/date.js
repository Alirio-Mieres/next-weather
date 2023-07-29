export default function formatDate(info) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // create an array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // create a new date object
  const date = info ? new Date(info) : new Date();

  if (date.toDateString() === tomorrow.toDateString()) {
    return "Tomorrow";
  }

  // format the date as "Fri, 5 Jun"
  const formattedDate = `${date.toString().slice(0, 3)}, ${date.getDate()} ${
    monthNames[date.getMonth()]
  }`;

  return formattedDate;
}
