## Callback Functions

In JavaScript, a callback function is a function that is passed as an argument to another function and is executed inside that function. The purpose of a callback function is to allow asynchronous processing of code, where the execution of the callback function is triggered when a certain event or condition occurs.

For example:

```javascript
function greeting(name, callback) {
  console.log('Hello, ' + name + '!');
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greeting('John', sayGoodbye);
```
In this example, the greeting function takes two arguments: a name and a callback function. The greeting function logs a greeting message to the console and then executes the callback function. We pass the sayGoodbye function as the callback argument, so it gets executed after the greeting message is logged.

## setTimeout

`setTimeout` is a function in JavaScript that is used to delay the execution of a function by a specified amount of time. It is part of the Web API in a browser environment.

When `setTimeout` is called, the JavaScript engine sets a timer for the specified time interval and puts the function call in a queue in the Web API component. Once the timer interval is reached, the function call is moved to the callback queue. The event loop then checks the callback queue and moves the function call to the call stack, where it is executed.

For example:

```javascript
function callback() {
  console.log('Execution after 5 seconds');
}

setTimeout(callback, 5000);
```
In this example, the callback function is executed after a delay of 5 seconds.

## clearTimeout

clearTimeout is a function in JavaScript that is used to cancel a timeout that was set with setTimeout. It takes the ID of the timeout as its argument.

For example:

```javascript
let id = setTimeout(callback, 3000);

clearTimeout(id);
```
In this example, the setTimeout function sets a timeout of 3 seconds for the callback function and assigns an ID to it. The clearTimeout function is then called with the ID as its argument, which cancels the timeout.

## Hoisting and Arrow Functions

Hoisting is a JavaScript mechanism that allows variables and functions to be used before they are declared. However, hoisting only applies to function declarations and not to function expressions or arrow functions.

For example:

```javascript
abc1(); // This works because of hoisting

abc2(); // This does not work because abc2 is not hoisted,abc2 is a variable

function abc1() {
  console.log('Hello from abc1');
}

var abc2 = () => {
  console.log('Hello from abc2');
}
```
In this example, the abc1 function is hoisted and can be called before its declaration. However, the abc2 arrow function is not hoisted because it is a function expression that is assigned to a variable. Therefore, abc2 cannot be called before its initialisation.
