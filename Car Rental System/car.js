// Car class to represent a car in the fleet
class Car {
  constructor(id, make, model) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.isRented = false;
  }

  rentCar() {
    if (!this.isRented) {
      this.isRented = true;
      return true;
    }
    return false;
  }

  returnCar() {
    if (this.isRented) {
      this.isRented = false;
      return true;
    }
    return false;
  }
}

// Car Rental System class
class CarRental {
  constructor() {
    this.cars = {}; // Use an object to store cars by ID
    this.nextCarId = 1;
  }

  // Add a new car to the fleet
  addCar(make, model) {
    const id = this.nextCarId++;
    this.cars[id] = new Car(id, make, model);
    console.log(`Added car: ${make} ${model}`);
    return id;
  }

  // Rent a car
  rentCar(carId) {
    
    const car = this.cars[carId];
    if (!car) {
          console.log("Car doesnt exist for this id:"+carId);
          return false;
    }
    if (car && car.rentCar()) {
      console.log(`Car rented: ${car.make} ${car.model}`);
      return true;
    }
      console.log(`Car already rented: ${car.make} ${car.model}`);
    return false;
  }

  // Return a rented car
  returnCar(carId) {
    const car = this.cars[carId];
    if (car && car.returnCar()) {
      console.log(`Car returned: ${car.make} ${car.model}`);
      return true;
    }
    return false;
  }

  // Get details of a car
  getCarDetails(carId) {
    const car = this.cars[carId];
    if (car) {
      return {
        id: car.id,
        make: car.make,
        model: car.model,
        isRented: car.isRented
      };
    }
    return null; // Car not found
  }

  // List all cars
  listAllCars() {
    return Object.values(this.cars).map(car => ({
      id: car.id,
      make: car.make,
      model: car.model,
      isRented: car.isRented
    }));
  }

  // Remove a car from the fleet
  removeCar(carId) {
    const car = this.cars[carId];
    if (car && !car.isRented) {
      delete this.cars[carId];
      console.log(`Car removed: ${car.make} ${car.model}`);
      return true;
    }
    console.log(`Car cannot be removed as it is currently rented: ${car.make} ${car.model}`);
    return false;
  }
}

// Usage
 const carRental = new CarRental();
carRental.addCar("Toyota", "Corolla");
carRental.addCar("Honda", "Civic");

carRental.rentCar(3);
/* console.log(carRental.listAllCars());
carRental.rentCar(1);

carRental.removeCar(1);
console.log(carRental.listAllCars());
carRental.removeCar(2);
console.log(carRental.listAllCars());
carRental.returnCar(1);
console.log(carRental.listAllCars()); */

/*
// Renting the first car

carRental.rentCar(1); // Trying to rent the same car again

// Returning a car
carRental.returnCar(1);

// Getting car details
console.log(carRental.getCarDetails(1));

// List all cars
console.log(carRental.listAllCars());

// Removing a car
carRental.removeCar(2);
 */