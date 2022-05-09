const obj1 = {
  value: "initial",
};
const obj2 = obj1;
const obj3 = JSON.parse(JSON.stringify(obj1));

console.log("Initial:", obj1.value, obj2.value, obj3.value); // Initial: initial initial initial
obj2.value = "newvalue";
console.log("Changed:", obj1.value, obj2.value, obj3.value); // Changed: newvalue newvalue initial
