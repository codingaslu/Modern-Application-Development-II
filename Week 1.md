## Variables

Variables in JavaScript are declared using the keywords `var`, `let`, and `const`.

`const` creates a read-only reference to a value and cannot be reassigned, while `var` and `let` can be reassigned.

Variables declared with `var` have function-level scope, while those declared with `let` and `const` have block-level scope.

**Example:**

```javascript
const a = 10;
a = 20; // Error: Assignment to constant variable.
let b = 30;
{
  var c = 40;
}
console.log(a, b, c); // 10, 30, 40
 ``` 
## Hosting

Variables declared with `var` are hoisted to the top of their scope and initialized with a value of `undefined`.

Variables declared with `let` and `const` are also hoisted, but they are not initialized and cause a temporary "dead zone" until they are assigned a value.

**Example:**

```javascript
console.log(a); // undefined
var a = 10;
console.log(b); // ReferenceError: b is not defined
let b = 20;
const c = 30;
```
## Functions

Functions in JavaScript can be defined using function expressions or function statements.

Function expressions define a function as a value and can be stored in variables or passed as arguments to other functions.

Function statements define a function with a name and can be called anywhere in the scope.

Named function expressions have a name and can refer to themselves, while anonymous functions do not have a name.

**Example:**

```javascript
// Define a function expression called "add"
const add = function(x, y) {
  return x + y; // Return the sum of the two arguments
};

// Define a function statement called "multiply"
function multiply(x, y) {
  return x * y; // Return the product of the two arguments
}

// Define a named function expression called "divide"
const divide = function divide(x, y) {
  if (y === 0) { // Check if the second argument is equal to zero
    return "Cannot divide by zero"; // Return an error message if it is
  }
  return x / y; // Otherwise, return the result of dividing the first argument by the second
};

```
## Objects

Objects in JavaScript are collections of key-value pairs, where the keys are strings and the values can be any data type, including functions.

Object properties can be accessed using dot notation or bracket notation.

**Example:**

```javascript
const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
  sayHello: function() {
    console.log("Hello, my name is " + this.name);
  }
}

console.log(person.name); // John
person.sayHello(); // Hello, my name is John
```

Explanation:
In programming, scripts and shells are two different concepts. Scripts refer to a series of instructions that are executed in a specific order. Shell, on the other hand, is a command-line interface that allows users to interact with the system by entering commands.

When it comes to global objects, any variable created using var, let, or const keywords outside any function definition inside the browser console environment or in the node interactive environment will automatically be added as a property to the global object.

However, when executing a program as a script, this in the global scope will not refer to the global object. Instead, it refers to some internal or empty object created by the environment implicitly. To refer to the global object, you must use global this.

when you don't provide any explicit value to call apply or bind, the by default value that will be taken into consideration is the global object.


Example:

```javascript
// Script-based code
const obj = {};
const d = (function() {
  console.log(this); // Script-based code
}).call(obj); 

// Global object
var x = 10;
console.log(this.x); // Output: 10

// Behavior changes in arrow functions based on context
const func = () => {
  console.log(this);
};
func(); // Output: Empty object

// Default value for call, apply, or bind
function test() {
  console.log(this);
}
test.call(); // Output: Global object
```
Immediately invoked function

Explanation:
An immediately invoked function is a function that is invoked immediately after it is defined. It is usually wrapped in parentheses and followed by a pair of parentheses to indicate that it should be executed immediately.

Example:

javascript
Copy code
// Immediately invoked function
(function() {
  console.log("Hello");
})();
```
