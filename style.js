alert("My JS Mathematics");
//google font
document.write(`
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif; /* Font ko apply karna */
        }
        .styled-text {
            font-size: 30px; /* Text size */
            color: blue;     /* Text color */
        }
    </style>
`);


//Q:1 1. Write a program that take two numbers & add them in a
//new variable. Show the result in your browser.

var num1 = 3;
document.write(`1)  num1=${num1}<br>`);
var num2 = 5;
document.write(`2) num2=${num2}<br><br><br>`);

var add_num = num1 + num2;
document.write(`A) Sum of 3 & 5 is ${add_num}.</br> `);

//Q:2. Repeat task1 for subtraction, multiplication, division & modulus

var num1 = 3;
var num2 = 5;

var sub_num = num1 - num2;
document.write(`B) Sub of 3 - 5 is ${sub_num}.</br> `);

var mult_num = num1 * num2;
document.write(`C) Mult of 3 * 5 is ${mult_num}.</br> `);

var divi_num = num1 / num2;
document.write(`D) Divi of 3 / 5 is ${divi_num}.</br> `);

var modul_num = num1 % num2;
document.write(`E) Modul of 3 % 5 is ${modul_num}.</br></br>`);

//Q:3. Do the following using JS Mathematic Expressions
 
//A:Declare a variable
var myAge 

//b. Show the value of variable in your browser like “Value
//after variable declaration is: ??”.
document.write(`Value after variable declaration is:Undefined.</br> `);

//c. Initialize the variable with some number
var myAge = 5;

//d. Show the value of variable in your browser like “Initial
//value: 5”.
document.write(`Initial value:5 .</br> `);

//e. Increment the variable.
var myAge = 5;
var myNewAge = myAge;
myNewAge++;
console.log(myNewAge);

//f. Show the value of variable in your browser like “Value
//after increment is: 6”.
document.write(`Value after increment is : 6. </br> `);

//g. Add 7 to the variable.
var num1 = 6;
var num2 = 7;

//h. Show the value of variable in your browser like “Value after addition is: 13”
var add_num = num1 + num2;
document.write(`Value after add (7) is ${add_num}.</br> `);

//i. Decrement the variable.
var myAge = 13;
var myNewAge = myAge;
myNewAge--;
console.log(myNewAge);

//j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write(`Value after decrement is : 12. </br> `);

//k. Show the remainder after dividing the variable’s value by 3. 
var remainder = 12 % 3;

//l. Output : “The remainder is : 0”.
document.write(`The remainder is : 0. </br></br> `);




//Q4:. Cost of one movie ticket is 600 PKR. Write a script to store
//ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

var num1 = 600;
var num2 = 5;
console.log(num1 * num2);

var mult_num = num1 * num2;
document.write(`Total cost to buy 5 tickets to a movie is "3000PKR".</br></br>`);


//Q5:. Write a script to display multiplication table of any number in your browser. E.g

