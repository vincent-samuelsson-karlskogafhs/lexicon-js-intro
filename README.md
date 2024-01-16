# Handling input for user and If-statements

<details>
<summary>Table of contents</summary>

- [Simple handling of input from user](#simple-handling-of-input-from-user)

  - [Alert](#alert)
  - [Prompt](#prompt)
  - [Confirm](#confirm)
  - [Good to know](#good-to-know-about-these-methods)

- [If statements](#if-statements)
  - [Comparison Operators](#comparison-operators)
  - [Else](#else)
  - [Else-if](#else-if)
  - [Logical Operators](#logical-operators)
  - [Truthy & Falsey](#truthy-and-falsey-values)
  </details>

## Simple handling of input from user

### Alert

An alert is a simple dialog (modal) that displays a message to the user. It is often used to provide information or to get the user's attention. Alert pauses the executing of the current javascript file, which means we need to dismiss it before the program continues.

```js
alert("This is an alert message! Dismiss me before the program continues.");

console.log("Alert is dismissed");
```

[Back to top](#handling-input-for-user-and-if-statements)

### Prompt

The prompt dialog (modal) allows you to ask the user for input by dsiplaying a message and an included input field. It returns the text entered by the user as a string. Prompts are also blocking which means the script is paused until the prompt is completed.

```js
// Prompt the user for the name. The answer that is returnd can be saved in a variable

const nameOfUser = prompt("Please enter your name:");

// Let's display the answer with an alert, with the help of sting concatenation.
alert("Thank you " + nameOfUser + "!");
```

You can also use string literals inside the alert for smoother string creations.

But what happens if we don't give the prompt an answer?

```js
const nameOfUser = prompt("Please enter your name:");

// Let's say we cancel the prompt before writing an answer, what happens then?

console.log(nameOfUser); // null
```

The prompt always returns a value to us, either a string if we actually types something or presses ok without typing anything or null if we cancel the prompt.

FYI, everything you type as a response in a prompt will be converted to a string before it's returned.

[Back to top](#handling-input-for-user-and-if-statements)

### Confirm

A confirm dialog is used to ask the user for confirmatin. Usually a question or something that can be answered with yes and no. The confirm uses the options `Ok` and `Cancel` in order represent these answers. It returns a boolean, `true` if the user press `Ok` or `false` if the user press `Cancel`. Like the other methods it pauses the script until it's completed.

```js
// Ask if user is older than 20 years old
const isOver20 = confirm("Are you over the age of 20?");

// Alert the answer.
alert(`Were you older then 20? ${isOver20}`);
```

[Back to top](#handling-input-for-user-and-if-statements)

### Good to know about these methods.

These methods are not hovering on their own in JavaScript, they are actually connected to something. And this something is the `BOM`. BOM stands for **Browser Object Model**. It is an object the represents the Browser and its functionality and it is utilized with the windows keyword. Like this:

```js
alert("Some string");

// is really like this:

window.alert("...some string");

// Same with the others:

window.promt("...some prompt");
window.confirm("...some confirmation text");
```

[Back to top](#handling-input-for-user-and-if-statements)

## If-statements

A statment is a lone of code that performs a certain action or task. It's like giving a command to a computer to do something specific.

#### Declaring a variable

```js
let greeting;
```

Here we tell the computer to declare a variable with the name `greeting`. It's simply a container where you can store some data.

##### Assigning a value to the variable

```js
greeting = "Hello there!";
```

Now we ask the computer to assign a specific value to that variable. We are putting actual data inside the container.

##### Displaying the result

```js
console.log(greeting);
```

Lastly we instruct the computer to display this greeting in the console of the browser. When you run this code, you'll see `Hello there!` in the console. This is a proper statement!

[Back to top](#handling-input-for-user-and-if-statements)

### Back to if-statements

Here is the basic syntax of an if-statement.

```js
if (condition) {
  // ... do something
}
```

What is a condition then? A condition is something that the computer can evaluate, but the caveat here is that it's only allowed to evaluate something to either `true` or `false`. How do we do this? We need some other tools. Say hi to `comparison operators`.

#### Comparison Operators

This operators are used by the computer to compare two or more values with eachother.

##### `==` -> _equal to (with coercion)_

Comparison between to operands, but JavaScript may try to convert one or both operands in order to make the comparison possible.

```js
const numbersAreEqual = 5 == 5; // true, and it will be assign to the variable.

const numbersAreEqualAgain = 5 == "5"; // true, it's because JS converts the "5" to a number in order to make the comparison work.

const isEqual = 5 == 7; // false. This is obvious of course.
```

##### `===` -> _equal to (strict)_

Comparison between two operands, but this time it's strict. Both need to be of the same data type, otherwise it will automatically be `false`. Value AND type must be the same.

```js
const numbersAreEqual = 5 === "5"; // false, since the data types are different.

const x = 10;
const y = 7;

const areTheyEqual = x === y; // false, the values or not equal but the data types are.
```

##### `!=` -> _Not equal (with coercion)_

Basically the opposite of _equal to_ but it's when we want to check if some operands are not equal.

##### `!==` -> _Not equal (strict)_

```js
const name = "Niklas";
const lastName = "Fahnrich";

const isNotEqual = name !== lastName; // true.
```

##### `>`, `<` -> _Greater than, Less than_

Sometimes we want to compare if variables (typically numbers) are greate than or less than each other. Age restriction is a good example, password lenght is another.

```js
let myAge = 18;
const ageLimit = 20;

let isOldEnough = myAge > ageLimit; // false
isOldEnough = 16 < ageLimit; // true
```

##### `>=` , `<=` -> _Greater than or equal, less than or equal_

Works the same as above but we can check for equality as well.

### Back to if-statements (again)

Now we now about the comparison operators that we can use, now we can actually write a proper if-statment.

Systembolaget example;

```js
alert("Welcome to the digital Ssytembolaget!");

// Set age restriction
const ageRestriction = 20;

// Ask for the age of the customer
const age = prompt("How old are you?");

const ageAsNumber = window.parseInt(age);

if (ageAsNumber >= ageRestriction) {
  // In here is the code that runs if the condition is true
  alert("Very good, you are most welcome to browse our wares.");
}
```

If-statements works by checking a certain condition if it should run the code inside the codeblock or not. Remember that it **ONLY** runs the code if the condition is true. Otherwise the code block will be completely ignored.

[Back to top](#handling-input-for-user-and-if-statements)

### Else

Else is nothing that can be used on its own, it must alwaus be used in conjunction with an if-statment. But it gives you the opportunity to something else the first condition is false.

```js
if (condition) {
  // if the condition is true, we end up in here.
  // ...code to run
} else {
  // We end up here if the condition is false, it's like a fallback statement
  // ...do something else
}
```

Let's take the previous example and extend it with an else statement.

```js
alert("Welcome to the digital Sytembolaget!");

// Set age restriction
const ageRestriction = 20;

// Ask for the age of the customer
const age = prompt("How old are you?");

const ageAsNumber = window.parseInt(age);

if (ageAsNumber >= ageRestriction) {
  // In here is the code that runs if the condition is true
  alert("Very good, you are most welcome to browse our wares.");
} else {
  alert("I am sorry, you shall not pass!");
}
```

[Back to top](#handling-input-for-user-and-if-statements)

### Else-if

Else-if is another member of the if-statement family. It's quite similar to en else but with the added functionality that it can check some other condition for us if the first condition was false. It give more opportunites to steer our program in different directions depending on the outcome.

```js
if (condition) {
  // ...code to run
} else if (anotherCondition) {
  // ...code to run
} else if (thirdCondition) {
  // ...code to run
} else {
  // ...code to run if all conditions fails
}
```

Remember, that **only one** of these codeblocks can ever run. If one condition is evaluated to true, all of the rest will be ignored.

Let's do a good example of this with colors.

```js
const age = prompt("How old are you?");

const ageAsNumber = parseInt(age);

if (age >= 80) {
  alert("You are blue");
} else if (age >= 50) {
  alert("You are red");
} else if (age >= 30) {
  alert("You are yellow");
} else if (age >= 10) {
  alert("You are green");
} else if (age >= 0) {
  alert("You are brown");
} else {
  alert("You don't exists, you deserve no color");
}
```

This is a good example if we want to check multiple conditions one by one, but what if we want to check serveral conditions at the same time? Then we have logical operators.

[Back to top](#handling-input-for-user-and-if-statements)

### Logical Operators

#### `&&` = `AND`

Both conditions that we check must be true, in order for the entire if statmenet to be evaluated to `true`.

```js
const hasCertificate = true;
let isAvailable = true;

if (hasCertificate && isAvailable) {
  console.log("Nice! We will hire you!"); // This will run since both are true.
} else {
  console.log("To bad, but what if we give you 100k?");
}

isAvailable = false;

if (hasCertificate && isAvailable) {
  console.log("Nice! We will hire you!");
} else {
  console.log("To bad, but what if we give you 100k?"); // This will run since one of them are false.
}
```

In this case we just looked at two conditions, but what if we have more of them?

```js
const hasCertificate = true;
let isAvailable = true;
let hasFSkatt = false;
let isOldEnough = false;

if (hasCertificate && isAvailable && hasFSkatt) {
  // ...code to run if all of them are true
}
```

What if we have parentheses around a couple of them? They will be seen as one entity, and will be evaluated as such.

```js
if (hasCertificate && isAvailable && hasFSkatt && isOldEnough) {
  // ...code to run if all of them are true
}
```

#### `||` = `OR`

When we are using this operator, only one of the conditions must be true, in order for the total condition to be evaluated to true. It doesn't matter which one obviously.

```js
const dollar = "dollar";
const euro = "euro";
let customerCurrency = dollar;

console.log("We accept both dollars and euros");

if (customerCurrency === dollar || customerCurrency === euro) {
  console.log("Nice! Those bills looks delicious!");

  // This will run since cusomterCurrency was either dollar or euro.
}

customerCurrency = "drachme";

if (customerCurrency === dollar || customerCurrency === euro) {
  console.log("Nice! Those bills looks delicious!");
} else {
  console.log(
    "Oh, sorry. Are you from Ancient Greece? Drachme doesn't even exists anymore!"
  );

  // This will run since drachme is not accepted.
}
```

We can also combine `&&` and `||` in our if statements. In those ases we usually need parentheses.

```js
const hasCertificate = true;
let isAvailable = true;
let hasFSkatt = false;
let isOldEnough = false;

if (hasCertificate && (isAvailable || hasFSkatt)) {
  // ...code to run if "hasCertificate" is true AND either "isAvailable" or "hasFSkatt".
}
```

If you have a very complex condition, don't write it in directly in the if statement, create a boolean with a good name instead that contains these conditions.

```js
if (hasCertificate || (isAvailable && hasFSkatt) || isOldEnough) {
  // ...code to run
}
```

The above can be quite complicated to read, create a variable instead.

```js
const goodWorker = hasCertificate || (isAvailable && hasFSkatt) || isOldEnough;

if (goodWorker) {
  // This is easier to read, and hopefully the nameing of the variable explains what it contains in some way.
}
```

In order to make the code more readable you could also nest your if statements.

#### `!` = `NOT (negation)`

This one can be little tricky because it is similar to the comparison operator `!=`. But to explain it in an easy way, when we are using this with a condition, we are inverting that said condition. So if something i `true`, this operator will make it `false` and vice versa. We can use this specifically when we are looking for a conditions that is suppose to be false.

```js
const somethingTrue = true;
const somethingFalse = false;

if (!somethingTrue) {
  // This codeblock wil in fact NOT run since the NOT operator inverts the value of "somethingTrue", therefor the condition is evaluated to false.
}

if (!somethingFalse) {
  // This codeblock will run however. The NOT operator is inverting the "somethingFalse" and makes it true. The conditon passed and this codeblock runs.
}
```

[Back to top](#handling-input-for-user-and-if-statements)

### Truthy and Falsey values

A value is considered `truthy` if it coerces to `true` when evaluated in a boolean context, like an if check for instance.

- `Non-empty strings`: Any string with at least one character is truthy

- `Numbers (except 0)`: Any number excepts 0 is truthy.

- `Objects`: All objects are truthy, even empty ones.

- `Arrays`: All arrays are truthy, even empty ones.

- `Function`: Defined functions are truhty.

```js
// TS syntax, just go with it. This means that user can have to types of value, IUser or null.
let user: IUser | undefined;

if (user) {
  // ...do something with the user if the user is considerd truthy, or in this case of the type IUser.
}

if ("Niklas") {
  // ...This codeblock will run since any string with atleast one character is consederd truthy.
}

if (155) {
  // ..also truthy, since all numbers except 0 is truthy.
}
```

### Falsey

A value is considered `falsey` if it coerces to `false` when evaluated in a boolean context, like an if check for instance.

- `Empty string`: An empty string (""), or (''), or (``) is falsey.

- `The number 0`: The number 0 is falsey.

- `null`: The `null` value is falsey.

- `undefined`: The `undefined is also falsy.

- `NaN`: Not-a-number is also falsy.

```js
if ("") {
  // Will not run since it's falsy.
}

let user;

if (user) {
  // Is falsy since we haven't assigned a value to the user variable.
}
```

[Back to top](#handling-input-for-user-and-if-statements)

<!-- JavaScript Functions -->

# JavaScript Functions

<details>
<summary>Table of contents</summary>

- [Functions](#functions)
  - [Hoisting](#hoisting)
  - [This-scope](#this-scope)
- [Anonymous functions](#anonymous-functions)
- [Functions with arguments](#functions-with-arguments)
- [Functions with return value](#functions-with-return-value)
- [Functions with both arguments and a return value](#functions-with-both-arguments-and-a-return-value)
- [Arrow functions](#arrow-functions)
- [Callback functions](#callback-functions)

</details>

### Functions

Functions are powerful and versatile tools that play a crucial role in structuring code and promoting reusability. They containt a set of instructions allowing for a more modular approach to programming.

A basic syntax looks like this:

```js
function greeting() {
  // ...inside the code block is the code that belongs to the function.

  console.log("Hello there!");
}
```

We need the keyword `function`, a function name, parentheses _(which we will use later)_ and a code block with the code.

The example above just creates the function and saves it. It doesn't actually runs it. We need to invoke _(call)_ if before it runs.

To run a function we invoke we referencing its name along with parentheses.

```js
// This is an invocation.
greeting();
```

[Back to top](#javascript-functions)

#### Hoisting

JavaScript hoists functions _(like the one example above)_ to the top of the scope during the compiliation phase. This behaviour anables us to use the functions before they are explicitly declared. Use this with catuion as it may lead to unexpected results if not understood properly. Not all functions are hoisted to the top. Only the ones that are created like the one above, like this:

```js
// These functions will be hoisted.
function functionName() {
  // ...code
}
```

Proper useage of hoisting can lead to cleaner and more readable code.

#### This-scope

The `this` keyword in JavaScript refers to the current execution context. Understanding how `this` behaves in different scenarios is crucial for writing maintainable and resuable code. In functions, `this` can vary based on how the functions is invoked, prodviding a powerful mechanism for dynamic context binding.

```js
function showThis() {
  console.log(this);
}
```

- `this` in a regular function refers to the global object (e.g, `window` in a browser) or `undefined` in strict mode.

- In a object method, `this` refers to the object it self that the method was called on.
- Arrow functions do not have their own `this` context. They always inherit it from the surrounding scope.

[Back to top](#javascript-functions)

### Anonymous functions

Anonymous functions, without a specified name, offer a concise way to define functions on-the-fly. They are particularly useful for short, one-time use cases and can be passed directly as arguments to other functions.

This is the syntac for a anonymous function:

```js
const greeting = function () {
  console.log("Hello, how are you doing?");
};
```

These kind of functions won't be hoisted like regular functions.

- Anonymous function are often used in scenarios where a functions is needed temporarily and might not be reused.

- They can contribute to code readability.

[Back to top](#javascript-functions)

### Functions with arguments

Functions can accept parameters, also knows as arguments. These arguments enable the passing of data into a function, making it adaptable to various use cases. Functions with arguments enhance code flexibility and make them suitable for a wide range of inputs.

Arguments are passed inside the parentheses.

```js
function greet(name) {
  console.log(`Hello ${name}, who are you?`);
}
```

You can also have multiple arguments that you pass to a function.

```js
function greetAgain(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}, I know you!`);
}
```

These arguments are dynamic, we can pass anything to the function. Doesn't have to be a string since we haven't specified any data type. If we don't pass in a value to any of the arguments the "value" will be undefined, so it won't break but it won't be the behaviour we want.

If we have a use case where we know that we might not pass in a value, we can always utilize something called default value. It looks like this:

```js
function greet(name = "Anon") {
  console.log(`Hello ${name}!`);
}
```

This is also applicable on several arguments but the default values must come last in those cases.

```js
function greetAgain(firstName, lastName = "Svensson") {
  console.log(`Hello ${firstName} ${lastName}, I know you!`);
}
```

If we have default values that comse before the dynamic value, the order will be wrong since it is assigns from left to right.

- Arguments provide a way to pass data into a function, allowing for cusomization and reuse

- Functions can have multiple agruments, making them versatile and adaptable to different use cases.

[Back to top](#javascript-functions)

### Functions with return value

Functions can return values to us by using a keyword `return`. The ability to return a value makes a function not only perfrom tasks but also produce meningful results, further enhancing their resuability in different parts of the program.

```js
function multiply(x, y) {
  const product = x * y;
  return product;

  // This code below will not run since the return ends the function
  console.log("Hello");
}

const product = multiply(2, 4);

console.log(`The product is ${product}`); // Output: The product is 8;
```

- The `return` statement concludes the function's execution and specifies the value to be returned.

[Back to top](#javascript-functions)

### Functions with both arguments and a return value

Functions can have both arguments and a return value. Remember, that although we can have multiple arguments, there can only be **ONE** return value.

[Back to top](#javascript-functions)

### Arrow functions

Another mor concise syntax for writing functdions. Introduced with ES6. Arrow functions are always anonymous and can live on their own.

```js
const add = (a, b) => {
  // Gives us more code space.
  return a + b;
};

const sum = add(5, 6);
console.log(sum); // 11
```

Above is the normal way to create an arrow function. In some case we can write it even shorter. We could ignore the codeblock and the return keyword if we just want to return some value quickly without doing some extra code.

```js
const add = (a, b) => a + b;

const sum = add(5, 6);
console.log(sum); // 11
```

This shortend syntax is only usable for one-liners.

- Arrow functions do not have their own `this` context, they always inherit it from the surrounding scope.

- They are often used for short, simple functions and in the context of functional programming.

[Back to top](#javascript-functions)

### Callback functions

Callback functions are functions that are passed as arguments to other functions, allowing for the execution of code at a later time. They are commonly used in asynchronous operations, providing a way to handle results or errors once an operation completes.

```js
// With regular function syntax
function fetchData(callback) {
  setTimeout(function () {
    const data = "Hello from callback";
    callback(data);
  }, 1000);
}

// With arrow function syntax in the setTimeout function
function fetchData(callback) {
  setTimeout(() => {
    const data = "Hello from callback";
    callback(data);
  }, 1000);
}

// with arrow function syntax in both places
const fetchData = (callback) => {
  setTimeout(() => {
    const data = "Hello from callback";
    callback(data);
  }, 1000);
};

function handleData(data) {
  console.log(data);
}

fetchData(handleData);
```

`setTimeout` is a built-in function that executes some code after a given amount of time, in milliseconds. It takes a callback function as an argument that contains the code to be run after the given time.

- Callback functions enhance the flexibility and modularity of code, especially in scenarios involving asynchronous operations.

- As soon as a function is used as an argument in another function, it becomes a callback function.

[Back to top](#javascript-functions)

<!-- JavaScript Arrays and Loops -->

# JavaScript Arrays and Loops

<details>
<summary>Table of Content</summary>

- [Arrays](#arrays)

  - [Create Arrays](#create-arrays)
    - [Array Literal](#array-literal)
    - [Keyword new](#with-the-keyword-new)
  - [Accessing elements](#accessing-elements)
  - [Changing values of elements](#changing-values-of-elements)
  - [Adding Elements](#adding-elements)
  - [Removing Elements](#removing-elements)
  - [Multidimensional Arrays](#multidimensional-arrays)

- [Loops](#loops)

  - [For Loop](#for-loop)
  - [For..of Loop (foreach)](#forof-loop-foreach)
  - [While Loop](#while-loop)
  - [Do..While Loop](#dowhile-loop)
  - [For..in Loop (Objects)](#forin-loop-objects)

- [Array Methods](#array-methods)

</details>

## Arrays

Arrays are data structures used to store and organize multiple values. They are a fundamental part of any programming language and are widely used for various tasks.

An array looks like this in JS

```js
// Array with numbers
[1, 2, 3, 7, 10, 57, 4];

// Array with strings
["Niklas", "Henrik", "Erik", "Sofia"];

// Array with booleans
[true, true, false, true, false];
```

Usually we only have one data type in an array, but JS allows you to mix them as well if you find a use case for that.

```js
// Array with multiple data types
[true, 10, "Niklas", "Erik", [1, 2, 3], {}];
```

You can also get the length of the array like this:

```js
const numbers = [1, 2, 3, 7, 10, 57, 4];

const length = numbers.length;

console.log(length); // 7
```

This is called an attribute on arrays, since it's not a method. It returns the lenght of the array, which means the total numbers of elements.

[Back to top](#javascript-arrays-and-loops)

### Create Arrays

When naming an array, always use plural names. Also we usually use the variable keyword `const` when creating arrays, and that has to do with the fact that arrays are passed by reference and not value.

#### Array Literal

This is the most common way to create an array. Just declare a variable and give it a value as an array.

```js
const ages = [18, 34, 67, 7, 2];
const names = ["Henrik", "Niklas", "Erik", "Sofia"];
```

#### With the Keyword new

We can also create an array with the keyword `new`. It rarely happens though.

```js
const names = new Array("Henrik", "Niklas", "Erik", "Sofia");
```

[Back to top](#javascript-arrays-and-loops)

### Accessing elements

In order to acces an element inside an array you do that by requesting the index postition of the given element. What is an index? Every element in an array are always given an index position, and this position specifies where in the array you can find the element. The index position starts and **position 0**, and counts upwards from there. Forst element has index position 0, second element index position 1, and so on till the end of the array.

To acces an element you use square brackets in combination with the index position.

```js
const ages = [18, 34, 67, 7, 2];
// index  =  [0 , 1 , 2 , 3, 4]

console.log(ages[2]); // 67
console.log(ages[4]); // 2
```

There is also another way to acces elements in an array, by using the _at()_ method. This is an array method, which means all arrays has access to it. Read more here: [Array Methos](#array-methods)

```js
console.log(ages.at(2)); // 67
console.log(ages.at(0)); // 18
```

The differences between these ways of accesing elements is that _at()_ method accepts negative values as well. And if you give a negative value it will count backwords from the end instead.

```js
const ages = [18, 34, 67, 7, 2];

ages.at(-1); // 2
ages.at(-3); // 67
```

[Back to top](#javascript-arrays-and-loops)

### Changing values of elements

We can use square brackets here as well, and we use it in combination with an assignment operator `=`.

```js
const names = ["Henrik", "Niklas", "Erik", "Sofia"];

consol.log(names[1]); // Niklas
names[1] = "Peter";
console.log(names[1]); // Peter
console.log(names); // ["Henrik", "Peter", "Erik", "Sofia"]
```

You could also use an array method called _with()_. This method takes two arguments, the first is the index of the element we want to change, and the other is the value which we want to replace with. It also returns a new array with the changes made.

This is the syntax:
`array.with(index, value) => array`

```js
let names = ["Henrik", "Niklas", "Erik", "Sofia"];

const updatedNames = names.with(0, "Anette");
names = names.with(0, "Anette"); // Works as well, since we here update the reference of the array, but we need let keyword in that case.

console.log(updatedNames[0]); // Anette
console.log(updatedNames); // ["Anette", "Niklas", "Erik", "Sofia"]
```

With the _with()_ method, you can alse use negative indexes, it will then just count backwards for the end of the array.

[Back to top](#javascript-arrays-and-loops)

### Adding Elements

To add elements to your array, you usually use one of two methods. These methods are called `push()` and `unshift()`. These are array methos which means every array has access to them.

`push()` works by adding an element to the end of the array. It takes in one or several arguments, and these are all added to end in the way they are ordered. It also returns the new length of the array.

`array.push(element1, element2... ) => number`

```js
const cars = ["Volvo", "Volkswagen", "Ferrari", "Audi"];

cars.push("Aston Martin");

// If we want to know the new length, we could save that as well.
const newLength = cars.push("BWV");
console.log(newLength): // 6

console.log(cars); // ["Volvo", "Volkswagen", "Ferrari", "Audi", "Aston Martin", "BWV"]
```

`unshift()` works in the same way as `push()` but it adds the element to the beginning of the array instead.

`array.unshift(element1, element2... ) => number`

```js
const numbers = [5, 2, 7, 9, 10];
numbers.unshift(12, 20);

console.log(numbers); //[12, 20, 5, 2, 7, 9, 10]
```

[Back to top](#javascript-arrays-and-loops)

### Removing Elements

Removing elements for arrays can be done in multiple way but there exists two specific methods for elements removal. They are `pop()` and `shift()`.

The syntax is as follows:

`array.pop() => the removed element`

`array.shift() => the removed element`

They don't accept any arguments, they just removes elements. `pop` works by removing the last element from the array, and `unshift` removes the first element from the array.

```js
const cities = ["Stockholm", "Göteborg", "Örebro"];

cities.pop(); // We can ignore the return value
console.log(): // ["Stockholm", "Göteborg"]

const city = cities.shift();
console.log(); //["Göteborg"]
console.log(city); // "Stockholm"
```

[Back to top](#javascript-arrays-and-loops)

### Multidimensional Arrays

Arrays can exist in arrays, they are then called multidimensional arrays. Take connect4 for example, it's a 2-dimensional board, 7x6.

```js
const connect4 = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];
```

Let's place some tokens, we need to access specific places in the multidimensional array. We do that by using square brackets, but we use two sets of them.

```js
connect4[5][3] = "red";
connect4[5][4] = "yellow";
connect4[4][3] = "red";
connect4[3][3] = "yellow";

[
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, "Yellow", null, null, null],
  [null, null, null, "red", null, null, null],
  [null, null, null, "red", "yellow", null, null],
];
```

[Back to top](#javascript-arrays-and-loops)

## Loops

Loops are most used together with arrays in order to loop through them and do some sort of work on them. It could be to see if something exists, change something, add elements together, draw some statistics and many other things. They are very versatile and fundamental to every program language.

### For Loop

Use case: When you know the number of iterations beforehand, especially when you are working with indexes. Often used with array where the number of elements are fixed.

Syntax:

```js
for (initialization; condition; update) {
  // code to be executed in each iteration.
}
```

- `initialization` is the point where you start your loop from.
- `condition` is the condition that must be true in order for the loop to continue, otherwise it will terminate. This condition is checked after every iteration.
- `update` is the update that happens after each iteration that changes the basis of the condition.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Output:
/*
0
1
2
3
4
*/
```

Let's take an example with an array.

```js
const numbers = [5, 10, 15, 20];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  // console.log(numbers.at(i));
}

// Output
/*
5
10
15
20
*/
```

[Back to top](#javascript-arrays-and-loops)

### For..of Loop (foreach)

Use case: When iterating over iterable _(mostly arrays)_ objects, most used in arrays and strings when you don't really need to know the index.

Syntax:

```js
// iterable = arrays, string and other data types that can be looped through.
for (variable of iterable) {
  // Code to be executed in each iteration
}

const names = ["Niklas", "Henrik", "Erik", "Sofia"];

for (let name of names) {
  console.log(name);
}

// Output
/*
Niklas
Henrik
Erik
Sofia
*/
```

In every iteration a local variable will be created that will be assign the value of the current element we are iterating over.

[Back to top](#javascript-arrays-and-loops)

### While Loop

Use case: When the number of iterations is not known beforehand, a while loop might be the one you want to use. This loop will continue as long as the specified condition is true. This requires you to be careful when setting the condition because you might create a endless lopp if you don't and your computer won't like that.

Syntax:

```js
while (condition) {
  // Code to be executed in each iteration
}

let x = 1;

while (x < 100) {
  console.log(x);
  x *= 2;
}
```

[Back to top](#javascript-arrays-and-loops)

### Do..While Loop

Use case: Very similar to `while-loop`, but it guarantees that the code inside the loop will run at least once because the condition is checked **AFTER** each iteration.

Syntax:

```js
do {
  // Code to be executed in eact iteration
} while (condition);

let x = 1;

do {
  console.log(x);
  x *= 2;
} while (x < 100);
```

[Back to top](#javascript-arrays-and-loops)

### For..in Loop (Objects)

Use case: When you want to iterate over the properties of an object. Don't use this with arrays or other iterables.

Syntax:

```js
for (variable in object) {
  // code to be executec in each iteration
}
```

More on these when we are talking about objects in later lectures.

[Back to top](#javascript-arrays-and-loops)

## Array Methods

[Array Methods in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### concat

### filter

### find

### findIndex

### forEach

### includes

### indexOf

### join

### map

### reduce

### slice

### splice
