# DART Basics - Cheatsheet 🔤

### 1. COMMENTS
```dart
// This is a single-line comment

/// This is a documentation comment

/*
    This is a
    multi-line
    comment.
*/
```

### 2. VARIABLES AND DATA TYPES
```dart
// Variable declaration
int age = 25;               // Integer
double price = 19.99;        // Decimal number
num height = 180;            // Can be int or double

String name = "Juan";       // String
bool isAdult = true;         // Boolean (true or false)

var city = "Madrid";        // Type inference (String)
var distance = 5.5;          // Type inference (double)
```

### 3. OPERATORS
```dart
// Arithmetic operators
int a = 10;
int b = 5;
print(a + b);   // Addition: 15
print(a - b);   // Subtraction: 5
print(a * b);   // Multiplication: 50
print(a / b);   // Division: 2.0 (double)
print(a % b);   // Modulo: 0 (remainder)

// Comparison operators
print(a > b);   // true
print(a == b);  // false
print(a != b);  // true

// Logical operators
bool c = true;
bool d = false;
print(c && d);  // false (AND)
print(c || d);  // true (OR)
```

### 4. CONTROL FLOW
#### `if`, `else`, `else if` conditions:
```dart
int age = 18;

if (age >= 18) {
  print("Is an adult");
} else if (age >= 13) {
  print("Is a teenager");
} else {
  print("Is a child");
}
```

#### Switch-Case
```dart
String day = "Monday";

switch (day) {
  case "Monday":
    print("It is the first day of the week.");
    break;
  case "Friday":
    print("It is the last workday.");
    break;
  default:
    print("It is another day.");
}
```

### 5. LOOPS
#### `for`
```dart
for (int i = 0; i < 5; i++) {
  print(i);  // Prints: 0 1 2 3 4
}
```

#### `while`
```dart
int counter = 0;

while (counter < 5) {
  print(counter);  // Prints: 0 1 2 3 4
  counter++;
}
```

#### `do-while`
```dart
int counter = 0;

do {
  print(counter);  // Prints: 0 1 2 3 4
  counter++;
} while (counter < 5);
```

### 6. FUNCTIONS
```dart
// Simple function
void greet(String name) {
  print("Hello, $name!");
}

greet("Juan");  // Prints: Hello, Juan!

// Function that returns a value
int add(int a, int b) {
  return a + b;
}

int result = add(5, 3);
print(result);  // Prints: 8
```

#### Functions with optional and default parameters
```dart
// Optional parameters
void showData(String name, [int? age]) {
  if (age != null) {
    print("Name: $name, Age: $age");
  } else {
    print("Name: $name, Age: Unknown");
  }
}

showData("Ana");             // Name: Ana, Age: Unknown
showData("Ana", 25);         // Name: Ana, Age: 25

// Named parameters with default values
void showInfo({String name = "Anonymous", int age = 0}) {
  print("Name: $name, Age: $age");
}

showInfo(name: "Luis", age: 30);  // Name: Luis, Age: 30
showInfo();                        // Name: Anonymous, Age: 0
```

### 7. COLLECTIONS
#### Lists
```dart
List<String> fruits = ["Apple", "Banana", "Orange"];
print(fruits[0]);         // Access by index: Apple

fruits.add("Strawberry");  // Add an element
print(fruits);              // [Apple, Banana, Orange, Strawberry]

for (var fruit in fruits) {
  print(fruit);           // Iterate over the list
}
```

#### Sets (unique elements)
```dart
Set<int> numbers = {1, 2, 3, 4};
numbers.add(4);           // Not added because it already exists in the set
print(numbers);           // {1, 2, 3, 4}
```

#### Maps (Dictionaries)
```dart
Map<String, String> capitals = {
  "Spain": "Madrid",
  "France": "Paris"
};

print(capitals["Spain"]);  // Access by key: Madrid

capitals["Italy"] = "Rome"; // Add a new key-value pair
print(capitals);            // {Spain: Madrid, France: Paris, Italy: Rome}
```

### 8. CLASSES AND OBJECTS
```dart
// Class definition
class Person {
  String name;
  int age;

  // Constructor
  Person(this.name, this.age);

  // Method
  void greet() {
    print("Hi, my name is $name and I am $age years old.");
  }
}

// Create an instance (object) of the class
Person p = Person("Carlos", 30);
p.greet();  // Prints: Hi, my name is Carlos and I am 30 years old.
```

### 9. INHERITANCE
```dart
// Base class
class Animal {
  void makeSound() {
    print("The animal makes a sound.");
  }
}

// Derived class
class Dog extends Animal {
  @override
  void makeSound() {
    print("The dog barks.");
  }
}

Dog myDog = Dog();
myDog.makeSound();  // Prints: The dog barks.
```

### 10. ASYNCHRONY
#### `Future` and `async`/`await`
```dart
// Asynchronous function
Future<String> fetchData() async {
  // Simulate an asynchronous operation like an HTTP request
  await Future.delayed(Duration(seconds: 2));
  return "Data fetched";
}

void main() async {
  print("Waiting for data...");
  String data = await fetchData();
  print(data);  // Prints: Data fetched (after 2 seconds)
}
```

### 11. EXCEPTIONS
```dart
void divide(int a, int b) {
  try {
    if (b == 0) {
      throw Exception("Cannot divide by zero");
    }
    print(a / b);
  } catch (e) {
    print(e);
  }
}

divide(10, 0);  // Prints: Exception: Cannot divide by zero
```

### 12. NULL SAFETY
```dart
// Nullable variable
String? name;   // Can be null
name = "Juan";
print(name);    // Prints: Juan

// Use of null check (!) or the conditional access operator (?.)
int? age;
print(age?.isEven);  // Avoids error if null: prints null
