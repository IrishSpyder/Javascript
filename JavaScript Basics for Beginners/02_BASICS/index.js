//Variable Rules
//Variables cannot be a reserved keyword.
//Variables should be meaningful and descriptive.
//Cannot start with a number.
//Cannot contain a space or hyphen.
//Use camel notation
//Case Sensitive

let firstName = 'Brian';
let lastName = "Tansey";
console.log(firstName + ' '+ lastName);

//Constants --> We cannot reassign a Constant
//if you need to reassign a variable, use let
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

//Primitive Types
//Primitive and Value Types are the same
//strings, numbers, booleans, undefined, and null
let name = 'Brian';  //string literal
let age = 30; //number literal
let isApproved = true; //boolean literal
let fName = undefined; //set to undefinded.  Type is undefined. 
let lName = null; // we can reassign in the future; used to clear the value of a variable.  Type is object

//Dynamic Typing
//Javascript is a Dynamic language - it is not a static language.  The type of a variable
//can change at runtime
typeof name; //here it is a string
name = 1;
typeof name;  //now it is a number, changed at runtime


//Objects

let person = {
    //key value pairs
    name: 'Brian',
    age: 46

}; //a person object and set it to an object literal

console.log(person);
console.log(person.name);
//Dot Notation
person.name = "John"
console.log(person.name);

//Bracket Notation
person['name'] = "Mary"
console.log(person.name);

let selection = 'name'
person[selection] = 'Frank'
console.log(person.name);

//arrays -- length of array is dynamic.  can store different types in an array
let selectedColors = ['red','blue']; //array literal
selectedColors[2]='green';
selectedColors[3]= 1;
console.log(selectedColors);


//functions 
//performing a task like display something on console
function greet(fName, lName){ //name here is a parameter :)
    //body of function
    console.log('Hello ' + fName + ' ' + lName);
}

greet('Brian' , 'Tansey');//add the argument Brian 


//Types of Functions - one that calculates a value
function square(number){
    return number * number;
}

let number = square(2);
console.log(number);
//or
console.log(square(2))