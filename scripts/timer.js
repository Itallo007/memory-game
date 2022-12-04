let startTime;
let showtimeKey;
let timesUpKey;

const start = (limitTime, handleTimesUp) => {
  startTime = Date.now();
  showtimeKey = setInterval(showTime, 1000);
  // setTimeout(() => {clearInterval(x)}, 30000)
  timesUpKey = setTimeout(() => {
    stop()
    handleTimesUp()
  }, limitTime * 1000);

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
  clearInterval(showtimeKey);
  clearInterval(timesUpKey);
}

export {start, stop}