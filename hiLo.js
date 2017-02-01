var lbNums = [3,4,4,4,5,5,5,6,6,7];
var lbNames = ["Bob", "Jim", "Jane", "Jill", "Jacob", "Joshua", "Jennifer", "Johan", "Jordan", "Jack"];

function hiLo(){
    var done = false;
    var superDone = false;
    var userName = prompt("Please enter your name:");

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

  function printLB(){
    var str = "<h1>Leaderboards</h1>";
    for(var i = 0; i < 10; i++){
      str+="</br><p>" + lbNames[i] + Array(10).join('<span class="j">-</span>') + lbNums[i] + "</p>";
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


//  hiLo();
