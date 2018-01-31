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
 
});