const rootStyles = document.documentElement.style;
const hourDigiElement = document.getElementById('hour-d');
const minDigiElement = document.getElementById('min-d');
const weekDayElement = document.getElementById('weekday');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const allMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Digital

const setDigital = () => {
  const date = new Date();
  const minutes = date.getMinutes();
  const hour = date.getHours();
  const day = date.getDate();
  const weekDay = week[date.getDay()];
  const month = allMonths[date.getMonth()];
  const year = date.getFullYear();
  hourDigiElement.textContent = hour;
  minDigiElement.textContent = minutes;
  dayElement.textContent = day;
  weekDayElement.textContent = weekDay;
  monthElement.textContent = month;
  yearElement.textContent = year;
};
setInterval(setDigital, 1000);

//analógico
