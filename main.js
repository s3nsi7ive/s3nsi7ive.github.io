// Set the date we're counting down to
const countDownDate = new Date("Feb 11, 2022 00:00:00").getTime();
// someone's special day
const amp_day = new Date("Aug 18, 2022 00:00:00").getTime();
// update the countdown every 1 second

function ObtainTime(distance, now) {
    distance = Math.abs(distance - now);
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const curHour = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const curMinutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
    const curSeconds = Math.floor((now % (1000 * 60)) / 1000);
    let dynamicSeconds = curSeconds;
    let dynamicMinutes = curMinutes;
    if (curSeconds < 10) {
        dynamicSeconds = "0" + curSeconds;
    }
    if (curMinutes < 10) {
        dynamicMinutes = "0" + curMinutes;
    }
    return days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
}

const x = setInterval(function () {
    const now = new Date().getTime();

    let days_together = ObtainTime(countDownDate, now);
    let adult_time = ObtainTime(amp_day, now);

    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = days_together
    document.getElementById("countdown2").innerHTML = adult_time
    //document.getElementById("currentTime").innerHTML = curHour + " : " + dynamicMinutes + " : " + dynamicSeconds;
    // If the countdown is finished, write some text
}, 1000);

//"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">

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
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById("latitude").innerHTML = lat.toFixed(5);
    document.getElementById("longitude").innerHTML = lon.toFixed(5);
}