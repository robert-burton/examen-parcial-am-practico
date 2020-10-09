/*FUENTES CONSULTADAS

Como redondear un numero a dos decimales: https://www.w3schools.com/jsref/jsref_tofixed.asp

*/

function showCityWeather(info) {
  document.getElementById("result").innerHTML = "";
  var elementHeader = document.createElement("h5");
  document.getElementById("result").appendChild(elementHeader);

  //Nombre de ciudad
  var display = document.createElement("h1");
  display.style.color = "whitesmoke";
  display.innerHTML = info.cityName + "<br >";
  document.getElementById("result").appendChild(display);

  //Temperaturas
  createTempSection(info,"current");
  createTempSection(info,"max");
  createTempSection(info,"min");
}

//Crea las impresiones de temperatura, dependiendo del tipo
function createTempSection(info, tempType){
  if(tempType == "current"){
    temp = info.currentTemp;
    textColor = "green";
    infoPrint = "°C actualmente<br >";
    flag = 1;
  }
  if(tempType == "max"){
    temp = info.maxTemp;
    textColor = "red";
    infoPrint = "°C max<br >";
    flag = 1;
  }
  if(tempType == "min"){
    temp = info.minTemp;
    textColor = "cyan";
    infoPrint = "°C min<br >";
    flag = 1;
  }
  if(flag == 1){
    display = document.createElement("h2");
    display.style.color = textColor;
    display.innerHTML = temp + infoPrint;
    document.getElementById("result").appendChild(display);
  }

}