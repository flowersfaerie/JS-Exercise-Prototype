/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function() {
  this.isFlying = true;
};
Airplane.prototype.land = function() {
  this.isFlying = false;
};

/*
// ?? COMPLETE YOUR WORK BELOW ??
// ?? COMPLETE YOUR WORK BELOW ??
// ?? COMPLETE YOUR WORK BELOW ??
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(someFood) {
  if (this.stomach.length <= 9) {
    this.stomach.push(someFood);
  }
  return this.stomach;
};

Person.prototype.poop = function() {
  this.stomach = [];
};

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
};
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function(gallons) {
  return (this.tank = this.tank + gallons);
};
Car.prototype.drive = function(distance) {
  let mpg = distance / this.milesPerGallon;
  if (mpg <= this.tank) {
    this.odometer = this.odometer + distance;
    this.tank = this.tank - distance / this.milesPerGallon;
  } else {
    this.odometer = this.odometer + this.tank * this.milesPerGallon;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer}!`;
  }
};

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
  Baby.prototype = Object.create(Person.prototype);
  Baby.prototype.play = function() {
    return `Playing with ${favoriteToy}`;
  };
}

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Global/Window Binding: this usage of the "this" keyword represents the broadest scope of the keyword and should seldom if ever be used as it only represents the window that the code is created in and not the code itself. It returns the code for the window, but not for the object you are trying to create.

  2. Implicit Binding: this usage of the the keyword represents the object that contains the function where the keyword is being used.

  3. New Binding: this usage of the keyword inside of a constructor function's method points to the unique constructor object instance stored in the variable on which the method is being called.

  4. Explicit Binding: The first argument passed to either the call or apply method explicitly sets what this usage of the keyword points to.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}
