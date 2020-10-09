var citySearched = document.getElementById("ciudadIn").value;

//Valida que haya una entrada de texto; si se valida, se llama a la API
function search() {
  var citySearched = document.getElementById("ciudadIn").value;
  document.getElementById("searchButtonDiv").style.display = "none";
  if (citySearched == "") {
    alert("Hay que ingresar una ciudad");
  } else {
    var apiURL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      citySearched +
      "&appid=4c1f52b065baf1561a6fe124b58b84d6";
    getApiData(apiURL);
  }
  document.getElementById("searchButtonDiv").style.display = "inline";
}

//Llama a la API y pasa info tratada a dataViewer
function getApiData(apiURL) {

  var request = new XMLHttpRequest();
  request.open("GET", apiURL, true);
  request.send();

  request.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 404){
      alert("Ciudad no encontrada");
    }
    else if (this.readyState == 4 && this.status == 200) {
      var data = this.response;
      var myData = JSON.parse(data);
      treatData(myData);
    }
  }
}

//Da tratamiento y valida los datos de la ciudad buscada
function treatData(myData){
  var info = {
    cityName: myData.name,
    currentTemp: myData.main.temp-273.15,
    maxTemp: myData.main.temp_max-273.15,
    minTemp: myData.main.temp_min-273.15,
    country: myData.sys.country,
  };

  //Comprobar que ciudad este en MX
  if(info.country != "MX"){
    alert(info.cityName + " no se encuentra en Mexico");
  }
  else{
    roundTempToTwoDecimals(info);
    showCityWeather(info);
  }
}


//Rendondea temperaturas a dos decimales
function roundTempToTwoDecimals(info){
  info.currentTemp = info.currentTemp.toFixed(2);
  info.maxTemp = info.maxTemp.toFixed(2);
  info.minTemp = info.minTemp.toFixed(2);
}
