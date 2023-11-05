// In non–strict mode, this is always a reference to an object. In strict mode, it can be any value

function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;


