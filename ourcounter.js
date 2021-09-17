
// initialising Election Date
var electionDate = new Date("Aug 9, 2022 07:30:00").getTime();

// updating the counter every second
var x = setInterval(function() {

  // Get today's date and time
  var today = new Date().getTime();

  // Find the difference in time between NOW and the ELECTION DATE
  var diff = electionDate - today;

  // Time calculations for MONTHS, WEEKS, DAYS, HOURS, MINUTES and SECONDS
  var months=Math.floor(diff / (1000*60*60*24*7*4));
  var weeks=Math.floor((diff % (1000*60*60*24*7*4)) / (1000*60*60*24*7));
  var days = Math.floor((diff % (1000*60*60*24*7)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Set our results in the respective HTML element
  document.getElementById("months").value =months +" Months";
  document.getElementById("weeks").value =weeks +" weeks";
  document.getElementById("days").value =days +" Days";
  document.getElementById("hours").value =hours +" Hours";
  document.getElementById("minutes").value =minutes +" Minutes";
  document.getElementById("seconds").value =seconds +" Seconds";

  // If COUNTDOWN is finished, display the error message
  if (diff < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


