//Code below is used for the date/time
function getName() {
  var person = prompt('Please enter your name:');
  if (person != null) {
    document.getElementById('name').innerHTML = "Hello " + person +"!";
  }
}

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

//Code below is used for the canvas
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.fillStyle = 'CornflowerBlue';
context.fillRect(20, 20, 200, 100); // First rectangle

context.fillStyle = '#9932CC';
context.fillRect(80, 80, 200, 100); // Second rectangle

context.fillStyle = 'rgb(255, 0, 0)';
context.fillRect(140, 140, 200, 100); // Third rectangle

context.fillStyle = 'rgba(153, 50, 204, 0.5)';
context.fillRect(200, 200, 200, 100); // Fourth rectangle