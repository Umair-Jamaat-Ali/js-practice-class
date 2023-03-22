// js practice

// data types

//1 string data which used for alphabetics and its always writtien in double qotation (""), for exmple

var userName = "umair jamaat Ali";

// console.log is used to show results in inspect 'console',, its save data ram boxes in randomly

console.log("User name is ", userName);

// 2 numberic data awhich used for numeric, for example

var userNumber = 04350712423;
console.log("User number is ", userNumber);


// 3 floating data which is used for decimal, for example

var dici = 45.76
console.log("Decimal number is ", dici);

// alert is used for special message to the user

alert("Thanks for visiting this page");
console.log(alert);

// math operations 
// sum opertion

var sum = 4+7;
console.log("sum is =>", sum);

// subsract operation

var subs = 4-7;
console.log("subsract is =>", subs);

// multiple operation

var multi = 4*7;
console.log("multiple is =>", multi);

// division operation

var divi = 56/9;
console.log("division is ", divi)

// modulues operation

var mod = 5%3;
console.log("modules is ", mod);

// math operation used in an equations

var q = 5 + 6 * 3 - (65 / 13);
console.log("Result is =>", q);


var q1 = (9 -3) * (9 + 3);
console.log("Result 1 is =>", q1);

// true and false operations
var q2 = 5 >2
console.log("Result 2", q2);

var q3 = 6<2
console.log("Result 3", q3);

var q4 = 4==3;
console.log("Result 4", q4);

var q5 = 4!=8;
console.log("result 5", q5)

// write a program that prompt, which enter a number and check the result is true or false

var number = prompt("Enter a number");

var q6 = number>7;
console.log("Result 6", q6);

// write a program for taking square 

var number1 = prompt("Enter a number who taking square");

var q7 = number1 * number1;
console.log("Result 7", q7);

// write a program for taking square root

 //var number2 = prompt("Enter a number who taking square root");

var q8 = Math.sqrt(q7);

console.log("Result 8", q8);


// And operation and it's written in javascript (&&)
// T T = T
// T F = F
// F T = F
// F F = F

var x = 6<8 && 5==5;
console.log("Result of x", x);

var x1 = 6>3 && 5==9
console.log("Result of x1", x1);


var x2 = 5>8 && 9==9
console.log("result of x2", x2);


var x3 = 4<6 && 7>9
console.log("Result of x3", x3);


// OR operation and it's written in javascript (||)
// T T = T
// T F = T
// F T = T
// F F = F

var y = 6<8 || 5==5;
console.log("Result of y", y);

var y1 = 6>3 || 5==9
console.log("Result of y1", y1);


var y2 = 5>8 || 9==9
console.log("result of y2", y2);


var y3 = 4<6 || 7>9
console.log("Result of y3", y3);