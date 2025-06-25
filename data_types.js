//example for datatypes
let a = 10; // number
let b = "Hello"; // string
let c = true; // boolean
let d = null; // null
let e; // undefined
let f = Symbol("unique"); // symbol
let g = { name: "John", age: 30 }; // object
let bigIntVar = BigInt(123456789012345678901234567890); // BigInt
let h = [1, 2, 3]; // array (which is a type of object in JavaScript)
// example for functions
function add(x, y) {
    return x + y;
}
function greet(name) {
    return `Hello, ${name}!`;
}
let obj2={
    name:"laxman rao",
    
    age: 20,
    isStudent: true,

}
console.log(add(5, 10)); 
console.log(greet("Alice"));
console.log(a, b, c, d, e, f, g, bigIntVar, h,obj2);
