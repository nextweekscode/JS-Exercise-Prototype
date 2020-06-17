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
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
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

function Person(name, age){
  this.name = name;
  this.age = age;
  this.stomach = [];
  
}
// create an eat method that givves the person the abililty to eat some edible - it has a param of something that we can pass food ito 
// if stomach is < 10 person can eat if >10 person can eat
// we want to push the argument of something edible to the array(stomach)
Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
 }
// we need to make a poop method
Person.prototype.poop = function(){
  this.stomach = [];
}

// method called toString - needs to return a string with name and age
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
}

//create my object
const personOne = new Person('Ashton', 34);
const personTwo = new Person('Devin', 26);
const personThree = new Person('Cora', 21);

console.log(personOne.toString());
personOne.eat('tacos');
personOne.eat('fried chicken');
personOne.eat('sashimi');
console.log(personOne.stomach);
personOne.poop();
console.log(personOne.stomach);


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
  this.totaldistance = this.milesPerGallon * this.tank
  }
Car.prototype.fill = function(gallons){
  return this.tank += gallons;
};
Car.prototype.drive = function(distance){
   this.odometer + distance
   this.tank - distance/this.milesPerGallon
   if (this.tank === 0){
     return `I ran out of fuel at ${this.odometer} miles!`
   };
};
const carOne = new Car('Wrangler', 9)
carOne.fill(50);
carOne.drive(500);
console.log(carOne.tank);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this,name,age)
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`
}
const babyOne = new Baby('Logan', 2, 'rattle');
console.log(babyOne.play());


/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Explicit binding - when use .call, .bind, or .apply , 'this' is explicitly defined
  2. Implicit - when function is invoked look to the left of the dot thats what 'this' refers to(only applies to objects)
  3. window/global - when in global scope 'this' will be window/global bound (unless in strict mode, then will return undefined)
  4. new binding-the new keyword constructs a new object and 'this' points to it, when function is invoked as construction function the new keyword 'this' points to the new obj created
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
