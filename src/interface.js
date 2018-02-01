$(document).ready(function () {

  thermostat = new Thermostat()

  $("#temperature-up").click(function (event) {
    thermostat.turnUp();
    $("#current-temp").text(thermostat.getTemperature());
    // if(thermostat.isMaximum()) {
    //   $("#temperature-up").prop("disabled", true);
    // }
  });

  $("#temperature-down").click(function (event) {
    thermostat.turnDown();
    $("#current-temp").text(thermostat.getTemperature());
  });

  $("#temperature-reset").click(function (event) {
    thermostat.resetTemp();
    $("#current-temp").text(thermostat.getTemperature());
  });

  $("#powersaving-on").click(function (event) {
    thermostat.turnPowerSavingOn();
    $("#power-saving-status").text(thermostat.isPowerSavingOn());
  });

  $("#powersaving-off").click(function (event) {
    thermostat.turnPowerSavingOff();
    $("#power-saving-status").text(thermostat.isPowerSavingOn());
  });
});