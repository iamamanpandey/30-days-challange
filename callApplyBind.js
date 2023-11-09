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

const newEntity = (obj) => console.log(obj);

function mountEntity(){
	this.entity = newEntity;
	console.log(`Entity ${this.entity} is mounted on ${this}`);
}

mountEntity.call();

function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.apply(this, ["convertible", "petrol"]); //Syntax with array literal
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice(price){
	Car.apply(this, new Array("convertible", "diesel")); //Syntax with array object construction
	this.price = price;
	console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);

function addUp(){
  //Using arguments to capture the arbitrary number of inputs
  const args = Array.from(arguments); 
  this.x = args.reduce((prev, curr) => prev + curr, 0);
  console.log("this.x = ", this.x);
}

function driverFunc(){
  const obj = {
      inps: [1,2,3,4,5,6]
  }
  addUp.apply(obj, obj.inps);
}

driverFunc();

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 1
//     };
//   }
//   handleCode() {
//     console.log("HANDLE CODE THIS = ", this.state);
//   }
//   render() {
//     return <button onClick={this.handleCode}>Click Me</button>;
//   }
// }
