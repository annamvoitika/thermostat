$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up(1);
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down(1);
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.mode_on();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.mode_off();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  function updateTemperature() {
  $('#temperature').text(thermostat.degrees);
  $('#temperature').attr('class', thermostat.usage());
};
});
