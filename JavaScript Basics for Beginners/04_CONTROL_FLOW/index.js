//IF..ELSE
// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good Afternoon!
//Otherwise: Good Evening!
console.log("IF ELSE statements");
let hour = 17;

if(hour >= 6 && hour < 12)
    console.log('Good Morning');
else if(hour >= 12 && hour < 18)
    console.log('Good Afternoon');
else
console.log('Good Evening');

//SWITCH ....CASE
console.log("SWITCH CASE statements");
let role = 'moderator';

switch (role){
    case 'guest': 
        console.log('Guest User')
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown user')
}


//TYPES OF LOOPS --> FOR, WHILE, DO..WHILE, FOR...IN, FOR...OF
console.log("FOR LOOPS");
for (let i=0; i<5; i++){
    console.log('Hello World', i);
}

console.log("WHILE LOOPS"); //Loop variable is used within the loop.  Here we declare externally. SCOPING
let i=0;
while(i<=5){
    if(i % 2 !==0) console.log(i);
    i++;
}

console.log("DO WHILE LOOPS"); //Do while loops, the condition is evaluated at the end.
let a= 0;

do{
    if(a % 2 !==0) console.log(a);
    a++;
}while (a<=5);

console.log("FOR..IN LOOPS"); //Used to iterate the properties of an object.
const person = {
    name: 'Brian',
    age: 46
};

for(let key in person)
console.log(key, person[key]);

const colors = ['red','green', 'blue']
for (let index in colors){
    console.log(index, colors[index])
}


console.log("FOR..OF LOOPS"); //Used to iterate arrays.
for (let color of colors){
    console.log(color);
}


console.log("BREAK and CONTINUE"); //Used to exit loops.
let k=0;
while (k <= 10){
    //if (k==5) break;
    if (k%2 ===0){
        k++;
        continue;
    }
   
    console.log(k);
    k++;
}
