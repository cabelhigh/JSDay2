//Purpose: To find the bigger number between two arguments
//Signature: Num1 and Num2, both any number
//Ex:
      //greaterThan(3,4) -> 4
      //greaterThan(6,-2) -> 6
      //greaterThan(-4,-2) -> -2
      //greaterThan(4, 4) -> "The nums are equal u dumb fuck"
      //greaterThan(7, "5") -> idk

/*
function greaterThan(num1, num2){
  //console.log(typeof(num2));
  if(typeof(num1)==='string' || typeof(num2)==='string' ){
    return "One of your inputs is a string!";
  }
  else {
    if(num1===num2){
      return "The numbers are equal! Try again.";
    }
    if(num1>num2){
      return num1;
    }
    else {
      return num2;
    }
  }
}

console.log(greaterThan(3,4));
console.log(greaterThan(6,-2));
console.log(greaterThan(-4,-2));
console.log(greaterThan(4, 4));
console.log(greaterThan(100000000000, "Five"));


*/

/*
Purpse: To transalte HelloWorld into different langauges based on input
Signature: String lang is the languge we wish to translate into
Ex:
      helloWorld("en") -> "Hello World"
      helloWorld("de") -> "Zdraveĭ svyat"
      hellowWorld("FSHD") -> "That's too long to be a langaue!"
      hellowWorld("zz") -> "Language not yet supported!"
*/

/*
function helloWorld(lang){
  if(lang.length>2 || lang.length<=1){
    console.log("That's too long or short to be a language!");
  }
  else {
    switch(lang) {
      case "en":
        console.log("Hello World");
        break;
      case "de":
        console.log("Hallo Welt");
        break;
      case "bg":
        console.log("Zdraveĭ svya");
        break;
      default:
        console.log("Language not yet supported!");
    }

  }
}

helloWorld("en");
helloWorld("de");
helloWorld("bg");
helloWorld("zz");
helloWorld("ZZTop");
helloWorld("Q"); */

/*
Purpose: Takes in a number score and converts it into a grade.
Signature: assignGrade(number) -> String
Ex:
    assignGrade(75) -> "C"
    assignGrade(-3 or 105) -> "Invalid score, enter a grade 0-100"
    assignGrade("C") -> "Invalid parameter, enter a number."
*/

/*function assignGrade(num) {
  if(typeof(num) !== 'number')
    console.log("Invalid parameter, enter a number.");
  else{
    if(num > 100 || num < 0)
      console.log("Invalid score, enter a grade 0-100.");
    else{
      if(num >= 90)
        console.log("A");
      else if(num >= 80)
        console.log("B");
      else if(num >=70)
        console.log("C");
      else if(num >= 60)
        console.log("D");
      else
        console.log("F");
    }
  }
}

assignGrade(95);
assignGrade(85);
assignGrade(75);
assignGrade(65);
assignGrade(2);
assignGrade("C");
assignGrade(105);
assignGrade(-3);
*/

/*
Purpose: Pluralizes words based on number passed.
Signature: pluralize("string", num) -> "string"
Ex:
  pluralize("dog", 2) -> "dogs"
  pluralize("goose", 2) -> "geese"
  pluralize("cat", 1) -> "cat"
  pluarlzie("donkey", 0) -> "donkeys"
  pluarlzie("bird", <0 or NaN) -> "Incompatible input"

*/

/*function pluralize(str, num) {
  if(typeof(str) !== 'string' || typeof(num) !== 'number' || num<0)
    console.log("Incompatible input")

  else{
    if(num===1)
      console.log("1 "+str);
    else {
      if(str==="goose")
        console.log(num + " geese");
      else if(str==="sheep")
        console.log(num+" sheep");
      else if(str==="person")
        console.log(num+" people");
      else
        console.log(num+ " " + str+"s");
    }

  }
}

pluralize("dog", 2);
pluralize("goose", 2);
pluralize("cat", 1);
pluralize("nird",  32);

*/

/*
Purpose: To determine if a num is odd or even
Signature: oddREven() -> void
Ex:
  3 -> ODD
  2 -> even

*/

/*

function oddREven(){
  var i = 0;
  while (i<=15){
    i%2===0 ? console.log(i +" is even") : console.log(i + " is odd");
    i++;
  }
}

oddREven();

*/

