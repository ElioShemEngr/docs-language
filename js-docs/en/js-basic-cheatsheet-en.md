# JAVASCRIPT Basics - CheatSheet ✨

### 0. REFERENCES

Online Compiler:
https://playcode.io/

MDN Web Docs:
https://developer.mozilla.org/en-US/

### 1. COMMENTS
```javascript
// This is a single-line comment

/*
This is a 
multi-line 
comment
*/
```

### 2. VARIABLES AND DATA TYPES
```javascript
// Variable declaration
let name = "John";   // String
let age = 30;         // Number
let height = 1.75;    // Number (float)
let isStudent = true; // Boolean

// Printing variables
console.log(name, age, height, isStudent);

// Checking data type
console.log(typeof name);   // "string"
console.log(typeof age);    // "number"
console.log(typeof isStudent); // "boolean"
```

### 3. BASIC OPERATORS
```javascript
// Arithmetic operators
let sum = 5 + 3;             // Addition -> 8
let difference = 5 - 3;      // Subtraction -> 2
let product = 5 * 3;         // Multiplication -> 15
let quotient = 5 / 3;        // Division -> 1.6666...
let remainder = 5 % 3;       // Modulo -> 2
let power = 5 ** 3;          // Exponentiation -> 125

// Comparison operators
let isGreater = 5 > 3;       // true
let isEqual = 5 === 3;       // false
let isNotEqual = 5 !== 3;    // true

// Logical operators
let isTrue = true && false;  // false
let isFalse = !true;         // false
```

### 4. CONDITIONALS (`if`, `else if`, `else`)
```javascript
let age = 20;

// Simple conditional
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Conditional with multiple cases
let grade = 85;
if (grade >= 90) {
    console.log("Excellent");
} else if (grade >= 80) {
    console.log("Good");
} else {
    console.log("Needs improvement");
}
```

### 5. LOOPS (`for`, `while`)
```javascript
// `for` loop to iterate over an array
let fruits = ["apple", "orange", "banana"];
for (let fruit of fruits) {
    console.log(fruit);
}

// `for` loop with a range
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// `while` loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

### 6. FUNCTIONS
```javascript
// Simple function definition
function greet(name) {
    return `Hello, ${name}!`;
}

// Function call
console.log(greet("John"));

// Function with multiple parameters
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // 8
```

### 7. ARRAYS
```javascript
// Creating an array
let numbers = [1, 2, 3, 4, 5];

// Accessing elements
console.log(numbers[0]);  // First element -> 1
console.log(numbers[numbers.length - 1]); // Last element -> 5

// Modifying an element
numbers[0] = 10;

// Array methods
numbers.push(6);  // Add element to the end
numbers.splice(numbers.indexOf(3), 1); // Remove specific element
let last = numbers.pop();  // Remove and return the last element

// Slicing an array
console.log(numbers.slice(1, 4)); // Subarray from index 1 to 3
```

### 8. OBJECTS
```javascript
// Creating objects
let person = { name: "John", age: 30, city: "Madrid" };

// Accessing properties
console.log(person.name); // "John"

// Modifying a property
person.age = 31;

// Adding a new property
person.job = "Engineer";

// Object methods
console.log(Object.keys(person));   // All keys
console.log(Object.values(person)); // All values
```

### 9. EXCEPTIONS
```javascript
try {
    let result = 10 / 0;
    if (!isFinite(result)) throw "Division by zero!";
} catch (error) {
    console.error("Error:", error);
} finally {
    console.log("This block always executes.");
}
```

### 10. ARROW FUNCTIONS
```javascript
// Arrow function for addition
const add = (x, y) => x + y;
console.log(add(2, 3)); // 5

// Using arrow functions with map
let nums = [1, 2, 3, 4, 5];
let squares = nums.map(x => x ** 2);
console.log(squares);
```

### 11. CLASSES AND OBJECTS
```javascript
// Class definition
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Creating an object
let person1 = new Person("John", 30);

// Calling a method
console.log(person1.greet());
```

### 12. MODULES
```javascript
// Exporting a function (in a separate file, e.g., math.js)
export function square(x) {
    return x ** 2;
}

// Importing and using the function (in another file)
import { square } from "./math.js";
console.log(square(4)); // 16
```

### 13. FILE HANDLING (Node.js)
```javascript
const fs = require("fs");

// Writing to a file
fs.writeFileSync("file.txt", "Hello, world!");

// Reading from a file
let content = fs.readFileSync("file.txt", "utf8");
console.log(content);
```