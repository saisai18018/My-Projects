var targetDate = new Date('2024-12-31T00:00:00').getTime();

  var countdownClock = setInterval(function() {
    var now = new Date().getTime();
    var distance = targetDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Add leading zeros if necessary
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display the countdown in the element with id="countdown"
    document.getElementById("countdown").innerHTML = hours + ":" + minutes + ":" + seconds;

    // If the countdown is over, clearInterval and display a message
    if (distance < 0) {
      clearInterval(countdownClock);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);