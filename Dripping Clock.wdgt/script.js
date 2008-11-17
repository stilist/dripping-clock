var secondsBar;
var minutesBar;
var hoursBar;
var daysBar;
var monthsBar;
var daysInYearBar;
var clockUpdate;


function $(id) {
 return document.getElementById(id);
}

function setHeight(elem, now, limit) {
 var pct, height = 0;

 pct = 100 / (limit - 1);
 height = now * pct;

 elem.style.height = height + '%';
}

function clockTerm() {
  clearInterval(clockUpdate);
}

function updateSeconds() {
  var seconds = (new Date()).getSeconds();
  if (seconds === 0)
    updateMinutes();

  setHeight(secondsBar, seconds, 60);
}

function updateMinutes() {
  var minutes = (new Date()).getMinutes();
  if (minutes === 0)
    updateHours();

  setHeight(minutesBar, minutes, 60);
}

function updateHours() {
  var hours = (new Date()).getHours();
  if (hours === 0) {
    updateDays();
    updateDaysInYear();
  }

  setHeight(hoursBar, hours, 24);
}

function updateDays() {
  var now, today, year, month, offset, daysInMonth = 0;

  /* http://www.go4expert.com/forums/showthread.php?t=886 */
  now = new Date();
  today = now.getDate();

  year = now.getFullYear();
  month = now.getMonth();
  offset = new Date(year, month, 32).getDate();
  daysInMonth = 32 - offset;

  setHeight(daysBar, today, daysInMonth);
}

function updateMonths() {
  var months = (new Date()).getMonth();

  setHeight(monthsBar, months, 12);
}

function updateDaysInYear() {
  var now, nextYear, nowMS, nextYearMS, daysLeft, year, length, today = 0;

  /* http://www.mcfedries.com/JavaScript/DaysBetween.asp */
  now = new Date();
  nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  nextYear.setMonth(0);
  nextYear.setDate(1);

  nowMS = now.getTime();
  nextYearMS = nextYear.getTime();
  daysLeft = Math.round(Math.abs(nowMS - nextYearMS) / 86400000);

  /* http://www.htmlgoodies.com/primers/jsp/print.php/11915_3677591_4 */
  year = now.getFullYear();
  if (year % 4 === 0 && (!year % 100 === 0 || year % 400 === 0))
    length = 366;
  else
    length = 365;

  today = length - daysLeft;

  setHeight(daysInYearBar, today, length);
}

function clockInit() {
  secondsBar = $('seconds');
  minutesBar = $('minutes');
  hoursBar = $('hours');
  daysBar = $('days');
  monthsBar = $('months');
  daysInYearBar = $('daysInYear');

  clockUpdate = setInterval(updateSeconds, 1000);

  updateSeconds();
  updateMinutes();
  updateHours();
  updateDays();
  updateMonths();
  updateDaysInYear();
}
