// private

class Circle {
    #radius = 0;
    constructor(radius) {
      this.radius = radius; // calling setter
    }
    get area() {
      return Math.PI * Math.pow(this.#radius, 2);
    }
    set radius(value) {
      if (typeof value === 'number' && value > 0) {
        this.#radius = value;
      } else {
        throw 'The radius must be a positive number';
      }
    }
    get radius() {
      return this.#radius;
    }
  }