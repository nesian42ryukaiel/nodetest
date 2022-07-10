/**
 * Help from: https://www.freecodecamp.org/news/an-introduction-to-programming-paradigms/
 */

console.log("\nAn Introduction to Programming Paradigms\n");

/**
 * 1. Imperative Programming
 *
 * Imperative programming consists of sets of detailed instructions that are given to the computer to execute in a given order.
 * It's called "imperative" because as programmers we dictate exactly what the computer has to do, in a very specific way.
 *
 * Imperative programming focuses on describing how a program operates, step by step.
 */

const nums = [1, 4, 3, 6, 7, 8, 9, 2];
const result = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 5) result.push(nums[i]);
}

console.log("1. Imperative Programming\n");
console.log("nums:", nums);
console.log("if number is bigger than 5, include in result");
console.log("result:", result, "\n"); // Output: [ 6, 7, 8, 9 ]

/**
 * 2. Procedural Programming
 *
 * Procedural programming is a derivation of imperative programming, adding to it the feature of functions (also known as "procedures" or "subroutines").
 * In procedural programming, the user is encouraged to subdivide the program execution into functions, as a way of improving modularity and organization.
 */

function pourIngredients() {
  console.log("Pour flour in a bowl");
  console.log("Pour a couple eggs in the same bowl");
  console.log("Pour some milk in the same bowl");
}

function mixAndTransferToMold() {
  console.log("Mix the ingredients");
  console.log("Pour the mix in a mold");
}

function cookAndLetChill() {
  console.log("Cook for 35 minutes");
  console.log("Let chill");
}

console.log("2. Procedural Programming\n");
pourIngredients();
mixAndTransferToMold();
cookAndLetChill();
console.log("\n");

/**
 * 3. Functional Programming
 *
 * Functional programming takes the concept of functions a little bit further.
 *
 * In functional programming, functions are treated as first-class citizens,
 *   meaning that they can be assigned to variables, passed as arguments, and returned from other functions.
 *
 * Another key concept is the idea of pure functions.
 * A pure function is one that relies only on its inputs to generate its result.
 * And given the same input, it will always produce the same result.
 * Besides, it produces no side effects (any change outside the function's environment).
 *
 * With these concepts in mind, functional programming encourages programs written mostly with functions (surprise 😲).
 * It also defends the idea that code modularity and the absence of side effects
 *   makes it easier to identify and separate responsibilities within the codebase.
 * This therefore improves the code maintainability.
 */

// const numsForFP = [1, 4, 3, 6, 7, 8, 9, 2];

function filterNums(array, filter) {
  const result = []; // Internal variable

  for (let i = 0; i < array.length; i++) {
    if (array[i] > filter) result.push(array[i]);
  }

  return result;
}

console.log("3. Functional Programming\n");
console.log("result by function:", filterNums(nums, 5), "\n"); // Output: [ 6, 7, 8, 9 ]

/**
 * 4. Declarative Programming
 *
 * Declarative programming is all about hiding away complexity
 *   and bringing programming languages closer to human language and thinking.
 * It's the direct opposite of imperative programming in the sense that
 *   the programmer doesn't give instructions about how the computer should execute the task,
 *   but rather on what result is needed.
 */

//  const numsForDP = [1,4,3,6,7,8,9,2]

console.log("4. Declarative Programming\n");
console.log(
  "a result that reads like natural language:",
  "\nnums.filter((num) => num > 5) =",
  nums.filter((num) => num > 5),
  "\n"
); // Output: [ 6, 7, 8, 9 ]

/**
 * 5. Object-Oriented Programming
 *
 * One of the most popular programming paradigms is object-oriented programming (OOP).
 *
 * The core concept of OOP is to separate concerns into entities which are coded as objects.
 * Each entity will group a given set of information (properties) and actions (methods) that can be performed by the entity.
 *
 * OOP makes heavy usage of classes
 *   (which are a way of creating new objects starting out from a blueprint or boilerplate that the programmer sets).
 * Objects that are created from a class are called instances.
 */

// Create the two classes corresponding to each entity
class Cook {
  constructor(name) {
    this.name = name;
  }

  nanori() {
    console.log(`${this.name} does the following:`);
  }

  mixAndBake() {
    this.nanori();
    console.log("- Mix the ingredients");
    console.log("- Pour the mix in a mold");
    console.log("- Cook for 35 minutes");
  }
}

class AssistantCook {
  constructor(name) {
    this.name = name;
  }

  nanori() {
    console.log(`${this.name} does the following:`);
  }

  pourIngredients() {
    this.nanori();
    console.log("- Pour flour in a bowl");
    console.log("- Pour a couple eggs in the same bowl");
    console.log("- Pour some milk in the same bowl");
  }

  chillTheCake() {
    this.nanori();
    console.log("- Let chill");
  }
}

console.log("5. Object-Oriented Programming\n");

// Instantiate an object from each class
const Frank = new Cook("Frank");
const Anthony = new AssistantCook("Anthony");

// Call the corresponding methods from each instance
Anthony.pourIngredients();
Frank.mixAndBake();
Anthony.chillTheCake();

console.log("\nEOF\n");
