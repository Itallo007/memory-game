let startTime;
let x;

const start = () => {
  startTime = Date.now();
  x = setInterval(showTime, 1000);
  // setTimeout(() => {clearInterval(x)}, 30000)
}

const showTime = () => {
  let dateObj = new Date(Date.now() - startTime);

  let hours = dateObj.getUTCHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
  let minutes = dateObj.getUTCMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
  let seconds = dateObj.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

  let stringTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById('time').innerHTML = stringTime;
}

const stop = () => {
  clearInterval(x);
}

export {start, stop}