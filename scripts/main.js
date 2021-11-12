document.getElementById('display').innerHTML = 'Hello, this is Daniel writing in JavaScript!';

//var date = new Date();
//var n = date.toDateString();
//var time = date.toLocaleTimeString();
//document.getElementById('date').innerHTML = n + ' ' + time;

var timeDisplay = document.getElementById("date");

function refreshTime() {
  var date = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"});
  var formattedString = date.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);