class Thermostat {
  constructor(){
    this.degrees = 20;
    this.mode = "on";
    this.max_power_saving_mode_on = 25;
    this.max_power_saving_mode_off = 32;
  }

  degree(number){
    this.degrees = number
    return this.degrees;
  }

  up(number){
    this.degrees = this.degrees + number
      if (this.mode == "on" && this.degrees > this.max_power_saving_mode_on){
      throw "Power saving mode is on, max temp reached";
    }
      else if (this.mode == "off" && this.degrees > this.max_power_saving_mode_off){
        throw "Power saving mode is off, max temp reached";
      }
      else {
    return this.degrees;}
  }

  down(number){
    if (this.degrees - number < 10){
      throw "Temperature too low!";
    }
    else {
    this.degrees = this.degrees - number
    return this.degrees;}
  }

  mode_status(){
    return this.mode;
  }

  reset(){
    this.degrees = 20
    return this.degrees
  }

  usage(){
    if (this.degrees < 18){
      return "low usage";
    }
    else if (this.degrees >= 18 && this.degrees < 25){
      return "medium usage";
    }
    else {
      return "high usage";
    }
  }
};
