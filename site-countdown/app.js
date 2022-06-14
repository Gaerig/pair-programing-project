const countDown = () => {
  const openDate = new Date("June 27, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = openDate - now;

  //Calcul time

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day-time").innerText = textDay;
  document.querySelector(".hour-time").innerText = textHour;
  document.querySelector(".minute-time").innerText = textMinute;
  document.querySelector(".second-time").innerText = textSecond;
};

setInterval(countDown, 1000);
