const secBar = document.getElementById("seconds");
const minBar = document.getElementById("minutes");
const hourBar = document.getElementById("hours");

function setDate()
{
	var date = new Date();
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hours = date.getHours();
	var secondsDegree = seconds * 6 + 90;
	var minutesDegree = minutes * 6 + 90;
	var hoursDegree = hours * 30 + 90;
	secBar.style.transform = `rotate(${secondsDegree}deg)`;
	minBar.style.transform = `rotate(${minutesDegree}deg)`;
	hourBar.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);
