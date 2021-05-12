'use strict';

/* benefits of using strict mode

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

// const interface = "Audio"
// const private = 534;

*/

/* Function

function logger(){
    console.log('My name is Scarlet');
}

// calling / running / invoking function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

function cakeMaking(butter, sugar) {
const popatocake = `I need to put ${butter} butter and ${sugar} sugar`
return popatocake;
}

const mybirthdaycake = cakeMaking(5, 5);
console.log(mybirthdaycake);

*/


/*

//Function declaration (I can call function declaration before defining it)

function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1992);
console.log(age1);


//Function expression (I can not call function declaration before defining it)

const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}

const age2= calcAge2(1992);
console.log(age1,age2);

*/

/*

// Arrow function
const calcAge3 = birthYear =>2037 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName)=>{
    const age = 2037-birthYear;
    const retirement = 65 - age;
    //return retirement;
return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1992, 'Scarlet'));
console.log(yearsUntilRetirement(1989, 'Woong'));

*/

/* Functions Calling other function

function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));



function ingredientsPieces(cube){
    return cube*4;
}

const cakemaking = function(butter, sugar){
    const buttercubes = ingredientsPieces(butter);
    const sugarcubes = ingredientsPieces(sugar);
    const ingredients = `I need ${buttercubes} buttercubes and ${sugarcubes} sugarcubes`;
    return ingredients
}

console.log(cakemaking(5, 6));

*/


/* Reviewing Function

const clacAge= function(birthYear){
    return 2037-birthYear; 
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = clacAge(birthYear);
    const retirement = 65 - age;
    if(retirement>0){return retirement;}
    else{return-1;}
    
}
    console.log(yearsUntilRetirement(1992,'Scarlet'))

*/



// const calcAgerage=(score1,score2,score3)=>(score1+score2+score3)/3;
// const averageDolphins = calcAgerage(85,54,41);
// const averageKoalas = calcAgerage(23,34,27);

// console.log(averageDolphins,averageKoalas);

// const checkWinner = function(averageDolphins,averageKoalas){
// if(averageDolphins>(averageKoalas*2)){
//     console.log(`Dolphins win! ${averageDolphins}vs${averageKoalas}`)}
// else if(averageKoalas>(averageDolphins*2)){
//     console.log(`Koalas win! ${averageKoalas}vs${averageDolphins}`)} 
 
// }

// checkWinner(averageDolphins,averageKoalas)

/*

//test 1

const calcAverage=(score1,score2,score3)=>(score1+score2+score3)/3;
let averageDol = calcAverage(44,23,71)
let averageKoa = calcAverage(65,54,49)
console.log(averageDol,averageKoa)

const checkWinner =function(averageteam1,averageteam2){
    if(averageteam1>=averageteam2*2)
    {console.log(`Dolphins Win! ${averageteam1}vs${averageteam2}`)}
    else if (averageteam2>=averageteam1*2)
    {console.log(`Koalas Win! ${averageteam2}vs${averageteam1}`)}
    else console.log(`no one wins!`)
}
checkWinner(averageDol,averageKoa)
checkWinner(1000,500);
checkWinner(10,1000);

// test 2

averageDol = calcAverage(85,54,41);
averageKoa = calcAverage(23,34,27);
console.log(averageDol,averageKoa)
checkWinner(averageDol,averageKoa)

*/

/* Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991,1984,2008,2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']    ---- the entire array can not be mutated.

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037-1992, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


//Exercise Arrays

const calcAge= function(birthYear){
    return 2037-birthYear;}
    
    const years = [1990,1967,2002,2010,2018];

    //console.log(clacAge(years)); // it's not going to be work if i put the entire array in the paramiter of function.

    const age1 = calcAge(years[0]);
    const age2 = calcAge(years[1]);
    const age3 = calcAge(years[years.length-1]);
    console.log(age1,age2,age3);

    const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
    console.log(ages)
   
    */

    /*
    const friends = ['Michael', 'Steven', 'Peter'];

    //Add elements

    const newLength =friends.push('Jay'); //to the end of the length
    console.log(friends);
    console.log(newLength);

    friends.unshift('John'); // at the beginning of the length
    console.log(friends);

    // Remove elements

    friends.pop(); // Removing Last element 
    const popped = friends.pop();
    console.log(friends);
    console.log(popped);

    friends.shift(); // Removing First element
    console.log(friends);

    console.log(friends.indexOf('Steven'));
    console.log(friends.indexOf('Bob')); // I get -1 if i submit the element which is not in the array, 

    friends.push(23);
    console.log(friends.includes('Steven'));
    console.log(friends.includes('Bob'));
    console.log(friends.includes('23')); // it will give me false as a result because it uses the strict equality.
    console.log(friends.includes(23)); // it will be true because it is not a string

    if(friends.includes('Steven')){
        console.log('You  have a friend called Steven');
    }
    
    */

/*

    // Coding Challenge #2

    const calctip = function(billvalue){
        if(billvalue>=50&&billvalue<=300)
        return billvalue*0.15
        else 
        return billvalue*0.2
    };

    const calctip2 = bill=> bill>=50&& bill<=300 ? bill*0.15 : bill*0.2;  // solution


    console.log(calctip(100));

    const bills = [125,555,44];
    console.log(bills);

    const tips = [calctip(bills[0]),calctip(bills[1]),calctip(bills[2])];
    console.log(tips);

    const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
    console.log(total);


*/

/*

// Objects

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher'
    ['Michael','Peter','Steven']
];

const jonas = {
    firstName:'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven']
}
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first'+nameKey]);
console.log(jonas['last'+nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? choose between firstName, lastName, age, job and friends');


if(jonas[interestedIn]){
    console.log(jonas[interestedIn]); 
} else {
    console.log('Wrong request!choose between firstName, lastName, age, job and friends')
}


// Add object's property
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

*/


/*

//Object Methods

const jonas = {
    firstName:'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1992,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],
    hasDrivesLicense : true,

    // calcAge:function(birthYear){
    //     return 2037-birthYear}
 
    // calcAge:function(){
    //  console.log(this);
    //  return 2037-this.birthYear}

    calcAge: function(){
        this.age=2037-this.birthYear;
        return this.age;
    },


    getSummary : function() 
        {return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, 
        and he has ${this.hasDrivesLicense?'a':'no'} driver's license.`
        }
    }


// console.log(jonas.calcAge());

//console.log(jonas['calcAge' ](1992));

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

//Challenge

//"Jonas is a 46-year old teacher, and he has a driver's license"

console.log(jonas.getSummary());

*/

/*

//Coding Challenge #3

const person1 = {
    firstname : 'Mark',
    lastname : 'Miller',
    mass : 78,
    height : 1.69,
    calcBMI:function(){
        this.BMI = this.mass/(this.height**2)
        return this.BMI
    }
};
person1.calcBMI();       //  make sure calling the function before print it otherwise it would not work 
console.log(person1.BMI);

const person2 = {
    firstname : 'John',
    lastname : 'Smith',
    mass : 92,
    height : 1.95,
    calcBMI:function(){
        this.BMI = this.mass/(this.height**2)
        return this.BMI
    }
};

person2.calcBMI(); //  make sure calling the function before print it otherwise it would not work 
console.log(person1.BMI, person2.BMI);


//console.log(person2.calcBMI())

if(person1.BMI>person2.BMI){
    console.log(`${person1.firstname}${person1.lastname}'s BMI(${person1.BMI}) is higher than 
    ${person2.firstname}${person2.lastname}'s BMI${person2.BMI}`)}
     else if(person2.BMI>person1.BMI) {console.log(`${person2.firstname}${person2.lastname}'s BMI(${person2.BMI}) is higher than 
${person1.firstname}${person1.lastname}'s BMI${person1.BMI}`)};


*/

