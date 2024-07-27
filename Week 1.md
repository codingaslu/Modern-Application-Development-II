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
## Data Types

JavaScript supports various data types, including:

1. **Numbers**: Represent numeric values.

```javascript
const age = 30;
const price = 19.99;
```

2. **Booleans**: Represent `true` or `false`.

```javascript
const isDeveloper = true;
const isAvailable = false;
```

3. **Strings**: Represent sequences of characters.

```javascript
const name = "John";
const greeting = "Hello, world!";
```

4. **Objects**: Collections of key-value pairs.

```javascript
const person = {
  name: "John",
  age: 30,
  occupation: "Developer"
};
```

## Primitive vs. Reference Types

* **Primitives**: Stored directly in memory. They include numbers, booleans, strings, `null`, `undefined`, and `symbol`.

```javascript
let x = 10; // Number
let y = "hello"; // String
let z = true; // Boolean
```

* **Objects**: Stored as references in memory. When you create an object, the variable holds a reference (or a pointer) to the location in memory where the object is stored.

```javascript
const person = { name: "John" };
const anotherPerson = person; // anotherPerson holds a reference to the same object
anotherPerson.name = "Jane";
console.log(person.name); // Jane (both person and anotherPerson reference the same object)
```
