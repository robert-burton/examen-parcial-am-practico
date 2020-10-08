//Da formato a la info

function showCityWeather(info) {
  document.getElementById("result").innerHTML = "";
  var elementHeader = document.createElement("h5");
  document.getElementById("result").appendChild(elementHeader);

  var display = document.createElement("h4");
  display.style.color = "white";
  display.innerHTML = info.cityName + "<br ><hr />";
  document.getElementById("result").appendChild(display);

  var display = document.createElement("h4");
  display.style.color = "white";
  display.innerHTML = info.currentTemp + "°C actualmente<br ><hr />";
  document.getElementById("result").appendChild(display);

  var display = document.createElement("h4");
  display.style.color = "white";
  display.innerHTML = info.maxTemp + "°C max<br ><hr />";
  document.getElementById("result").appendChild(display);

  var display = document.createElement("h4");
  display.style.color = "white";
  display.innerHTML = info.minTemp + "°C min<br ><hr />";
  document.getElementById("result").appendChild(display);
}
