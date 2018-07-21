// Return today's date and time
var currentTime = new Date();
// returns the year (four digits)
var year = currentTime.getFullYear();
// insert current year into document
// first create span element with
// id of currentyear
document.getElementById("currentyear").innerHTML = year;
