// Step 1: Constructor function Animal
function Animal() {
  this.type = "Animal";
}

// Step 2: Add method to Animal's prototype
Animal.prototype.sound = function() {
  console.log("Animal sound");
};

// Step 3: Constructor function Dog
function Dog() {
  Animal.call(this); // Call the Animal constructor to inherit properties
  this.type = "Dog";
}

// Step 4: Inherit Animal.prototype
Dog.prototype = Object.create(Animal.prototype);

// Step 5: Fix constructor reference
Dog.prototype.constructor = Dog;

// Step 6: Override sound method
Dog.prototype.sound = function() {
  console.log("Bark");
};

// Step 7: Create instance and call method
const myDog = new Dog();
myDog.sound(); // Output: Bark
