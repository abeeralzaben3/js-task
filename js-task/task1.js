'use strict'
//
let x = 1000;
let y = 500;
let Cashflow = x/y;
console.log("Cashflow=x/y", Cashflow);
// Net Income 
let r = 1000;
let e = 500;
let Income = r-e;
console.log("Income=x/y",Income);
// Total assets
let liabilities = 1000;
let equity = 500;
let sum = liabilities + equity;

console.log("sum = liabilities + equity",sum);

// Net income (using profit margin and sales)
let profit =1000;
let sales =500;
let Income2 = r*e;
console.log("Income2=x*y",Income2);
// Average
let n1 =7;
let n2 =9;
let n3 =2;
let Average = (n1+n2+n3)/3;
console.log("Average = n1+n2+n3/3",Average);
// Discount
let price = 150;
let discount = 30;
let finalPrice = price - (price * discount / 100);
console.log("finalPrice = price - (price * discount / 100)",finalPrice);
// Age limit
let age = 20;
let isEligible = age > 18 && age < 30;
console.log(isEligible);
// Exponential
let base = 2;
let exponent = 3;
let exponential = base ** exponent;
console.log(exponential);
// Remainder
let num1 = 10;
let  num2 = 4;
let remainder = num1 % num2;
console.log(remainder);
//string methods
//part 1
let str_val = "Welcome to Orange";
console.log("str_val=",str_val.toUpperCase());
console.log("strsubstring=",str_val.substring(8, 10).toUpperCase());
console.log("strsubstring=", "Hello from " + str_val.substring(11));
console.log("strlower=", str_val.toLowerCase());
console.log("strlength=", str_val.length);
console.log("strreplace=", str_val.replace("Orange", '"Orange"'));
console.log("strreplace=", str_val.replace("Orange", "Orange Jordan"));
//part 2
let word   = "cactus";
let first  = word[0];
let result = word[0] + word.slice(1).replaceAll(first, "*");
let array  = ["Coding", "Academy", "By", "Orange"];
let arr    = ["Coding", "Academy", "By", "Orange"];
// to make sure he store the value 
console.log("result=", result);
// ["Coding", "Academy", "By", "Orange", "Jordan"]
console.log([...arr, "Jordan"]);

// ["Coding", "Academy"]
console.log(arr.slice(0, 2));

// ["Welcome", "To", "Coding", "Academy", "By", "Orange"]
console.log(["Welcome", "To", ...arr]);

// ["Academy", "By", "Orange"]
console.log(arr.slice(1));

// "Coding Academy By Orange"
console.log(arr.join(" "));

// ["Coding", "Academy", "By", "Orange"]  
console.log([...arr]);

// ["Coding", "Orange"]
console.log([arr[0], arr[3]]);


var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop(); // ["carrot", "tomato", "pepper"]


fruit.shift(); // ["apple", "orange", "watermelon"]

let orangeIndex = fruit.indexOf("orange"); // 1


fruit.push(orangeIndex); // ["apple", "orange", "watermelon", 1]


let vegLength = vegetables.length; // 3

vegetables.push(vegLength); // ["carrot", "tomato", "pepper", 3]


let food = fruit.concat(vegetables);
// ["apple", "orange", "watermelon", 1, "carrot", "tomato", "pepper", 3]


food.splice(4, 2); 


food.reverse();


let foodString = food.toString(); 
console.log(foodString);

function checkEligibility(birthYear) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;

  if (age > 60) {
    console.log("You may join the seniors' program.");
  } else if (age > 30) {
    console.log("You are not eligible. You may join other programs.");
  } else if (age >= 18 && age <= 30) {
    console.log("You are eligible. Start your application.");
  } else {
    console.log("You may join the kids' program.");
  }
}
