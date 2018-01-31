// 'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_PS = 25;
  this.MAX_TEMP_NO_PS = 32;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSaving = true;
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

  isMinimum: function () { 
    return this.temperature === this.MIN_TEMP 
  },
  isMaximum: function () {
    if (this.powerSaving === true) {
      return this.temperature === this.MAX_TEMP_PS;
    }
    return this.temperature === this.MAX_TEMP_NO_PS;
  },

  turnPowerSavingOn: function () { this.powerSaving = true },
  turnPowerSavingOff: function () { this.powerSaving = false },

  resetTemp: function () { this.temperature = this.DEFAULT_TEMP },

}