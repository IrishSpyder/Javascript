//Object-Oriented Programming (OOP)
console.log('OOP BASICS: ');
const circle = {

    radius: 1,
    location: {
        x:1,
        y:1
    },
    isVisible: true,
    draw: function(){
        console.log('draw me');
    }
}

circle.draw();

console.log('Factory Functions: ');

//Factory Functions - these produce objects
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw factory circle' + radius);
        }

    };
}

const circle1 = createCircle(1);
console.log(circle1);
console.log(circle1.draw());
const circle2 = createCircle(2);
console.log(circle2);
console.log(circle2.draw());



//Constructor Function
console.log('Constructor Functions: ');
function CCircle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const ccircle = new CCircle(1)
console.log(ccircle)


//Functions are Objects
console.log('Functions are Objects: ');
function cCircle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const acircle = new cCircle(10)

const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function(){
    console.log('draw');
}

`);

//Value vs. Reference Types
console.log('Value vs. Reference Types: ');
console.log('Value Types (Primitives) are copied by their value and Objects are copied by their reference.');
//primitives
let x = 10;  //10 is stored in x
let y = x;   //then we copy x and store it in y so x=10
x=20; // now we change x to 20 so x=20 but y still remains 10

//objects
let a = {value: 10}; //Objects are not stored in this variable - they are stored in memory. So the address of the memory is stored in the variable.
let b = a;  //copy a into b and now b = 10
a.value = 20;  //set a = 20 and now b also equals 20 , so now a and b are pointing to the same memory location.


//Enumerating properties of an object
console.log('Enumerating properties of an object: ');

//easiest way
for (let key in circle)
console.log(key,circle[key]);

for (let key of Object.keys(circle))
console.log(key);

for (let entry of Object.entries(circle))
console.log(entry);

//in operator - check if give property is in given object
if('radius' in circle) console.log('yes');

//Cloning an object
console.log('Cloning an object: ');
const anotherCircle = Object.assign({
    color: 'yellow'
}, circle);
console.log(anotherCircle);

//spread operator
const spreadCircle = { ...circle};
console.log(spreadCircle)

//dates
const now = new Date();
const date1 = new Date('July 06 2023 11:59');
const date2 = new Date(2018, 6, 6, 11);

console.log('DATEs:');
console.log(now);
console.log(date1);
console.log(date2);


console.log('Exercise01: Address Object');

const address = {

    street: '528 83rd Street',
    city: 'New York',
    ZipCode: '10028'
   
}

function showAddress(address){
    for (let key in address)
    console.log(key, address[key]);
}

showAddress(address);

console.log('Exercise02: Factory and Constructor Function:');

//Factory Functions - these produce objects
function createAddress(){
    return {
        street: '524 83rd street',
        city:'New York',
        zipCode: '10028'
        

    };
}

const address1 = createAddress();
console.log(address1);

//Constructor Function
function Address2(){
    this.street = '530 83rd street',
    this.city = 'New York',
    this.zipCode = '10028'
    
}

const address2 = Address2()
console.log(address2)
