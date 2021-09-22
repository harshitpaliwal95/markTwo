const readlineSync = require('readline-sync');

const chalk = require('chalk')

// default score
let score =0;

// for new Line 
function newLine(){
  console.log('\n')
}

// welcome and guide 
function welcome(){
  function guide(){
    console.log(chalk.blue("lets see you are fan of naruto or not \neach right ans will increase your score"));
    console.log("total quiz is " + arr.length)
  }
  let userName = readlineSync.question("enter your name Buddy: ");
  newLine();
  if(userName.length > 0){
  console.log("Hello "+ userName);
  newLine();
  guide();
  newLine();
  }else{
    console.log("Hello KABUTO evil😂👊🏻")
  }
}


// current score 
function currentScore(score){
  console.log("current score is " + score);
}

function finnalScore(score){
  console.log(chalk.black.bgWhiteBright("your finnal score is " + score));
}



// high score 
function highScore(){
  console.log("Harshit is the true fan of Naruto \nhis score is 100%")
  console.log("ping me if you are 2nd best ")
}


let arr = [
  {que:"1. Who is naruto's first teacher \nOptions: \na.Iruka \nb.kakashi \nc.tannay bhaiya \n",ans:"iruka"},
  {que:"2. Who is naruto's rival \nOption: \na.sasuke \nb.sakura \nc.rocklee \n",ans:"sasuke"},
  {que:"3. Who kill itachi \nOption: \na.sasuke \nb.neji \nc.might-guy \n",ans:"sasuke"},
  {que:"4. Who is naruto's father \nOption: \na.minato \nb.jiraya \nc.iruka \n",ans:"minato"},
  {que:"5. Who is kakashi's best friend \nOption: \na.asuma \nb.konoha \nc.might-guy \n",ans:"might-guy"},
  {que:"6. who is most hated character \nOption: \na.danzo \nb.orochimaru \nc.madara \n",ans:"danzo"},
  {que:"7. who is gost uchiha \nOption: no option needded😂 \n",ans:"madara"}
]

// main Q/A
function play(){
  for(let i=0;i < arr.length;i++){
    let userAns = readlineSync.question(arr[i].que);
    if(userAns.length > 0){
      if(userAns.toLowerCase() === arr[i].ans){
        console.log(chalk.cyan("yeah!! correct "))
        score++;
        currentScore(score);
        newLine();
      }else{
        console.log(chalk.white.bgRed("wrong"));
        console.log("correct ans is " + chalk.green(arr[i].ans));
        currentScore(score);
        newLine();
      }
    }else{
      i--
      console.log(chalk.black.bgYellow("write something"))
      newLine();
    }
  }
}


// for result
function result(){
  if(score > arr.length/2){
    console.log("you are true fan of naruto " + chalk.cyanBright("you the best"));
    finnalScore(score);
    newLine();
  }else{
    console.log("you need to watch naruto 😂👊🏻")
    finnalScore(score);
    newLine();
  }
}

// function calling
welcome();
play();
result();
highScore();