/*

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

//for loop keeps runnig while condition is TRUE
for(let rep = 1; rep <=10; rep++ ){
    console.log(`Lifting weights repetition ${rep}`);
}

for(let comp = 30; comp>=10; comp--){
    console.log(`this is a computer${comp}`);
}

*/

/*  

// For Loop


const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true
];

const types = [];


// console.log(jonasArray[0])
// console.log(jonasArray[1])
// ...
// console.log(jonasArray[4])
// console.log(jonasArray[5]) it does not exist 

for(let i = 0; i < jonasArray.length; i++) {
    //Reading from jonasArray 
    console.log(jonasArray[i], typeof jonasArray[i]);
    // Filling types array
    //types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);
// with using jonasArray.length in the range property, it automatically runs if I even add more objects.

const years = [1991,2007,1969,2020];
const ages = [];

for(let i = 0; i< years.length; i++){
    ages.push(2037 - years[i]);
}

console.log(ages);

//Continue and Break

console.log('----only strings---')
for(let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] !=='string')continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
    types.push(typeof jonasArray[i]);
}


console.log('---break with number---')
for(let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] ==='number')break;
    console.log(jonasArray[i], typeof jonasArray[i]);
    types.push(typeof jonasArray[i]);
}

*/

/* loop inside of loop

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true
];

//0, 1, ...,4
//4, 3,....,0

for(let i = jonasArray.length -1; i>=0; i--){
    console.log(i,jonasArray[i]);
}

for(let exercise = 1; exercise <4; exercise++){
    console.log(`-------Starting Exercise${exercise}`);

    for(let rep =1; rep<6; rep++){
        console.log(` Exercise${exercise} Lifting weight repetition ${rep}`)
    }

}

*/

// for(let rep = 1; rep<=10; rep++){
//     console.log(`Lifting weights repetition${rep}`);
// }


/* 

//While Loop

let rep = 1
while (rep <= 10){
    // console.log(`While:Lifting weights repetition${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random()*6)+1;


while(dice !==6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
    if(dice===6) console.log('Loop is about to end...');
}

*/

//Coding Challenge #4

// const bills = [22,295,176,440,37,105,10,1100,86,52];
// const tips = [];
// const totals = [];


// //const calctip2 = bill=> bill>=50&& bill<=300 ? bill*0.15 : bill*0.2;  // solution

// const calcTip = function(billvalue){
//     if(billvalue>=50&&billvalue<=300)
//         return billvalue*0.15
//     else 
//         return billvalue*0.2
// };

// console.log(calcTip(100));

// for(let i=0; i<bills.length; i++){
//     tips.push(calcTip(bills[i]))
//     totals.push(tips[i]+bills[i])
// }
//   console.log(tips,totals)


const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips=[];
const totals=[];
const calcTip=function(billvalue){
    if(billvalue>=50&&billvalue<=300)
    return billvalue*0.15
    else 
    return billvalue*0.2
};

console.log(calcTip(20))

// for(let i=0; i<bills.length; i++){
//     tips.push(calcTip([bills[i]]))
//     totals.push(tips[i]+bills[i])
// }

// console.log(tips,totals)

//solution
for(let i=0;i<bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip+bills[i]);
}
console.log(bills,tips,totals)


// const calcAverage = function(arr){
//     let sum = 0;
//     for(let i =0; i<arr.length;i++ ){
//         // sum = sum + arr[i];
//         sum+= arr[i];
//     }
//     return sum/arr.length;
// }
// console.log(calcAverage([2,3,6]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

const calcaverage = function(arr){
    let sum = 0
    for(let i = 0;i<arr.length;i++){
        sum=sum+arr[i]
    }
return sum/arr.length;
}

console.log(calcaverage(totals));
console.log(calcaverage(tips));
console.log(calcaverage([2,3,4,5]))







 
