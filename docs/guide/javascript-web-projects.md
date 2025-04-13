# Simple JavaScript Web Projects

Hey there! Ready to build some cool stuff with JavaScript? In this guide, we'll learn how to create simple web projects that you can show off to your friends and family. Let's turn your JavaScript knowledge into something awesome!

## Your First Interactive Web Page

Let's start with something simple - a page that responds when you click a button.

### The HTML Structure

First, we need some basic HTML to create our page structure:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Interactive Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <h1>Welcome to My Interactive Page</h1>
  <p>Click the button below to see what happens!</p>
  
  <button id="colorButton">Change Color</button>
  
  <p id="message"></p>
  
  <script src="script.js"></script>
</body>
</html>
```

### The JavaScript Magic

Now, let's create a file called `script.js` with this code:

```javascript
// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Get references to our HTML elements
  const colorButton = document.getElementById('colorButton');
  const message = document.getElementById('message');
  
  // Create an array of colors
  const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];
  
  // Add a click event listener to the button
  colorButton.addEventListener('click', function() {
    // Pick a random color from our array
    const randomIndex = Math.floor(Math.random() * colors.length);
    const newColor = colors[randomIndex];
    
    // Change the background color
    document.body.style.backgroundColor = newColor;
    
    // Update the message
    message.textContent = `Background changed to ${newColor}!`;
    message.style.color = newColor === 'red' ? 'white' : 'black';
  });
});
```

## Building a Simple To-Do List App

Now let's create something more useful - a to-do list app!

### The HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
  <title>My To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      text-align: center;
      color: #2c3e50;
    }
    .todo-container {
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .todo-header {
      display: flex;
      margin-bottom: 20px;
    }
    #todoInput {
      flex: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px 0 0 4px;
    }
    #addButton {
      padding: 10px 15px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 0 4px 4px 0;
      cursor: pointer;
    }
    #addButton:hover {
      background-color: #2980b9;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 10px 15px;
      background-color: white;
      border-left: 3px solid #3498db;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .delete-btn {
      background-color: #e74c3c;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 3px;
      cursor: pointer;
    }
    .completed {
      text-decoration: line-through;
      opacity: 0.6;
    }
  </style>
</head>
<body>
  <h1>My To-Do List</h1>
  
  <div class="todo-container">
    <div class="todo-header">
      <input type="text" id="todoInput" placeholder="Add a new task...">
      <button id="addButton">Add</button>
    </div>
    
    <ul id="todoList">
      <!-- Tasks will be added here by JavaScript -->
    </ul>
  </div>
  
  <script src="todo.js"></script>
</body>
</html>
```

### The JavaScript Code (todo.js)

```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Get references to our HTML elements
  const todoInput = document.getElementById('todoInput');
  const addButton = document.getElementById('addButton');
  const todoList = document.getElementById('todoList');
  
  // Function to add a new task
  function addTask() {
    // Get the task text
    const taskText = todoInput.value.trim();
    
    // Don't add empty tasks
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }
    
    // Create a new list item
    const li = document.createElement('li');
    
    // Create a span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    
    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    
    // Add the elements to the list item
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    
    // Add the list item to the todo list
    todoList.appendChild(li);
    
    // Clear the input field
    todoInput.value = '';
    
    // Focus back on the input field
    todoInput.focus();
    
    // Add click event to mark task as completed
    taskSpan.addEventListener('click', function() {
      taskSpan.classList.toggle('completed');
    });
    
    // Add click event to delete button
    deleteBtn.addEventListener('click', function() {
      li.remove();
    });
  }
  
  // Add task when the Add button is clicked
  addButton.addEventListener('click', addTask);
  
  // Add task when Enter key is pressed
  todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});
```

## Challenge: Enhance Your Projects

Now that you've built these basic projects, try adding some enhancements:

1. For the color changer:
   - Add a button to reset the background color
   - Display the color name in a larger font
   - Add a counter that shows how many times the color has been changed

2. For the to-do list:
   - Add the ability to save tasks in the browser's local storage
   - Add a feature to mark all tasks as completed
   - Add categories or priorities to tasks

## What's Next?

Now that you've built some simple web projects, you can:

- [Learn more about JavaScript Functions](/guide/javascript-functions)
- [Explore JavaScript Conditionals](/guide/javascript-conditionals)
- [Dive deeper into Arrays and Loops](/guide/javascript-arrays-loops)
- [Explore Intermediate JavaScript](/guide/intermediate-javascript)

Remember, the best way to learn is by building things! Keep experimenting and adding new features to your projects.