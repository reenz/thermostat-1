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
 
});