/*
Purpose: To determine if a num is divisible by 3 or 5
Signature: threeRFive() -> void
Ex:
  3 -> FIZZ
  5 -> BUZZ
  15 _> FIZZBUZZ

*/

/*
function threeRFive(){
  var i = 1;
  while (i<=100){
    var str = ""+i+ " ";
    if(i%3===0)
      str+="Fizz";
    if(i%5===0)
      str+="Buzz";
    console.log(str);
    i++;
  }
}

threeRFive();
*/

function hiLo(){
    var done = false;
    var superDone = false;
    var userName = prompt("Please enter your name:");
    var lbNums = [3,4,4,4,5,5,5,6,6,7];
    var lbNames = ["Bob", "Jim", "Jane", "Jill", "Jacob", "Joshua", "Jennifer", "Johan", "Jordan", "Jack"];

    while(!superDone){
     alert(printLB(lbNames, lbNums));
     var counter = 1;
     var rand = getRandNum();
      while(!done){
        var p = parseInt(prompt("Guess your number between 1-100! You have " + (8-counter) + " guesses."));

        if(p===-1){
          done=true;
        }
        else if(isNaN(p) || p>100 || p<1){
          alert("You didn't guess a valid number, you lost a guess!");
        }
        else{
          if(rand===p){
            done=true;
            alert(userName + ", you won!");
            lbPlace(userName, counter, lbNames, lbNums);
            break;
          }
          else {
            if(p>rand)
              alert("Ur too hi");
            if(p<rand)
              alert("Ur too LOW");

          }
        }

        if(counter === 7){
          alert("Ya dog, you're out of guesses")
          done = true;
        }
        else{
          counter++;
        }

      }
      alert(printLB(lbNames, lbNums));
    //  superDone=true;
      "No" === prompt("Do you want to play again?") ? superDone =true : done = false;
    }
  }

  function getRandNum() {
    return Math.floor(Math.random() * 100)+1;
  }

  function printLB(lbNames, lbNums){
    var str = "Leaderboards\n\n";
    for(var i = 0; i < 10; i++){
      str+= lbNames[i] + "-----------" + lbNums[i] + "\n";
    }
    return str;
  }
  function lbPlace(userName, counter,lbNames, lbNums){
    var str = "";
    for(var i = 0; i<10; i++)
    {
      if(counter <= lbNums[i]){
        lbNums[i] = counter;
        lbNames[i] = userName;
        alert("You've placed on the leaderboard. Your position is: " + (i+1));
        break;
      }

    }
  }


  hiLo();





  /*
Purpose: Takes in a string from the user, and reverses words that are greater than 5 letters.
Signature: reverseWords("string") -> "string"
Ex:
  reverseWords("Hi there neighbor") -> "Hi ereht robhgien"
  reverseWords("Hi you") -> "Hi you"
  reverseWords("") -> ""
*/

/*
function reverseWords(str) {
  var input = prompt("Enter a sentence to be reversed: ");
  //Checks to see if string is empty
  if(input === "")
    input = prompt("Enter a sentence to be reversed: ");
  else{
    var wordsSplit = input.split(" ");
    console.log(wordsSplit);

    for(var i = 0; i <= wordsSplit.length-1; i++)
    {
      if(wordsSplit[i].length >= 5) {
        wordsSplit[i] = wordsSplit[i].split("").reverse().join("");
        console.log(wordsSplit[i]);
      }
    }
    console.log(wordsSplit.join(" "));
  }
}

reverseWords();

*/

/*
//Version 2
function reverseWords(str) {
  var input = prompt("Enter a sentence to be reversed: ");
  //Checks to see if string is empty
  if(input === "")
    input = prompt("Enter a sentence to be reversed: ");
  else{
    if(input.indexOf(".")===input.length-1){
      console.log(input=input.slice(0, input.indexOf(".")));
    }
    var wordsSplit = input.split(" ");
    console.log(wordsSplit);

    for(var i = 0; i <= wordsSplit.length-1; i++)
    {
      if(wordsSplit[i].length >= 5) {
        wordsSplit[i] = wordsSplit[i].split("").reverse().join("");
        console.log(wordsSplit[i]);
      }
    }
    console.log(wordsSplit.join(" "));
  }
}

reverseWords();

*/
