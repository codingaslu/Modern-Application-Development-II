## Prototype in JavaScript

Prototype is a fundamental concept in JavaScript, which allows objects to inherit properties and methods from other objects. There are different ways to use the prototype in JavaScript. Here are some examples of using the prototype with classes and functions:

**Prototype with class:**
In the below code, we define a class 'abcd' and add a new method 'func' to its prototype. We then create an object 'n' of this class and call the 'func' method. This will print 'hello' to the console.

```javascript
class abcd {
}

abcd.prototype.func = function(){
    console.log("hello")
}

var n = new abcd()
n.func()
```

**Prototype with function:**
In the below code, we define a function 'abc' that takes an argument 'x' and assigns it to the property 'x' of the object created using the 'new' keyword. We then add a new method 'func' to the prototype of 'abc'. We create two objects 's' and 'd' using the 'abc' function and call their 'func' methods. Since 'func' is not defined at the time of creating the 's' object, we get 'undefined'. We then add the 'func' method to the prototype of 'abc', and now both 'd' and 'e' objects can call this method.

```javascript
// Prototype with function:

function Abc(x){
    this.x = x;
}

console.log(Abc.prototype);

var s = new Abc(20);

s.func = function(){
    console.log("new value:",this.x*20);
};

s.func(); // "new value: 400"

var d = new Abc(30);
d.func(); // TypeError: d.func is not a function

Abc.prototype.func = function(){
    console.log("new value:",this.x*20);
};

var d = new Abc(30);
d.func(); // "new value: 600"

var e = new Abc(30);
e.func(); // "new value: 600"

```
we define a constructor function Abc and then add a method func to its prototype with Abc.prototype.func = function() {...}. This method is then available to all objects created from the Abc constructor function.
For example, when we create an object d using var d = new Abc(30); and call its func method with d.func();, JavaScript looks for the func method on the d object first. When it doesn't find it there, it looks for it on the Abc.prototype object and finds it there. It then calls the func method from the Abc.prototype object and passes in the d object as the this keyword.

**Another way** to add a new method to the prototype of an object is by directly accessing its 'proto' property. In the below code, we create an object 's' using the 'abc' function and add a new 'func' method to its 'proto' property. We then call the 'func' method on the 's' object.

```javascript
var s = new abc(20);
s.__proto__.func = function(){
    console.log("new value:",this.x*20)
}

s.func()
```
Note that 'proto' is deprecated and should not be used in production code. Instead, we can use the 'Object.getPrototypeOf()' method to get the prototype of an object.

```javascript
s.__proto__ == abc.prototype // true
