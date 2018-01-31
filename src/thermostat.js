// 'use strict';

function Thermostat() {
this.temperature = 20;
}

Thermostat.prototype = {
  getTemperature: function () { return this.temperature },

  
turnUp: function () {
  if (this.isMaximum()) { return }
  this.temperature += 1
},

turnDown: function () {
  if (this.isMinimum()) { return }
  this.temperature -= 1
},

}