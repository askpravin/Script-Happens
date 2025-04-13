# Intermediate JavaScript

Welcome to the Intermediate JavaScript lesson. This guide builds upon basic JavaScript concepts and introduces more advanced topics to enhance your JavaScript skills.

## Topics Covered

### 1. Advanced Functions

#### Closures
Closures are functions that remember the environment in which they were created.

```javascript
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

#### Higher-Order Functions
Functions that take other functions as arguments or return functions.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using map (a higher-order function)
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Creating a higher-order function
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const triple = multiplyBy(3);
console.log(triple(4)); // 12
```

### 2. Asynchronous JavaScript

#### Promises
Promises represent the eventual completion or failure of an asynchronous operation.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: 'User' };
      resolve(data);
      // If there was an error: reject(new Error('Failed to fetch data'));
    }, 1000);
  });
}

fetchData()
  .then(data => console.log('Data received:', data))
  .catch(error => console.error('Error:', error));
```

#### Async/Await
A cleaner way to work with promises.

```javascript
async function getData() {
  try {
    const data = await fetchData(); // fetchData returns a promise
    console.log('Data received:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

getData();
```

### 3. Object-Oriented JavaScript

#### Classes and Inheritance

```javascript
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  getInfo() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, doors) {
    super(make, model);
    this.doors = doors;
  }
  
  getInfo() {
    return `${super.getInfo()} with ${this.doors} doors`;
  }
}

const myCar = new Car('Toyota', 'Corolla', 4);
console.log(myCar.getInfo()); // Toyota Corolla with 4 doors
```

### 4. ES6+ Features

#### Destructuring

```javascript
// Object destructuring
const person = { name: 'John', age: 30, job: 'Developer' };
const { name, age } = person;
console.log(name, age); // John 30

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [primary, secondary] = colors;
console.log(primary, secondary); // red green
```

#### Spread and Rest Operators

```javascript
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// Rest operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

## Practice Exercises

1. Create a function that uses closures to maintain a private counter
2. Implement a promise-based function that simulates an API call
3. Create a class hierarchy with at least two levels of inheritance
4. Write a function that uses destructuring to swap two variables

## Next Steps

After mastering these intermediate concepts, you might want to explore:

- [Advanced JavaScript](/guide/advanced-javascript) (coming soon)
- JavaScript Design Patterns (coming soon)
- JavaScript Testing (coming soon)