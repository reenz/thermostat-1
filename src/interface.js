$(document).ready(function () {

  thermostat = new Thermostat()

  setInterval(currentTime, 1000);

  function currentTime() {
    $.get("http://localhost:4567/now", function(resp) {
      $("#time-span").text(resp)
    });
  };

  $.get("http://localhost:4567/temperature", function(resp) {
    console.log("Response on page start: " + resp);
    if (resp === "") {
      $("#current-temp").text(thermostat.getTemperature())
    } else {
      $("#current-temp").text(resp)
    }
  })

  // get user location
  $("#user-location").submit(function(event){
    event.preventDefault();
    var city = $("#city").val();
    displayWeather(city);
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='
    var apiKey = '&appid=76acf1fa5703886e3010c6631ef87b4b'
    var units = '&units=metric'
    $.get(url + city + units + apiKey, function(weatherResponse){
      $('#current-weather').text(weatherResponse.main.temp);
    });
    $("#current-location").text(city);
  };

  function updateTemp() {
    $("#current-temp").text(thermostat.getTemperature());
    $("#current-temp").attr('class', thermostat.energyUsage());

    if(thermostat.isMaximum()) {
      $("#temperature-up").prop("disabled", true);
    } else {
      $("#temperature-up").prop("disabled", false);
    }

    if(thermostat.isMinimum()) {
      $("#temperature-down").prop("disabled", true);
    } else {
      $("#temperature-down").prop("disabled", false);
    }
  };

  $("#temperature-up").click(function (event) {
    thermostat.turnUp();
    updateTemp();
    console.log("calling post")
    $.post("http://localhost:4567/temperature", {"current_temp":thermostat.getTemperature()})
  });

  $("#temperature-down").click(function (event) {
    thermostat.turnDown();
    updateTemp();
    $.post("http://localhost:4567/temperature", {"current_temp":thermostat.getTemperature()})
  });

  $("#temperature-reset").click(function (event) {
    thermostat.resetTemp();
    updateTemp();
  });

  $("#powersaving-on").click(function (event) {
    thermostat.turnPowerSavingOn();
    $("#power-saving-status").text ('on');
  });

  $("#powersaving-off").click(function (event) {
    thermostat.turnPowerSavingOff();
    $("#power-saving-status").text('off');
  });
});
