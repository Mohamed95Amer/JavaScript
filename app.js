var i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);


var myDate = new Date("12 17 1995"),
theYear = myDate.getTime();

console.log(theYear);

// var i , x;
// Mainloop:
// for(i = 1; i < 5;i++){
//   Childloop:
//   for(x=15; x<20; x++){
//     if (x ===19) {
//       break Childloop;
//     }
//     console.log(i+ "=>"+ x);
//   }
// }

// function generateYears(Start,End){
//   "use strict";
//   var years;

//   document.write("<select>");
//   for (years - Start; years <= End;years++){
//     document.write("<option value =\"" + years + "\">" + years + "</option>");
//   }
//   document.write("</select>");
// }

// generateYears(1900,2015);
// generateYears(1950,2010);
// generateYears(1900,2015);



//3ayzen n3ml input






// var myMainString = "I Love JavaScript And JSON",
// mySplittedString = myMainString.split(" ");

// console.log(mySplittedString);

// var myMessage = String.fromCharCode(79,115,97,109,97);
// var myMessage = "            Hello I Love           ",
// myMessage2 = "PHP And JavaScript",
// myAll = myMessage.concat(myMessage2),
// myNewString = myAll.trim();
// console.log(myAll);
// console.log(myNewString);
// console.log("Go search for this words please" + myAll.link("http://www.google.com"))
 
// var myString = "I Love \"JavaScript\"";
// console.log(myString);
// console.log(typeof(myString));
// console.log(myString.length);

// var myNumber = 100;
// console.log(myNumber);
// console.log(typeof(myNumber));
// console.log(myNumber.toString());
// var myNewNumber = myNumber.toString();


// var friends = [
//   "Mahmoud", // 0 Index
//   "Hassan",  // 1 Index
//   "Soha",    // 2 Index
//   "Ahmed" ,  // 3 Index
//   "Zahra",   // 4 Index
//   "Hind",    // 5 Index
//   "Mohamed", // 6 Index
//   "Sayed",   // 7 Index
//   "Ali"      // 8 Index 
// ];
// console.log(friends);

// var specialFriend = friends.indexOf("Hind");
// console.log(specialFriend);
// console.log(friends[specialFriend]);

// document.getElementById("all").innerHTML = "My Friends Are: "+friends; 
// document.getElementById("special").innerHTML = "My Special Friends Are: "+ "<span style='color:blue'>" + friends[specialFriend];

// var otherFriends = [
//   "Saleh",
//   "Ahmed",
//   "Manal"
// ];

// var allFriends = friends.concat(otherFriends);

// console.log(allFriends);

// var friendOne = "Hassan",
// friendTwo = "Soha",
// friendThree = "Ahmed",
// friendFour = "Zahra",
// friendFive = "Hind";

// var friends = [
//   "Hassan",
//   "Soha",
//   "Ahmed",
//   "Zahra",
//   "Hind"
// ];
// console.log(friends.length);

// console.log(friends);

// friends[5] = "Sameh";
// console.log(friends.length);

// console.log(friends);

// friends[6] = "Mohamed";
// console.log(friends.length);
// console.log(friends);

// friends.push("Mostafa", "Basma");
// console.log(friends.length);

// console.log(friends);

// friends.unshift("Yomna");
// console.log(friends.length);
// console.log(friends);

// friends.splice(3,0,"Magdy");
// console.log(friends.length);
// console.log(friends);

// var lastItem = friends.pop();
// console.log(friends.length);
// console.log(friends);

// console.log(lastItem);

// var firstItem = friends.shift();
// console.log(friends.length);
// console.log(friends);

// console.log(firstItem);

// friends.sort();
// console.log(friends);

// friends.reverse();
// console.log(friends);

// friends = friends.toString();
// console.log(friends);

// var myDate = new Date(),
//     myString = myDate.toLocaleString();
//     console.log(myDate);
//     console.log(myString);

// console.log(friends);

// var myVariable = "Hello JavaScript"

// console.log(friends.length);
// console.log(friends);
// friends.length = 2;

/*
var myDiv = document.getElementById("div"),
myInput =document.getElementById("input"),
myCurrency = document.getElementById("currency");


myCurrency.onchange = function(){
  "use strict";
  myDiv.innerHTML ="Worth " + myInput.value * myCurrency.value + " Egyptian Pound";

};







function testParent(){

  "use strict";

      function testChild(){
        var myName = "Mohamed";
        console.log(myName);

            function testGrand(){
              console.log(myName);

                  


            }
            return testGrand();
      }
      return testChild();
}
testParent();



function convertUsdToRiyal(){
  "use strict";

  var amount = document.getElementById("dollar").value,

  result = amount * 3.75,
  message  = document.getElementById("message")
  

}




function calcNumbers(a,b) {
  "use strict";
  
return a * b;

}

var dynamicNumber = prompt("Insert Two Numbers Separated By Comma");

document.getElementById("test").innerHTML= calcNumbers(dynamicNumber);


var myPrice = 40;
if (myPrice > 50) {
  alert("Sorry the price is " + myPrice + " All i have is 50")
} else {
  alert("Good, The price is " + myPrice + " And i have 50")
}

var name = "Hello";
var age = 20;
var weight =30.30;

console.log(name);
console.log(age);
console.log(weight);
console.log("Hello");




// for(var i=1; i<= 1000; i++){
//   if (i % 3 == 0 || i %7 == 0){
//     console.log(i)
//
//   }
//
//
//
//
// }
// var i =1;
// while (i<=10){
//   if (i % 2 ==0){
//     console.log(i**2);
//   } else {
//     console.log(i);
//   }
//   i++;
// }
// var i
//
// for (i=1;i<10;i++){
//   console.log(i);
//   if (i>5){
//     break
//   }
// }

for (i=100;i<200;i++){
  if (i % 7 ==0){
    continue
  }
  console.log(i)
}



console.log(document.forms)

document.write("<h1>Hello!!!!!</h1>")
document.writeln("Hello!!!!!")
document.write("Hello!!!!!")
*/
/*
var hasDiscount = false; 

if (hasDiscount === true) {
  var mainPrice = 350;
}    else{
  var mainPrice = 450
}
document.getElementById("test").innerHTML=mainPrice;

var socialWebsites = ["facebook.com" , "linkedin.com" , "tender.com"]

document.getElementById("test").innerHTML= socialWebsites[0];

var myName = "Mohamed Amer \"Billy\"",
myAge = 26,myCountery = "Egypt";

document.getElementById("test").innerHTML= 
"<span style=\"color:red\">My Name Is: </span>:" + "<span style='color:blue'>" + myName + "</span>" + "<br>"+
"My Age Is: " + myAge + "<br>" +
"My Countery Is: " + myCountery;
*/