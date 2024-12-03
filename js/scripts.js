const hourDigiElement = document.getElementById('hour-d');
const minDigiElement = document.getElementById('min-d');
const weekDayElement = document.getElementById('weekday');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const minutesAnalogicElement = document.getElementById('sec-a');
const toChangeStyles = document.documentElement.style;

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

const setTwoDigits = (number) => (number < 10 ? `0${number}` : number);

const setClocks = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const day = date.getDate();
  const weekDay = week[date.getDay()];
  const month = allMonths[date.getMonth()];
  const year = date.getFullYear();
  hourDigiElement.textContent = setTwoDigits(hours);
  minDigiElement.textContent = setTwoDigits(minutes);
  dayElement.textContent = setTwoDigits(day);
  weekDayElement.textContent = weekDay;
  monthElement.textContent = month;
  yearElement.textContent = year;
  toChangeStyles.setProperty('--seconds-rotation', seconds * 6 + 'deg');
  toChangeStyles.setProperty(
    '--minutes-rotation',
    minutes * (360 / 60) + 'deg'
  );
  toChangeStyles.setProperty(
    '--hours-rotation',
    hours * (360 / 12) + (30 / 60) * minutes + 'deg'
  );
};
setInterval(setClocks, 1000);
