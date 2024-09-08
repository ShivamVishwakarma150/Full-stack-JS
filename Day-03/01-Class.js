// Class representing the blueprint of an Animal
class Animal {
  // Constructor for initializing properties (Encapsulation)
  constructor(name, legCount) {
    this.name = name;          // Public property (name)
    this.legCount = legCount;  // Public property (legCount)
  }

  // Method to describe the animal (Abstraction)
  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
}

// Inheritance Example: Mammal extends Animal
class Mammal extends Animal {
  // Constructor of Mammal which also calls the parent class constructor
  constructor(name, legCount, furType) {
    super(name, legCount);  // Call the parent class's constructor (Inheritance)
    this.furType = furType; // Additional property specific to Mammals
  }

  // Method overriding (Polymorphism)
  describe() {
    // Overriding the parent class's describe method with more specific details
    return `${this.name} is a mammal with ${this.legCount} legs and ${this.furType} fur.`;
  }
}

// Another Inheritance Example: Bird extends Animal
class Bird extends Animal {
  constructor(name, legCount, wingSpan) {
    super(name, legCount);  // Calling the Animal constructor (Inheritance)
    this.wingSpan = wingSpan; // Property specific to birds
  }

  // Method overriding (Polymorphism)
  describe() {
    return `${this.name} is a bird with ${this.legCount} legs and a wingspan of ${this.wingSpan} meters.`;
  }
}

// Polymorphism in Action
function animalDescription(animal) {
  // Using polymorphism, we can call describe() on any object that extends Animal
  console.log(animal.describe());
}

// Example Usage

// Encapsulation: The internal state of each object is hidden and managed through the constructor
const dog = new Mammal("Dog", 4, "short");
const eagle = new Bird("Eagle", 2, 2.3);

// Polymorphism: Different describe() methods are called depending on the object type
animalDescription(dog);   // "Dog is a mammal with 4 legs and short fur."
animalDescription(eagle); // "Eagle is a bird with 2 legs and a wingspan of 2.3 meters."
