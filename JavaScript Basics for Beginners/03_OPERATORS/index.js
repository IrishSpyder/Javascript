//OPERATORS are used with VARIABLES and CONSTANTS to create EXPRESSIONS which can be used to create ALGORITHMS

//ARITHMETRIC

let x = 10;
let y = 3;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

//Increment (++)
console.log(x++);
console.log(x);

//Decrement (--)
console.log(x--);
console.log(x);

//-------------------------------------------
//ASSIGNMENT OPERATORS
//-------------------------------------------

let a =10;
a = a + 5;
a += 5;
a = a * 3;
a *= 3;

//-----------------------------------------------
//COMPARISON OPERATORS
//-----------------------------------------------
let b = 1;

//relational 
console.log("Relational Operators");
console.log(b > 0);
console.log(b >= 1);
console.log(b < 1);
console.log(b <= 1);

//equality (Strict) has to be the same type on both sides
console.log("Strict Equality Operators");
console.log(b === 1);
console.log(b !== 1);

//Lose Equality - doesnt have to be the same type on both sides
console.log("Loose Equality Operators");
console.log('1' === 1);
console.log('1'== 1);
console.log(1 == 1);
console.log(true == 1);

//TERNARY OPERATORS
console.log("TERNARY Operators");
let points =110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

//LOGICAL OPERATORS  AND(&&) Returns TRUE if both operands are TRUE
console.log("LOGICAL Operators (&&)");
console.log( true && true);
console.log( true && false);
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan)

//LOGICAL OPERATORS OR(||) Returns true if one of the operands is TRUE
console.log("LOGICAL Operators (||)");
highIncome = true;
goodCreditScore = false;
eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan)
eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan)


//LOGICAL OPERATORS NOT(!) Returns true if one of the operands is TRUE
console.log("LOGICAL Operators (||)");
highIncome = false;
goodCreditScore = false;
eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan)

let applicationRefused = !eligibleForLoan
console.log(applicationRefused)

//Falsy Values (false) in JS
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy is Truthy
// Short-circuiting
console.log("LOGICAL Operators with NON-BOOLEANs");
let userColor = 'undefined';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);


//BITWISE OPERATORS -BINARY FORMAT OF 0s and 1s

// 1 = 00000001  --individual bit of the number 1
// 2 = 00000010  --individual bit of the number 2
// | = 00000011  -->3
// & = 00000000  -->0
console.log("BITWISE OPERATORS");
console.log(1 | 2);
console.log(1 & 2);

//OPERATOR PRECEDENCE
console.log("OPERATOR PRECEDENCE");
let e = 2+3*4;
console.log(e);