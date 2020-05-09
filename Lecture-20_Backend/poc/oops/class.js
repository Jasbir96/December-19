//  Js is very good at emulating java
class Car {
  constructor(name, color, topSpeed, currentSpeed) {
    this.name = name;
    this.color = color;
    this.topSpeed = topSpeed || 200;
    this.currentSpeed = currentSpeed || 0;
  }
  //  this => current object calling the method 
  displayFeatures() {
    console.log(`It is a ${this.name} with ${this.color} color and could clock upto ${this.topSpeed}`)
    return this;
  }
  accelerate() {
    this.currentSpeed++;
    return this
  }
  break() {
    this.currentSpeed--;
    return this;}
  dispCurrSpeed() {
    console.log(`Curr Speed is: ${this.currentSpeed}`)
    return this;
  }
}
const beetle = new Car("Beetle", "red", 150);
const swift = new Car("swift", "red", 200);
const lambo = new Car("lambo", "green", 300);
const ferrari = new Car("ferrari", "red", 350);
//  this => runtime => object calling the method 
// beetle.displayFeatures();
// swift.displayFeatures();
//chaining=> return this  
beetle.accelerate().accelerate().break().dispCurrSpeed().accelerate().dispCurrSpeed();
