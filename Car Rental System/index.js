
const  Car  = require('./car');
const  CarRental  = require('./car');

const carRental = new CarRental();
carRental.addCar("Toyota", "Corolla");

console.log(carRental.listAllCars());