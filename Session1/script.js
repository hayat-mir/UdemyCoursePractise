/*let js = 'amazing';

console.log(40 + 23 - 10);
console.log("Hayat");
console.log(23);

console.log(js)
const now = 2023;
const ageHayat = now - 1998;

const ageSarah = now - 1999;
console.log(ageHayat, ageSarah);
console.log(ageHayat * 2, ageSarah / 3, 2 ** 3)
const firstName = 'Hayat';
const lastName = 'Mir';
console.log(firstName + ' ' + lastName);
//Assignment operators
let x = 10 + 5;
x += 10;//x=x+10=25
x *= 4;
x++; //x=x+1
x--; //x=x-1
x--;
console.log(x);

console.log(ageHayat > ageSarah);

console.log(ageHayat < ageSarah);
console.log(ageSarah >= 22);


const marksWeight = 78, marksHeight = 1.69;
const johnWeight = 92, johnHeight = 1.95;
const bmiMarks = marksWeight / marksHeight ** 2;
console.log(bmiMarks);
const bmiJohn = johnWeight / johnHeight ** 2;
console.log(bmiJohn);
const markHeigherBMI = bmiMarks > bmiJohn;
console.log(markHeigherBMI);



const marksMass = 95, marksheight = 1.88, johnMass = 85, johnheight = 1.76;
const bmimarks = marksMass / marksheight ** 2, bmijohn = johnMass / (johnheight * johnheight);
const markHeigherbmi = bmimarks > bmijohn;
console.log(bmimarks, bmijohn, markHeigherbmi);




const firstName = 'Hayat';
const profession = 'developer';
const birthYear = 1998;
const year = 2023;
const hayatNew = `I'am  ${firstName}, a ${birthYear - year} year old  ${profession}!`;
console.log(hayatNew);
console.log(`this is
multiline
string`);

const age = 17;
if (age >= 18) {
    console.log(`Sarah  can start driving 🚗`);
} else {
    const yearLeft = 18 - age;
    console.log(`sarah is too young.Wait another ${yearLeft} years`);
}


const birthyear = 2000
let century;
if (birthyear >= 2000) { century = 21 }
else {
    century = 20
}
console.log(century);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn ** 2);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`mark's BMI (${BMIMark}) is higher then John's BMI (${BMIJohn})`)
} else {
    console.log(`John's BMI ${BMIJohn} is higher then Mark's BMI ${BMIMark} `)
} 

let n = '1' + 1; // + operator automatically converts no. into string
n = n - 1; // - and * converts the string into no.
console.log(n); 
//falsy values 0, '',null,NaN, undefined they get auto convertd to false
const money = 0;
if (money) {
    console.log("you should not spend all of your money");
} else {
    console.log('you should get a job!');
}


const age = 18;
if (age === 18) console.log('you just became adult');
const age = '18';
if (age === 18) console.log('you just became adult'); //strictly comparison operator

const age = '18';
if (age == 18) console.log('you just became adult'); //loosly comparison operator


const fav = prompt("what's your name?");
console.log(fav);

//IMPORTANT EXPERIMENT
const name = prompt("what's your name?");
const messages = [
    "you mean HOME",
    "Thats a COOL Name",
    "that means forever",
    "YOU MEAN 🦓",
    
];
const rndmIndex = Math.floor(Math.random() * messages.length);

if (name == 'HAYAT') {
    window.alert(messages[rndmIndex]);

} else if (name == 'hayat') {
    window.alert("BORING name  😒 ");
} else if (name == 'abc') {
    window.alert("Did you say 'HOME' ");
} else
    window.alert("SORRY this site is not for you BYE!! 🖐️ ");
    


const hasDriverlic = true;
const hasGoodvision = true;

// if (hasDriverlic && hasGoodvision) {
//     console.log("sarah can drive...");
// } else {
//     console.log("someone else should drive");
// }
const isTired = true;
console.log(hasDriverlic && hasGoodvision && !isTired);
if (hasDriverlic && hasGoodvision) {
    console.log("sarah can drive...");
} else {
    console.log("someone else should drive");
} 



const scoreDolphins=(96+108+89)/3;
const scoreKoalas =(88+91+110)/3;

if(scoreKoalas>scoreDolphins){
    console.log("Koalas win the trophy");
} else if(scoreDolphins===scoreKoalas){
    console.log("Both wins the trophy");
}else if(scoreDolphins>scoreKoalas){
    console.log("Dolphins win the trophy");
}

const day = 'saturday';
switch (day) {
    case 'monday':
        console.log("go to collage");
        break;
    case 'tuesday':
        console.log("go to gym");
        break;
    case 'wednesday':
        console.log("go for swimming");
        break;
    case 'thursday':
        console.log("go for a picnic");
        break;
    case 'friday':
        console.log("go for friday prayer");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid Day");
}

let age = 11;
const drink = age >= 18 ? 'abc' : 'water';
console.log(drink);
*/
const bill = 400;
// const fValue = bill > 50 > 300 ? ' (bill) + 15 % ' : '${ bill } +20 % ';
// console.log(fValue);
// console.log(`the bill value is ${bill},the tip is ${(bill > 50 > 300 ? ' (bill) + 15 % ' : '${ bill } +20 % )},and the final value is ${fValue}`);

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip},and the final value  ${bill + tip}`);

