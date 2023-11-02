// call is a funct

function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
  console.log(this);
}

function setBrands(brand){
    Car.call(this,"convertable",'diesel')
    this.branch = brand
}

setBrands()