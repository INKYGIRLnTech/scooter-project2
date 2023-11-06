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
      this.registeredUsers[username].logout()
        console.log("user has been logged out")
    } else {
        throw new Error("no such user is logged in")
      }
  }
  

  createScooter(station){
    if(this.stations[station]){
      let scooter = new Scooter(station);
      this.stations[station].push(scooter)
      console.log('created new scooter')
      return scooter
    } else {
      throw new Error('no such station')
    }
  }

  dockScooter(scooter, station){
    if(scooter.station == null && this.stations[station]){
      scooter.dock(station)
      this.stations[station].push(scooter)
    } else if(!this.stations[station]){
      throw new Error("no such station")
    } else if(scooter.station !== null){
      throw new Error("scooter is already taken")
    }
  }

  rentScooter(scooter, user) {
    if(scooter.station != null) {
      for (const oneStation in this.station) {
        for(let i = 0; i < this.stations[oneStation].length; i++){
          if(this.stations[oneStation][i] == scooter) {
            this.stations[oneStation].splice(i, 1);
          }
        }
      }
      scooter.rent(user)
      console.log("scooter is rented")
    } else {
      throw new Error("scooter already rented")
    }
  }

  printStation(){
    console.log(this.registeredUsers);;
    console.log(this.stations['Crotona Park Station173'].legnths);
  }
  

}

module.exports = ScooterApp
