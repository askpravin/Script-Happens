# Advanced JavaScript

Welcome to the Advanced JavaScript section. This guide builds upon intermediate JavaScript concepts and introduces more complex topics to further enhance your JavaScript skills.

## Topics Covered

### 1. JavaScript Design Patterns

#### Module Pattern
The module pattern is used to encapsulate and organize code.

```javascript
const calculator = (function() {
  // Private variables
  let result = 0;
  
  // Public interface
  return {
    add: function(x) {
      result += x;
      return this;
    },
    subtract: function(x) {
      result -= x;
      return this;
    },
    getResult: function() {
      return result;
    }
  };
})();

console.log(calculator.add(5).subtract(2).getResult()); // 3
```

#### Singleton Pattern
Ensures a class has only one instance and provides a global point of access to it.

```javascript
const Singleton = (function() {
  let instance;
  
  function createInstance() {
    return { data: "I am the singleton instance" };
  }
  
  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true
```

### 2. Functional Programming

#### Pure Functions
Functions that always return the same result for the same arguments and have no side effects.

```javascript
// Pure function
function add(a, b) {
  return a + b;
}

// Impure function (has side effects)
let total = 0;
function addToTotal(value) {
  total += value;
  return total;
}
```

#### Function Composition
Building complex functions by combining simpler ones.

```javascript
const double = x => x * 2;
const increment = x => x + 1;

// Function composition
const doubleAndIncrement = x => increment(double(x));

// Using a compose utility
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const doubleAndIncrementComposed = compose(increment, double);

console.log(doubleAndIncrementComposed(5)); // 11
```

### 3. Advanced Asynchronous Patterns

#### Async Iterators and Generators

```javascript
async function* fetchPages() {
  let page = 1;
  while (page <= 3) {
    const response = await fetch(`https://api.example.com/data?page=${page}`);
    const data = await response.json();
    yield data;
    page++;
  }
}

(async () => {
  for await (const data of fetchPages()) {
    console.log(data);
  }
})();
```

#### Advanced Promise Patterns

```javascript
// Promise.all - waits for all promises to resolve
const promises = [
  fetch('https://api.example.com/data1').then(res => res.json()),
  fetch('https://api.example.com/data2').then(res => res.json()),
  fetch('https://api.example.com/data3').then(res => res.json())
];

Promise.all(promises)
  .then(results => console.log('All data:', results))
  .catch(error => console.error('Error:', error));

// Promise.race - resolves or rejects as soon as one promise resolves/rejects
const racePromises = [
  new Promise(resolve => setTimeout(() => resolve('First'), 500)),
  new Promise(resolve => setTimeout(() => resolve('Second'), 200))
];

Promise.race(racePromises)
  .then(winner => console.log('Winner:', winner)) // Winner: Second
  .catch(error => console.error('Error:', error));
```

### 4. Performance Optimization

#### Memory Management

```javascript
// Memory leak example
function createNodes() {
  const div = document.createElement('div');
  const bigData = new Array(10000).fill('x');
  
  // Problematic closure that keeps reference to bigData
  div.addEventListener('click', function() {
    console.log('Data size:', bigData.length);
  });
  
  // Better approach: clean up references
  return () => {
    div.removeEventListener('click');
    // Allow bigData to be garbage collected
    bigData = null;
  };
}
```

#### Web Workers
Running JavaScript in background threads.

```javascript
// main.js
const worker = new Worker('worker.js');

worker.postMessage({ data: [1, 2, 3, 4, 5] });

worker.onmessage = function(e) {
  console.log('Result from worker:', e.data);
};

// worker.js
self.onmessage = function(e) {
  const result = e.data.data.map(x => x * x);
  self.postMessage(result);
};
```

## Practice Exercises

1. Implement a complex design pattern like Observer or Decorator
2. Create a library using functional programming principles
3. Build a system that efficiently processes large datasets using web workers
4. Implement advanced state management for a complex application

## Next Steps

After mastering these advanced concepts, you might want to explore:

- [JavaScript Testing](/guide/javascript-testing) (coming soon)
- [JavaScript and TypeScript](/guide/javascript-typescript) (coming soon)
- [JavaScript Performance Optimization](/guide/javascript-performance) (coming soon)