var table = prompt("Write a number to print table.");
 document.write(`<h2>Table Of</h2> ${table}`);
 document.write(`${table} X 1 = ${table*1} </br>`);
 document.write(`${table} X 2 = ${table*2} </br>`);
 document.write(`${table} X 3 = ${table*3} </br>`);
 document.write(`${table} X 4 = ${table*4} </br>`);
 document.write(`${table} X 5 = ${table*5} </br>`);
 document.write(`${table} X 6 = ${table*6} </br>`);
 document.write(`${table} X 7 = ${table*7} </br>`);
 document.write(`${table} X 8 = ${table*8} </br>`);
 document.write(`${table} X 9 = ${table*9} </br>`);
 document.write(`${table} X 10 = ${table*10} </br></br>`);


 //6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.

 //a. Store a Celsius temperature into a variable.
 var cT = 10;

 //b. Convert it to Fahrenheit & output “NNoC is NNoF”.
 document.write(`${cT}C is ${(cT*9/5)+32}F </br>`);

 //c. Now store a Fahrenheit temperature into a variable.
 var fT = 20;

 //d. Convert it to Celsius & output “NNoF is NNoC”.
 document.write(`${fT}F is ${(fT-32)*5/9}C`);

 //7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
 document.write(`<h1> Shopping Cart</h1>`);

 var item1 = 650;
 var quantityItem1 = 3;
 var mult_num1 =  item1 * quantityItem1;

 document.write(`Price of item 1 is 650 <br>`);
 document.write(`Quantity of item 1 is 3 <br>`);

 var item2 = 100;
 var quantityItem2 = 7;
 var mult_num2 =  item2 * quantityItem2;

 document.write(`Price of item 2 is 100 <br>`);
 document.write(`Quantity of item 2 is 7 <br>`);
 document.write(`Shipping charges 100 <br><br>`);



 var shipCharges = 100

 let sum = `${mult_num1 + mult_num2 +  shipCharges }`;
 console.log(sum);

 document.write(`<b> Total cost of your order is ${sum}</b><br>`);


 //8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
 var totalMarks = 980;
 var obtndMarks = 804;
 var percnt =  ( obtndMarks / totalMarks )* 100;
 console.log(percnt);
 
 document.write(`<h1> Marks Sheet</h1>`);
 document.write(`Total marks: 980 <br>`);
 document.write(`Marks obtained: 804 <br>`);
 document.write(`Percentage:${percnt}% <br>`);

 //9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
//script to convert the total currency to Pakistani Rupees.
//Perform all calculations in a single expression.
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
//and 1 Saudi Riyal = 28 Pakistani Rupee)

// Amounts  USD and SAR
var dollars = 10;
var riyals = 25;

// Exchange
var usdToPkr = 104.80;
var sarToPkr = 28;

// Total in Pakistani Rupees
var totalInPkr = (dollars * usdToPkr) + (riyals * sarToPkr);

console.log(`Total amount in Pakistani Rupees: ${totalInPkr}`);
document.write("<h1>Currency in PKR!</h1>");
document.write(`Total currency in PKR : ${totalInPkr}RS.`);

//10. Write a program to initialize a variable with some
//number and do arthmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression

var expression = ((10 + 5) * 10 ) / 2;
console.log(expression); 

document.write(`<h1>Aethmetic Calculation</h1>`);
document.write(`${expression}`);

//11. The Age Calculator: Forgot how old someone is? Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored values

var currentYear = 2024;
var birthYear = 2001;
var yourAge1 =  currentYear -  birthYear;
   console.log(yourAge1);

var curentYear = 2023;
var brthYear = 2001;
var yourAge2 =  curentYear -  brthYear;
      console.log(yourAge2);

document.write(`<h1>Age Calculator</h1> `);
document.write(`Current year: ${currentYear}</br>`);
document.write(`Birth year: ${birthYear}</br>`);
document.write(`Your age1: ${yourAge1}`);

document.write(`<h2>OR</h2>`);

document.write(`Current year: ${curentYear}</br>`);
document.write(`Birth year: ${brthYear}</br>`);
document.write(`Your age2: ${yourAge2} </br>`);

document.write(` “They are either ${yourAge1}  or ${yourAge2} years old”.`);

//12. The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and output “The circumference is NN”.
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
//Calculate the area based on the radius, and output “The
//area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;
var pai = 3.142;
var circumference = (2 * pai * 20);
var area = (pai * radius * 2); 

document.write(`<h1>The Geometrizer</h1>`);
document.write(`Radius of a circle is: ${radius} </br>`);
document.write(`The circumference is: ${circumference}</br>`);
document.write(`The area is: ${area}`);


//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
//Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of your life.
//Output the result to the screen like so: “You will need
//NNNN to last you until the ripe old age of NN”.

var fvrtSnak = "meggi";
var currentAge = 15;
var maximumAge = 65;
var perDay = 3;
var totalAmount = (3 * 50);

document.write(`<h1>The Lifetime Supply Calculator:</h1> `);
document.write(`Favorite snacks: Meggi.</br>`);
document.write(`Current age: ${currentAge}</br>`);
document.write(`Estimated maximum age: ${maximumAge}</br>`);
document.write(`Amount of snaks per day : ${perDay} </br>`);
document.write(`“You will need ${totalAmount} to last you until the ripe old age of 65”.`);












 