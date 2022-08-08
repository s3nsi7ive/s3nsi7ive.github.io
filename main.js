// Set the date we're counting down to
var countDownDate = new Date("Aug 18, 2022 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
    
    // document.getElementById('users').innerText = 'ERR';



    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var curHour = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var curMinutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
    var curSeconds = Math.floor((now % (1000 * 60)) / 1000);
    var dynamicSeconds = curSeconds;
    var dynamicMinutes = curMinutes;
    if (curSeconds < 10) {
    dynamicSeconds = "0" + curSeconds;
    }
    if (curMinutes < 10) {
    dynamicMinutes = "0" + curMinutes;
    }

    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    //document.getElementById("currentTime").innerHTML = curHour + " : " + dynamicMinutes + " : " + dynamicSeconds;
    // If the count down is finished, write some text
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "the birthday bash starts now";
    }
}, 1000);

//"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">

function getIP(json) {
    var e = document.getElementById("ip");
    e.innerHTML = json.ip;
}

    //<script type="application/javascript" src="http://ipinfo.io/?format=jsonp&callback=getIP"></script>
window.onload = function() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
}
else {
    document.getElementById("latitude").innerHTML = "Geolocation is not supported by this browser.";
    document.getElementById("longitude").innerHTML = "";
}
};
function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    document.getElementById("latitude").innerHTML = lat.toFixed(5);
    document.getElementById("longitude").innerHTML = lon.toFixed(5);
}