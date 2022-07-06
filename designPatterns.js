/**
 * 1. Constructor Pattern
 */

let monkey = {};
let ape = new Object();
// An arrow function cannot become an Object's constructor function.
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.getName = () => console.log(this.name);
  }
}
let person = new Human("Lucas", 42);
person.getName();

/**
 * 2. Factory Pattern
 */

const Vehicle = function () {
  this.honk = () => console.log("I am a vehicle...");
};

const Car = function () {
  this.honk = () => console.log("I am a Car.");
};

const Bike = function () {
  this.honk = () => console.log("I am a Bike.");
};

const Truck = function () {
  this.honk = () => console.log("I am a Truck.");
};

const VehicleFactory = function () {
  this.createVehicle = (vehicleType) => {
    let vehicle;
    switch (vehicleType) {
      case "car":
        vehicle = new Car();
        break;
      case "bike":
        vehicle = new Bike();
        break;
      case "truck":
        vehicle = new Truck();
        break;
      default:
        vehicle = new Vehicle();
    }
    return vehicle;
  };
};

const vf = new VehicleFactory();
let car = vf.createVehicle("car");
let bike = vf.createVehicle("bike");
let truck = vf.createVehicle("truck");
let limousine = vf.createVehicle("limousine");
car.honk();
bike.honk();
truck.honk();
limousine.honk();
