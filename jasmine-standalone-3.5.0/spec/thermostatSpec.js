describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

it("starts at 20 degrees", function(){
  expect(thermostat.currentDegree(20)).toEqual(20);
});

it("increases temperature with an up function", function(){
  expect(thermostat.up(5)).toEqual(25);
});

it("decreases temperature with a down fucntion", function(){
  expect(thermostat.down(5)).toEqual(15);
});

it("can't fall below 10 degrees", function(){
  expect(function(){thermostat.down(11);}).toThrow("Temperature too low!");
});

it("returns off if the power saving mode is off", function(){
  thermostat.mode = "off";
  expect(thermostat.mode_status()).toEqual("off");
});

it("returns on if the power saving mode is on", function(){
  expect(thermostat.mode_status()).toEqual("on");
});

it("does not increase temperature beyond 25 if power saving mode is on", function(){
  expect(function(){thermostat.up(10);}).toThrow("Power saving mode is on, max temp reached");
});

it("does not increase temp beyond 32 if power saving mode is off", function(){
  thermostat.mode = "off";
  expect(function(){thermostat.up(20);}).toThrow("Power saving mode is off, max temp reached");
});

it('resets temperature to default 20 when clicking reset button', function(){
  thermostat.reset();
  expect(thermostat.degrees).toEqual(20);
});

it('informs about energy usage', function(){
  thermostat.currentDegree(17);
  expect(thermostat.usage()).toEqual("low usage");
});

it("changes the usage status", function(){
  thermostat.currentDegree(27);
  thermostat.usage()
  expect(thermostat.usageStatus).toEqual("high-usage");
});

});
