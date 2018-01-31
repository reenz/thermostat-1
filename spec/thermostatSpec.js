'use strict';

describe('Thermostat',function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat
  });

  it('starts at 20 degrees',function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('can increase the temperature with an up function',function(){
    thermostat.turnUp();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('can decrease the temperature with a down function',function(){
    thermostat.turnDown();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.turnDown();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  });

  describe('when power saving on',function(){
    it('has a maximum of 25 degrees', function() {
      thermostat.turnPowerSavingOn();
      for (var i = 0; i < 6; i++) {
        thermostat.turnUp();
      }
      expect(thermostat.getTemperature()).toEqual(25);
    });
  });

  describe('when power saving off',function(){
    it('has a maximum of 32 degrees', function() {
      thermostat.turnPowerSavingOff();
      for (var i = 0; i < 13; i++) {
        thermostat.turnUp();
      }
      expect(thermostat.getTemperature()).toEqual(32);
    });
  });

  it('can be reset to the default temperature', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.turnUp();
    }
    thermostat.resetTemp();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  describe('when temp < 18',function(){
    it('returns "low-usage"',function(){
      for (var i = 0; i < 5; i++) {
        thermostat.turnDown();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage')
    });
  });
 
  describe('when 18 < temp < 25',function(){
    it('returns "medium-usage"',function(){
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    });
  });
  
  describe('when temp > 25',function(){
    it('returns "high-usage"',function(){
      thermostat.turnPowerSavingOff();
      for (var i = 0; i < 11; i++) {
        thermostat.turnUp();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage')
    });
  });
 
});