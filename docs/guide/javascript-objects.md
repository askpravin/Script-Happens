# JavaScript Objects

Welcome to our guide on JavaScript objects! Objects are one of the most powerful and flexible data structures in JavaScript.

## What are Objects?

Objects in JavaScript are collections of key-value pairs. They allow you to store related data and functionality together. Think of an object as a container that can hold various pieces of information.

## Creating Objects

### Object Literals

The simplest way to create an object is using object literal notation:

```javascript
const person = {
  name: 'John',
  age: 30,
  isEmployed: true,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
```

### Accessing Object Properties

You can access object properties using dot notation or bracket notation:

```javascript
// Dot notation
console.log(person.name); // "John"

// Bracket notation
console.log(person['age']); // 30

// Calling a method
person.greet(); // "Hello, my name is John"
```

## Object Methods

Methods are functions that are stored as object properties. They can access and modify the object's data.

```javascript
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

console.log(calculator.add(5, 3)); // 8
```

## The `this` Keyword

Inside an object method, `this` refers to the object the method belongs to:

```javascript
const counter = {
  count: 0,
  increment: function() {
    this.count++;
    return this.count;
  }
};

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
```

## Object Constructors

Constructors are functions used to create multiple similar objects:

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.displayInfo = function() {
    return `${this.year} ${this.make} ${this.model}`;
  };
}

const myCar = new Car('Toyota', 'Corolla', 2020);
const yourCar = new Car('Honda', 'Civic', 2019);

console.log(myCar.displayInfo()); // "2020 Toyota Corolla"
```

## Object Prototypes

Prototypes allow objects to inherit properties and methods from other objects:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(`${this.name} barks`);
};

const dog = new Dog('Rex');
dog.speak(); // "Rex barks"
```

## What's Next?

Now that you understand JavaScript objects, you can:

- [Build cool web projects](/guide/javascript-web-projects)
- [Explore more advanced JavaScript](/guide/intermediate-javascript)
- [Learn about Arrays and Loops](/guide/javascript-arrays-loops)

Keep practicing with objects - they're fundamental to JavaScript programming and you'll use them in almost every project you build!