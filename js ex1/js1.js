//Q1
function myage(birthyear,futureyear){
    return age=futureyear-birthyear;}
    myage(2021,2036);


let display1= 'I will be either ' + (age-1) + ' or ' + (age);
    console.log(display1);

//02

function cToF(celsius) 
{
    return far1=(celsius*9)/5+32;}
    let x=cToF(18);

let f= x+"\xB0"+"C"+" " +"is"+" "+far1+"\xB0"+"F";
console.log(f);


function FToc(fahrenheit) 
{
    return far2=(fahrenheit-32)*8/9;}
    let z=FToc(38);

let g= z+"\xB0"+"C"+" " +"is"+" "+far2+"\xB0"+"F";
console.log(g);


//03
let y=18;
if (y>=75){
    results="A"
}
else if(y>=60){results="B"
}
else if(y>=45){results="C"}
else {results="F"}

console.log(results);

//4
function getMonthString(num)
    {

      var month;   
      switch(num)
      {
        case 0:
          month="January";
          break;
        case 1:
          month="February";
          break;
        case 2:
          month="March";
          break;
        case 3:
          month="April";
          break;
        case 4:
          month="May";
          break;
        case 5:
          month="June";
          break;
        case 6:
          month="July";
          break;
        case 7:
          month="August";
          break;
        case 8:
          month="September";
          break;
        case 9:
          month="October";
          break;
        case 10:
          month="November";
          break;
        case 11:
          month="December";
          break;
        default:
          month="Invalid month";
      }
      return month;
    }
    theDate = new Date();
    document.write("The month is ",getMonthString(theDate.getMonth()));
    //05
    for (var i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i + ' is even');
        } else {
            console.log(i + ' is odd');
        }
    }
//06
const number = parseInt(prompt('Enter a positive integer: '));
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}


else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
//07
const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');

let min = (num1 > num2) ? num1 : num2;
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}








  






