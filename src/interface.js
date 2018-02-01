$(document).ready(function () {

  thermostat = new Thermostat()

    function updateTemp(){
      $("#current-temp").text(thermostat.getTemperature());
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
  });

  $("#temperature-down").click(function (event) {
    thermostat.turnDown();
    updateTemp();
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
