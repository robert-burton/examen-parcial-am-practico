//Este archivo se encarga de hacer la llamada AJAX y traer la info

//El resultado se pasa a dataViewer

//Debe tener la logica de mostrar/ocultar elementos e info

var citySearched = document.getElementById("ciudadIn").value;

function search() {
  var citySearched = document.getElementById("ciudadIn").value;
  document.getElementById("searchButtonDiv").style.display = "none";
  if (citySearched == "") {
    alert("Hay que ingresar una ciudad");
  } else {
    var apiURL =
      "api.openweathermap.org/data/2.5/weather?q=" +
      citySearched +
      "&appid=4c1f52b065baf1561a6fe124b58b84d6";
    getApiData(apiURL);
  }
  document.getElementById("searchButtonDiv").style.display = "inline";
}

//Esta fn llama a la API y pasarla a dataViewer
function getApiData(apiURL) {
  var request = new XMLHttpRequest();
  request.open("GET", apiURL, true);
  request.send();

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = this.response;
      var myData = JSON.parse(data);

      var info = {
        cityName: myData.name,
        currentTemp: myData.main.temp,
        maxTemp: myData.main.temp_max,
        minTemp: myData.main.temp_min,
      };
      showCityWeather(info);
    }
  };
}
