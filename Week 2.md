## Arrow Functions in JavaScript

Arrow functions are a shorthand way to define functions in JavaScript. They provide a cleaner syntax for defining functions with implicit return statements.

### Syntax

Arrow functions can be defined using the following syntax:

```javascript
// Function with no arguments
let functionName = () => {
  // Function body
};

// Function with one argument
let functionName = (argument) => {
  // Function body
};

// Function with multiple arguments
let functionName = (argument1, argument2) => {
  // Function body
};

// Function with implicit return statement
let functionName = () => statement;
```
## Examples

Here are some examples of how arrow functions can be used in JavaScript:

```javascript
// Function with no arguments
let sayHello = () => {
  console.log("Hello!");
};
sayHello(); // Output: "Hello!"

// Function with one argument
let double = (num) => {
  return num * 2;
};
console.log(double(5)); // Output: 10

// Function with multiple arguments
let multiply = (num1, num2) => {
  return num1 * num2;
};
console.log(multiply(2, 3)); // Output: 6

// Function with implicit return statement
let square = (num) => num * num;
console.log(square(4)); // Output: 16

// Function inside an object
const obj = {
  name: "John",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};
obj.greet(); // Output: "Hello, undefined!"

```
Note that the output of the last example is "Hello, undefined!" because the `this` keyword inside an arrow function refers to the global `this` object, which in this case does not have a `name` property.

## Call, Apply, and Bind Methods in JavaScript

**Explanation**

In JavaScript, call, apply, and bind methods are used to set the `this` keyword in a function to a specific object.

`call` and `apply` are used to call a function with a given `this` value and arguments passed as an array (for apply) or as individual arguments (for call). The difference between call and apply is in how the arguments are passed to the function.

`bind` is used to create a new function that, when called, has its `this` keyword set to a specific value, and arguments passed to the original function are preset.

**Example Code**

```javascript
const a = {
    Abhi: "City",
    Akshay: "Bokaro",
    Dev: "Kurukshetra",
    func1: function (a, b) {
      console.log("hello world!!", this.Abhi, a, b);
    },
    func2 : () => {
        console.log("hello world!!", this.Abhi); // global this
    }
};

const b = {
      Abhi: "Chennai",
      Akshay: "JK",
      Dev: "Jharkhand",
      func1: function() {
        console.log("This is object B");
      }
};

// using call
a.func1.call(b, 3, 4);

// using apply
a.func1.apply(b, [10]);

// using bind
let func = a.func1.bind(b, 5);
func(); // logs "hello world!! Chennai 5"

```
In the above example, we have an object a with two functions func1 and func2, and another object b with a function func1.

We use the call method to call func1 of object a with this set to object b and arguments 3 and 4. Similarly, we use the apply method to call func1 of object a with this set to object b and a single argument 10.

Finally, we use the bind method to create a new function func that has its this set to object b and first argument 5. When we call func(), it logs "hello world!! Chennai 5".

call and apply methods are particularly useful when you want to borrow a method from one object and use it on another. In the example code, a.func1.call(b, 3, 4) calls the func1 method of a, but with the this context set to b. This can be helpful in situations where you have similar objects with shared methods but different data.

The bind method returns a new function with the this context and some of the arguments preset. This is useful when you want to create a new function with some of the arguments set beforehand, but you don't want to call the function immediately.

## Difference between script and shell

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
## Immediately invoked function

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





