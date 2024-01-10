## Javascript Basics - Datatypes and Variables

### Comments

Comments are used to add explanations within your code. They are ignored by the JavaScript engine.

Single-line comments

```js
// This is a single-line comment
```

Multi-line comments

```js
/* 
This is a mulit-line coment.
We can write over many rows.
*/
```

### Logging to the console

Logging to the console is used to print information to the browser console. It's helpful for debugging our code and understanding how our code is executing.

It is used with this mehtod: `console.log()`.

```js
console.log("Hello from the console!"); // Prints the text in the parentheses to the console.
```

### Variables and scoops

#### let

Declares a variable that can be reassigned. It has block-level scope.

```js
let number = 10;
let name = "Niklas";

let firstName; // This will create an emtpy variable that we can assign a value to later.

console.log(number); // Should print 10 in the console
console.log(name); // Niklas

number = 20;

console.log(number); // 20
```

`=` is the assignment operator for variabels.

#### const

Declares a constant variable whose value can not be reassigned. It also has a block-level scope.

```js
const myAge = 18;
myAge = 24; // This won't work, not allowed.

const myOtherAge; // Won't work, a const always needs value during the declaration.
```

#### var

The old way to declare variables. It has a function-level scope, which means it's available all over the place, it's hoisted to the top of the file. This is not a behaviour that we want.

```js
var address = "jsgatan 47";
```

### Data types

#### Number

Represents a numeric value like an integer or a decimal.

```js
let age = 18; // Integer
let price = 24.99; // Decimal
```

Decimals is written with periods and not comma.

#### String

Represents textual data enclose in quotes, and it can be single quotes or double quotes or even back ticks.

```js
let firstName = "Niklas"; // A string in single quotes

let lastName = "Fähnrich"; // A string in double quotes

const address = `Skurupsgatan`; // A string in backticks.

const fullName = firstName + lastName; // This is something called string concatenation. In This case we use existing variables.

console.log(fullName); // NiklasFähnrich

const description = "Hej" + " på dig!"; // Concatenation of raw strings.

console.log(description); // Hej på dig!
```

String that are created with backticks have some extra functionality. With backticks we are allowed to write multi-line string, and we can also inject variables in the string in a good-looking way.

```js
const greeting = `Hello, I am
a multi-line string, and
I can exist on may different rows.`;

// Above is a multi-line string.
```

Now, let's look at injections inside a string.

```js
const firstName = "Niklas";
const lastName = "Fähnrich";

const greeting =
  "Hello " + firstName + " " + lastName + "!" + " How are you doing?";

console.log(greeting); // Hello Niklas Fähnrich! How are you doing?
```

The above is not so readable for us developers. For the end-used, it looks all nice. They see what they need to see. Let's try the same example with variable injections instead.

```js
const firstName = "Niklas";
const lastName = "Fähnrich";

const greeting = `Hello ${firstName} ${lastName}! How are you doing?`;

console.log(greeting); // Hello Niklas Fähnrich! How are you doing?
```

#### Boolean

Represents true or false values.

```js

```

#### Null

#### Undefined

#### NaN

### Arithmetic Operators

#### Addition

#### Subtraction

#### Multiplication

#### Division

#### Modulus

#### Increment

#### Decrement

### Assignment Operators

#### Addition Assignment

#### Subtraction Assignment

#### Multiplication Assignment

#### Division Assignment
