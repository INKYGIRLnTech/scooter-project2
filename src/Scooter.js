class Scooter{
  // scooter code here
  
  static nextSerial = 0;

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user) {
    if (this.isBroken) {
      throw "scooter needs repair";
    } else if (this.charge < 20) {
      throw "scooter needs to charge";
    }

    this.user = user;
    this.station = null;
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }

  recharge() {
    this.charge = 100;
  }
}


module.exports = Scooter
