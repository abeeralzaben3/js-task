// the for loop 
/*the classic loop . its has three paretrs inside the parantheses , separated by semecolom 
for (start ; condition ;step ) {
..... }
start:runs once at the begging (usualy counter)
conditional : cheaked befour each round ,  loop runs while its true 
step : run at the end of each round (usualy i++ add 1) 
i++ means "increase i by 1"read the loop below as :
start at 1 keep gowing i is a 8 or less , add 1 eacg time*/
for (let i =1 ; i<=8 ; i++){
    console.log(`the current number is + ${i}`);
    //will print numbers 1,2,3,..8
}
//the , looping over in array with for , loop 
// array are numbring list and at numbruing (index) start at 0 , not 1 
// so the first planet is [0]
//.lenth give how many items are in the array , we will loop from index 0 to lenght -1 
const planets =["Merecury" , "venus" , "earth" , "mars"];

for (let i =0 ; i<planets.length; i++){
    console.log(i+ 1 + planets[i] );
}
//wihle loop  
//use it whem you dont khnow the number for round in advance , 
//only a condition keep goind 
//waring : you must changed some time 
let fuel = 5;
while (fuel > 0) {
    console.log("lunshing , fuel left"+ fuel );
    fuel--;
}  //runs 5 times 
