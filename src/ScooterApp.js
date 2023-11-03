const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = {
        'Crotona Park Station173':[],
        'TimeSquare Station42':[],
        'Yankees Stadium161':[]
    };
    this.registeredUsers = {};
}

registerUser(username, password, age) {
    if(!this.registeredUsers[username] && age >= 18) {
      let user = new User(username, password, age)
      this.registeredUsers[username] = user;
      return user
    } else if(age < 18) {
      throw new Error("too young to register")
    } else if(this.registeredUsers[username]){
      throw new Error("already registered")
    }

}

loginUser(username, password) {
    if(this.registeredUsers[username]) {
      this.registeredUsers[username].login(password)
      console.log("user has been logged in")
    } else {
      throw new Error("Username or password is incorrect")
    }
}

logoutUser(username) {
    if(this.registeredUsers[username] && this.registeredUsers[username].loggedIn == true) {
      this.registeredUsers[username].logout(
        console.log("user has been logged out")
      ); {
        throw new Error("no such user is logged in")
      }
    }
}

createScooter(station) {
    if (!this.stations[station]) {
        throw 'no such station';
    }
    const scooter = new Scooter(station);
    this.station[station].push(scooter);
    scooter.station = station;
    console.log(`created new scooter at ${station}`);
    return scooter;
}

dockScooter(scooter, station) {
    if (!this.stations[station]) {
        throw "no such station";
    }
    if (this.stations[station].includes(scooter)) {
        throw "scooter already at station";
    }

    this.stations[station].push(scooter);
    scooter.dock(station);
    console.log(`scooter is docked at ${station}`);
}

rentScooter(scooter, user) {
    if(!scooter.station) {
        throw "scooter already rented";
    } else if (!this.stations[scooter.station]) {
        throw "no such station";
    }

    for (let i = 0; i < this.stations[scooter.station].length; i++) {
        if (this.stations[scooter.station][i] === scooter) {
            this.stations[scooter.station].splice(i, "");
            console.log(`scooter from ${scooter.station} is rented to ${user.username}`);
            scooter.station = null;
            scooter.user = user;
            return;
        }
    }

    this.logState();
    throw "scooter not at station";

}

printStation() {
    console.log("\n\n*** Scooter Application State***");
    console.log("\nRegistred Users:");
    Object.keys(this.registeredUsers).map(username => console.lg (` ${username}`));
    console.log("\nStations:");
    for (const station in this.stations) {
        console.log(` ${stations} has ${this.stations[station].length} docked scooters`);
    }
}

}

module.exports = ScooterApp
