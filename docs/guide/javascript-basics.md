# JavaScript Basics for Beginners

Hey there! Welcome to JavaScript basics. This guide is written just for you - no complicated stuff, just simple explanations that make sense.

## What is JavaScript?

JavaScript is like the magic that makes websites do cool things. When you click a button and something happens, or when a game works in your browser - that's JavaScript in action!

## Getting Started

### Your First JavaScript Program

Let's write your very first line of JavaScript code:

```javascript
console.log("Hello, World!");
```

This line simply displays the message "Hello, World!" in the console (a special window for developers).

### Variables - Storing Information

Variables are like containers that hold information. Think of them as labeled boxes where you can store stuff.

```javascript
// Creating variables
let myName = "Alex";
let myAge = 15;
let likesPizza = true;

// Using variables
console.log("My name is " + myName);
console.log("I am " + myAge + " years old");
```

### Making Decisions with If/Else

Your code can make decisions based on conditions, just like you do in real life!

```javascript
let temperature = 30;

if (temperature > 25) {
  console.log("It's hot outside! Wear shorts.");
} else {
  console.log("It's not that hot. Better wear pants.");
}
```

## Fun with Functions

Functions are like mini-programs that do specific jobs. They're super useful!

```javascript
// Creating a function
function sayHello(name) {
  return "Hey there, " + name + "!";
}

// Using the function
let greeting = sayHello("Sam");
console.log(greeting); // Shows: Hey there, Sam!
```

## Make a Simple Game

Let's create a super simple guessing game:

```javascript
function guessTheNumber() {
  // Create a random number between 1 and 10
  let secretNumber = Math.floor(Math.random() * 10) + 1;
  
  // Get the player's guess
  let playerGuess = prompt("Guess a number between 1 and 10");
  
  // Convert the guess to a number
  playerGuess = Number(playerGuess);
  
  // Check if they got it right
  if (playerGuess === secretNumber) {
    return "You got it! The number was " + secretNumber;
  } else {
    return "Sorry! The number was " + secretNumber;
  }
}

// Play the game
console.log(guessTheNumber());
```

## What's Next?

Now that you know the basics, you can:

- [Learn about Arrays and Loops](/guide/javascript-arrays-loops)
- [Discover how to build cool web projects](/guide/javascript-web-projects)
- [Explore more advanced JavaScript](/guide/intermediate-javascript)

Remember, the best way to learn is by doing! Try changing the code examples and see what happens.