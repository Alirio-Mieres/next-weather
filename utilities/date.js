export default function formatDate(info) {

  const dayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ]

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
  const infoDate = info ? new Date(info) : new Date();

  // check if the date is today
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);


  if (infoDate.toISOString().slice(0, 10) === tomorrow.toISOString().slice(0, 10)) {
    return "Tomorrow";
  }

  const formattedDate = `${dayNames[infoDate.getDay()]}, ${infoDate.getDate()} ${monthNames[infoDate.getMonth()]
    }`;


  return formattedDate;
}
