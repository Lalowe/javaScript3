//tento kod ukaze za kazdym hore pocasie ikonku a hodnotu a spravu a zakazdym sa to vymaze

<
body >
    <
    main >
    <
    div class = "weatherApp" >
    <
    h1 > WeatherApp < /h1> <
img src = "#"
alt = "WeatheIcon"
title = "Weather"
id = "weatherIcon" >
    <
    span id = "temperature" > < /span> <
span id = "weatherDisplay" > < /span> <
img src = ""
alt = "" >
    <
    /div> < /
main > <
    script src = "script.js" > < /script> < /
body >

    var weather = Math.floor(Math.random() * 51) - 5;
var message = "The weather is  "
if (weather <= 0) {
    message += "freezing";
    document.getElementById("weatherIcon").src = "img/freezing.png";
} else if (weather <= 12) {
    message += "cold";
    document.getElementById("weatherIcon").src = "img/cold.png";
} else if (weather <= 20) {
    message += "warm";
    document.getElementById("weatherIcon").src = "img/warm.png";
} else if (weather <= 50) {
    message += "hot"
    document.getElementById("weatherIcon").src = "img/sun.png";
}
document.getElementById("temperature").innerHTML = (weather)
document.getElementById("weatherDisplay").innerHTML = (message)