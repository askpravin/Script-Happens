# JavaScript Conditionals: Making Decisions in Code

Hey there! Today we're going to learn about conditionals in JavaScript. Conditionals are like the decision-makers in your code - they help your programs choose what to do based on different situations.

## What Are Conditionals?

Conditionals are like the "if-then" thinking we do every day. For example: "If it's raining, then I'll bring an umbrella." In JavaScript, we use conditionals to make our code do different things based on different conditions.

## The If Statement

The most basic conditional is the `if` statement. It runs some code only if a condition is true.

```javascript
// Basic if statement
let isRaining = true;

if (isRaining) {
  console.log("Don't forget your umbrella!");
}
// This will show: Don't forget your umbrella! (because isRaining is true)
```

## If-Else Statement

What if you want to do one thing if a condition is true, and something else if it's false? That's where `if-else` comes in!

```javascript
let temperature = 28;

if (temperature > 25) {
  console.log("It's hot outside! Wear shorts.");
} else {
  console.log("It's not that hot. Better wear pants.");
}
// This will show: It's hot outside! Wear shorts. (because temperature > 25)
```

## Multiple Conditions with Else-If

Sometimes you need to check multiple conditions. You can use `else if` for this:

```javascript
let score = 85;

if (score >= 90) {
  console.log("You got an A! Amazing!");
} else if (score >= 80) {
  console.log("You got a B! Great job!");
} else if (score >= 70) {
  console.log("You got a C. Not bad!");
} else {
  console.log("You need to study more for next time.");
}
// This will show: You got a B! Great job! (because score is 85)
```

## Comparison Operators

To create conditions, we use comparison operators. Here are the main ones:

```javascript
// Equal to (==)
if (age == 15) { console.log("You're 15!"); }

// Strictly equal to (===) - checks value AND type
if (age === 15) { console.log("You're exactly 15!"); }

// Not equal to (!=)
if (age != 18) { console.log("You're not 18."); }

// Greater than (>)
if (age > 12) { console.log("You're older than 12."); }

// Less than (<)
if (age < 20) { console.log("You're younger than 20."); }

// Greater than or equal to (>=)
if (age >= 16) { console.log("You're 16 or older."); }

// Less than or equal to (<=)
if (age <= 19) { console.log("You're 19 or younger."); }
```

## Logical Operators

You can combine conditions using logical operators:

```javascript
let age = 15;
let hasPermission = true;

// AND (&&) - both conditions must be true
if (age >= 13 && hasPermission) {
  console.log("You can play this game!");
}

// OR (||) - at least one condition must be true
let isMember = false;
if (age >= 18 || isMember) {
  console.log("You get a discount!");
}

// NOT (!) - reverses a condition
if (!isMember) {
  console.log("You're not a member yet. Sign up now!");
}
```

## Switch Statement - Another Way to Check Conditions

When you have many possible values to check, a `switch` statement can be cleaner than many `if-else` statements:

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week!");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("It's a weekday.");
}
// This will show: Start of the work week! (because day is "Monday")
```

## Let's Build Something Fun!

Let's create a simple game recommendation system:

```javascript
function recommendGame(age, likes) {
  if (age < 13) {
    if (likes === "adventure") {
      return "Try playing Minecraft!";
    } else if (likes === "puzzles") {
      return "You might enjoy Portal Knights!";
    } else {
      return "Check out Roblox for all kinds of games!";
    }
  } else if (age >= 13 && age < 17) {
    if (likes === "action") {
      return "Fortnite might be fun for you!";
    } else if (likes === "sports") {
      return "Try FIFA or NBA 2K!";
    } else {
      return "You might enjoy Rocket League!";
    }
  } else {
    if (likes === "strategy") {
      return "Check out League of Legends!";
    } else if (likes === "adventure") {
      return "The Witcher 3 is an amazing game!";
    } else {
      return "Call of Duty might be right for you!";
    }
  }
}

// Using our recommendation system
console.log(recommendGame(12, "adventure"));  // Shows: Try playing Minecraft!
console.log(recommendGame(15, "sports"));     // Shows: Try FIFA or NBA 2K!
console.log(recommendGame(18, "strategy"));   // Shows: Check out League of Legends!
```

## Challenge: Create Your Own Decision Maker

Try creating a function that recommends what to wear based on the weather temperature and whether it's raining or not!

## What's Next?

Now that you understand conditionals, you can:

- [Learn about Functions in JavaScript](/guide/javascript-functions)
- [Explore JavaScript Arrays and Loops](/guide/javascript-arrays-loops)
- [Build simple web projects](/guide/javascript-web-projects)

Conditionals are super important in programming - they're how your code makes smart decisions!