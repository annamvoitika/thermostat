class Thermostat
  attr_reader :degrees

  def initialize
    @degrees = 20
  end

  def self.instance
    @thermostat ||= self.new
  end

  def update(degrees)
    @degrees = degrees
  end
end 
