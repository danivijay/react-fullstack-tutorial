class Car {
  constructor () {
    this.tires = 4
  }
}

class Ford extends Car {
  constructor () {
    super()
    this.windows = 5
  }
}

let car1 = new Car()
let car2 = new Ford()

console.log(car1.tires)
console.log(car2.windows)