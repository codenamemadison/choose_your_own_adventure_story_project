//*  GLOBAL VALS*/
var index = 0

function toggle(on, elem) {
  if (on) {
    elem.style.display = "inline"
  } else {
    elem.style.display = "none"
  }
}

function setTeam(teamChosen) {
  // storing team in session storage to pass over to next HTML page
  sessionStorage.setItem("team", teamChosen)
} // sets team

/* storing ending text in session storage to pass over to next HTML page
and then open end page
*/
function setEnding(string) {
    sessionStorage.setItem("Ending", string)
    document.location='ending.html'
}

// indicate if a security breach is t/f
function setSecBreach(sb) {
  // storing security breach boolean in session storage to pass over to next HTML page
  sessionStorage.setItem("secBreach", sb)
}


// opens end page and grabs end message
function END() {
  // getting end message value from previous HTML page
  var ending = sessionStorage.getItem("Ending")
  document.getElementById("endMessage").innerHTML = ending
}

function incr(num) {
  var x = sessionStorage.getItem("invasive")
  x = parseInt(x) + num
  sessionStorage.setItem("invasive", parseInt(x))
} // increment points
function setAccuracy(a) { sessionStorage.setItem("acc", a)} // set accuracy
function setGen(b) { sessionStorage.setItem("gender", b)} // indicate if gen. inclusivity is t/f
function setRa(b) { sessionStorage.setItem("race", b)} // indicate if racial inclusivity is t/f
function setInv() { sessionStorage.setItem("invasive", 0)}


// SCENE 2
function scene2() {index = 0}

function next2() {
  // next button for scene 2
  var plotMessages = ['"Hey, our company is working on an advanced home security' +
  ' system. Would you like to be it\'s product manager?"',

  "You have the choice to manage the company's newest product. Will you accept?"]

  var textBox = document.getElementById("textBox")
  var choices = document.getElementById("choices")
  var choice2 = document.getElementById("choice2")
  var next = document.getElementById("nextButton")

  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    toggle(true, choices)
  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }

  choice2.setAttribute("onClick", "setEnding('Since you decided not to take" +
  " on the project your boss gave the position to your work rival, the" +
  " project was incredibly successful and now your rival is rich. Maybe" +
  " next time take a leap of faith and go a little outside your comfort" +
  " zone and take that project.')")
}


// SCENE 3
function scene3() {index = 0}

function next3() {
  // next button for scene 3
  var plotMessages = ["Who will you choose to get the job done?"]
  var textBox = document.getElementById("textBox")
  var choices = document.getElementById("choices")
  var choice1 = document.getElementById("choice1")
  var choice2 = document.getElementById("choice2")
  var choice3 = document.getElementById("choice3")
  var next = document.getElementById("nextButton")

  // team chosen is stored and affects future decisions and events
  choice1.setAttribute("onClick", "setTeam('friends'); document.location= 'scene4.html'")
  choice2.setAttribute("onClick", "setTeam('random'); document.location= 'scene4.html'")
  choice3.setAttribute("onClick", "setTeam('boss'); document.location= 'scene4.html'")

  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    toggle(true, choices)
  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }
}


// SCENE 4
function scene4() {
  index = 0

  // getting team value from previous HTML page
  var team = sessionStorage.getItem("team")
  // display corresponding team image
  if (team == 'friends' || team == 'random') {
    document.getElementById("diverse_silhouettes").style.display = "block"
  } else { // if hired boss' friends
    document.getElementById("nondiverse_silhouettes").style.display = "block"
  }
}


function next4() {

  // next button for scene 4
  var plotMessages = []

  var b = " Luckily, your Boss' friends are well" +
          " connected and you are easily able to find investors through them. "
  var rf = "Even though you are getting some financial support from your parent " +
          "company, you still need more funds. What will you do?"

  // getting team value from previous HTML page
  var team = sessionStorage.getItem("team")
  // team affects fundraising
  if (team == "boss") { plotMessages.push(b)}
  else { plotMessages.push(rf)}

  var textBox = document.getElementById("textBox")
  var choice1 = document.getElementById("choice1")
  var choice2 = document.getElementById("choice2")
  var choice3 = document.getElementById("choice3")
  var choice4 = document.getElementById("choice4")
  var next = document.getElementById("nextButton")

  // storing ending text in session storage to pass over to next HTML page
  choice1.setAttribute("onClick", "setEnding('Sadly, your idea of a kickstarter for the project funds was" +
  " unsuccessful. Even with the starter money, you were unable to meet any deadlines," +
  " and you were barely able to get this project off the ground.')")
  choice2.setAttribute("onClick", "setEnding('Really, not cool. Falsely advertising as a non-profit organization " +
  " is a different kind of low. Thanks to your brilliant idea, your entire company " +
  " is under federal investigation, and your teammates have landed a long visit in " +
  " prison. You did technically raise enough funds for your project, so congrats?')")

  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    if (team == "boss") {
      toggle(true, choices)
      toggle(true, choice4)
      toggle(false, choice1)
      toggle(false, choice2)
      toggle(false, choice3)
    }
    else {
      toggle(true, choices)
      toggle(false, choice4)
    }

  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }
}

// SCENE 5
function scene5() {index = 0}

function next5() {
  // next button for scene 5
  var plotMessages = ["You can decide to " +
  " use either a manual system, which you would need to turn on and off on your own and can also " +
  " have errors... ", "...or you can use a system with AI so that it automatically detects " +
  " checks the police database and sees if the right person is entering the home.",
  "Which system do you want to choose?"]

  var textBox = document.getElementById("textBox")
  var choices = document.getElementById("choices")
  var next = document.getElementById("nextButton")
  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    toggle(true, choices)
  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }

  choice2.setAttribute("onClick", "setEnding('Staying with a reliable system." +
  " Not bad. However, you promised high grade tech, and this simply did not deliver.')")
}


// SCENE 6
function scene6() {
  index = 0
  setInv()
}

function next6() {
  // next button for scene 6
  var plotMessages = ["...use facial recognition via live cameras so that the system " +
  " scans each person's face they encounter nearby and requires a person's face " +
  " scan set up in-person...",
  "...or you can use facial recognition also via photos," + " allowing you to add people to a list of " +
  " welcomed guests for future meet-ups at your home without prior" +
  " set up.", "Which facial recognition method" +  " will you choose?"]

  var textBox = document.getElementById("textBox")
  var choices = document.getElementById("choices")
  var next = document.getElementById("nextButton")
  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    toggle(true, choices)
  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }
}

// SCENE 7 HAS ONE LINE OF TEXT; NEXT BUTTON NOT NEEDED
function scene7() {index = 0}

// SCENE 8
function scene8() {index = 0}

function next8() {
  // next button for scene 8
  var plotMessages = ["...owners only in which the system would only know" +
  " the fingerprints of the owners and eliminate any possible confusion with anyone else...", "...or " +
  " should we partner with Apple so that we can easily allow users' whole families to access the controls " +
  " of the systems by connecting their Apple devices to the system to access for their fingerprints. " +
  " If you score an Apple partnership, your product would be able to access a" +
  " database of all fingerprints of all Apple users that have used Touch ID to get the information needed.",
  "What do you decide?"] // text + 2 exp. + question


  var textBox = document.getElementById("textBox")
  var choices = document.getElementById("choices")
  var next = document.getElementById("nextButton")
  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    toggle(true, choices)
  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }
}


// SCENE 9
function scene9() {index = 0}

function next9() {
  // next button for scene 9
var plotMessages = ["By using the police database, you will open up many new possibilities for extra safety features, possibly" +
" convincing more people to buy your product.", "However, using the database is not a priority, and it" +
" seems slightly invasive and unnecessary.", "Do you decide to use the police, or not?"]

choice1.setAttribute("onClick", "incr(1); document.location='scene10.html'")

  var textBox = document.getElementById("textBox")
  var choices = document.getElementById("choices")
  var next = document.getElementById("nextButton")
  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    toggle(true, choices)
  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }
}


// SCENE 10
function scene10() {index = 0}

function next10() {
  // next button for scene 10
  setGen(true)
  setRa(true)
  setAccuracy("Accurate half of the time")
  var plotMessages = ["The AI is unable to recognize human faces.", "Testing is needed; " +
  " how do you go about this?"]

  choice1.setAttribute("onClick", "document.location='scene11.html'")
  choice2.setAttribute("onClick", "document.location='scene17.html'")
  choice3.setAttribute("onClick", "setAccuracy('Fully Accurate'); document.location='scene20.html'")

  var textBox = document.getElementById("textBox")
  var choices = document.getElementById("choices")
  var next = document.getElementById("nextButton")
  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    toggle(true, choices)
  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }
}

// SCENE 11
function scene11() { index = 0}

function next11() {
  // next button for scene 11

  // getting team value from previous HTML page
  var team = sessionStorage.getItem("team")

  var plotMessages = []
  if ( team == 'boss' ) { plotMessages.push("Since your team consists of the boss' friends, who" +
                              " are mostly white and male, the facial recognition" +
                              " only works some of the time.")}
  else { plotMessages.push("Since your team is a diverse bunch, the facial recognition seemed to have worked" +
                              " fully for the most part.")}

  plotMessages.push("Regardless, since the sample size was too small," +
  " the AI frequently could not differentiate between two people of the same race.")

  if ( team == 'boss' ) { plotMessages.push("This problem happened more" +
  " frequently with POC since your team is mostly white.")}

  plotMessages.push(" You still want to make the system fully accurate but there is a deadline.")

  if ( team == 'boss' ) { plotMessages.push("Your team personally doesn't feel the " +
  "need to change much but this could be due to their biases. Since most of" +
  " the team is white, they aren't directly affected and are not as inclined to deal with the issue.")}
  else { plotMessages.push("Your team personally feels like this is an important issue" +
  " to resolve since it affects people like them.")}

  plotMessages.push("What do you do?")

  var a = ["document.location='scene12.html'", "document.location='scene11b.html'"]
  var r = Math.floor(Math.random() * 2) //random index

  /* where each button goes next */
  choice1.setAttribute("onClick", "setRa(false); setAccuracy('Somewhat Accurate'); document.location='scene13.html'")
  choice2.setAttribute("onClick", "setAccuracy('Mostly Accurate'); document.location='scene13.html'")
  // whether or not you are given an extension is a randomized outcome
  choice3.setAttribute("onClick", a[r])

  var textBox = document.getElementById("textBox")
  var choices = document.getElementById("choices")
  var next = document.getElementById("nextButton")
  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    toggle(true, choices)
  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }
}

// SCENE 11b HAS ONE LINE OF TEXT; NEXT BUTTON NOT NEEDED

// SCENE 12
function scene12() {
  index = 0
  setRa(true)
  setAccuracy('Fully Accurate')
}

function next12() {
  // next button for scene 12
var plotMessages = ["While running more tests," +
" one of the software engineers noticed there’s an small security issue that could" +
" put some of the private information being collected at risk of being easily breached." +
" However, your boss has informed you that you have a deadline to finish the final" +
" product to show investors who would launch the product soon.", "You can decide to rush and" +
" fix the bugs, although theres no guarantee the issue will be solved.", "You can instead" +
" do nothing, and focus on finishing the remainder of the project to ensure that there are no other issues.",
" What do you want to do?"]

  var textBox = document.getElementById("textBox")
  var choices = document.getElementById("choices")
  var next = document.getElementById("nextButton")
  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    toggle(true, choices)
  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }
}


// SCENE 13
function scene13() {index = 0}

function next13() {
  // next button for scene 13
var plotMessages = ["While running more tests," +
" one of the software engineers noticed there’s an small security issue that could" +
" put some of the private information being collected at risk of being easily breached." +
" However, your boss has informed you that you have a deadline to finish the final" +
" product to show investors who would launch the product soon.", "You can decide to rush and" +
" fix the bugs, although there\'s no guarantee the issue will be solved.", "You can instead" +
" do nothing and focus on finishing the remainder of the project to ensure that there are no other issues.",
" What do you want to do?"]

  var textBox = document.getElementById("textBox")
  var choices = document.getElementById("choices")
  var next = document.getElementById("nextButton")
  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    toggle(true, choices)
  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }
}


// SCENE 14  - RUSHING CODE
function scene14() {index = 0}

function next14() {
// next button for scene 14
var plotMessages = []
var choice1 = document.getElementById("choice1")
var r = Math.floor(Math.random() * 2) //random index
console.log(r)

if (r == 0) { // fixed
  plotMessages.push("Turns out, rushing the product to fix the issue made a huge" +
  " difference and resolved the security issue before the deadline.")
  choice1.setAttribute("onClick", "setSecBreach(false); document.location='scene16.html'")
} else if (r == 1) { // not fixed
  plotMessages.push("Unfortunately, trying to rush and fix the bugs in the little" +
  " time the team had to allocate to this issue only caused more issues and bugs" +
  " that weren't able to be resolved in time. Nevertheless, the product still" +
  " has to be launched.") // text

  /* where button goes next */
  choice1.setAttribute("onClick", "setSecBreach(true); document.location='scene16.html'")
}

  var textBox = document.getElementById("textBox")
  var choices = document.getElementById("choices")
  var next = document.getElementById("nextButton")
  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    toggle(true, choices)
  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }
}

// SCENE 15 - DOING NOTHING (NOT RUSHING CODE)
function scene15() {index = 0}

function next15() {
  // next button for scene 15
  var r = Math.floor(Math.random() * 2) //random index
  var plotMessages = []

  if (r == 0) { // fixed
    plotMessages.push("After choosing to leave the issue alone, the team continues" +
    " to test and write code for the final product. They soon realize that the" +
    " code they write later on resolves the earlier issue and that the bug" +
    " was not much of a problem in the first place because it dealt with a very" +
    " unlikely edge case.")

    /* where button goes next */
    choice1.setAttribute("onClick", "setSecBreach(false); document.location='scene16.html'")

  } else if (r == 1) { // not fixed
    plotMessages.push("After choosing to leave the issue alone, the team continues" +
    " to test and write code for the final product. However, we still realize " +
    "there are still a few bugs remaining from the security issue from earlier" +
    " that are still a problem. It should be fine though right?")

    /* where button goes next */
    choice1.setAttribute("onClick", "setSecBreach(true); document.location='scene16.html'")
  }

  var textBox = document.getElementById("textBox")
  var choices = document.getElementById("choices")
  var next = document.getElementById("nextButton")
  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    toggle(true, choices)
  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }
}

// SCENE 16
function scene16() {index = 0}

function next16() {
  // next button for scene 16
  var plotMessages = []
  var choice1 = document.getElementById('choice1')

  // getting secBreach value from previous HTML page
  var secBreach = sessionStorage.getItem("secBreach")

  if (secBreach == 'true') {
    setEnding("However, things don\'t turn out the way you and your team" +
    " anticipated it to be. Due to the security issue that wasn\'t resolved that" +
    " your team assumed to be minor, it didn\'t take long for someone to take advantage" +
    " of the situation and for a security breach to happen after tens of thousands" +
    " of customers signed up and set up the product in their own homes. Personal photos," +
    " fingerprint data, credit card information, addresses, and lists of people" +
    " associated with customers were released to the public. Hundreds of" +
    " customers started filing lawsuits and attempted to return the product. " +
    " All companies we made contracts with have filed lawsuits of their own out" +
    " of breach of contract. Investors started pulling out and employees started" +
    " looking for other jobs out of panic of losing their jobs. With the image of" +
    " the company completely wrecked, business plummeting, and partners trying to" +
    " shut the product down, the company reached a point of bankruptcy and social" +
    " wreckage they could not recover from and soon the company had to count" +
    " their final days. You, your team, and your boss are" +
    " now out of a job.")

    } else {
      plotMessages.push("With popular competitors" +
      " experiencing their own security issues, customers started looking for new" +
      " systems to use and soon your product became the hottest thing in the home" +
      " security/cybersecurity world. Your product gained hundreds of thousands of" +
      " customers and were set up in houses all over the world.")
      plotMessages.push("Thousands of written reviews on the website, emails," +
      " video reviews on YouTube, and even voicemail messages were left about" +
      " how much they loved their new home security system.")


    }
  var textBox = document.getElementById("textBox")
  var choices = document.getElementById("choices")
  var next = document.getElementById("nextButton")
  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    toggle(true, choices)
  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }
  finalReport()
}

// SCENE 17
function scene17() {index = 0}

function next17() {
  // next button for scene 17

  // getting team value from previous HTML page
  var team = sessionStorage.getItem("team")

  var plotMessages = ["You discover on your own that there are hints of gender bias" +
  " associated with the images you use from Google Images, such as tending to show more" +
  " sexualized and 'attractive' images when searching up images related women, which does " +
  " not really occur when searching up images related to men. This is confirmed by article " +
  " findings later found online. Because of this bias, your system is not fully accurate due " +
  " to the lacking variety of photos. With deadlines fast approaching you need to get this fixed soon."]

  if (team == "boss") { plotMessages.push("Your team doesn't feel the need to change" +
  " much but this could be due to their biases. Most of the team consists of men, so" +
  " they aren't directly affected. They aren't inclined to deal with the issue.")}
  else { plotMessages.push("Your team feels like this is an important issue to resolve" +
  " since it affects people like them.")}

  plotMessages.push("What are you going to do?")

  var a = ["document.location='scene18.html'", "document.location='scene19.html'"]
  var r = Math.floor(Math.random() * 2) //random index
  /* where each button goes next */
  choice3.setAttribute("onClick", a[r])

  var textBox = document.getElementById("textBox")
  var choices = document.getElementById("choices")
  var next = document.getElementById("nextButton")
  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    toggle(true, choices)
  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }
}

// SCENE 18 HAS ONE LINE OF TEXT; NEXT BUTTON NOT NEEDED
function scene18() {index = 0}

// SCENE 19
function scene19() {
  index = 0
  setGen(true)
  setAccuracy('Fully Accurate')
}

function next19() {
  // next button for scene 19
var plotMessages = ["While running more tests," +
  " one of the software engineers noticed there’s an small security issue that could" +
  " put some of the private information being collected at risk of being easily breached." +
  " However, your boss has informed you that you have a deadline to finish the final" +
  " product to show investors who would launch the product soon.", "You can decide to rush and" +
  " fix the bugs, although theres no guarantee the issue will be solved.", "You can instead" +
  " do nothing, and focus on finishing the remainder of the project to ensure that there are no other issues.",
  " What do you want to do?"]

  var textBox = document.getElementById("textBox")
  var choices = document.getElementById("choices")
  var next = document.getElementById("nextButton")
  if (index == plotMessages.length - 1) {
    textBox.innerHTML = plotMessages[index]
    toggle(false, next)
    toggle(true, choices)
  } else {
    textBox.innerHTML = plotMessages[index]
    index ++
  }
}

// SCENE 20 HAS ONE LINE OF TEXT; NEXT BUTTON NOT NEEDED
function scene20() {index = 0}

// FINAL REPORT
function finalReport() { //1-too little 2-3-good 4-too much
  var choice1 = document.getElementById("choice1")
  // if (points == 1) { p = "Not Accurate"}
  // else if (points == 2) { p = "Somewhat Accurate"}
  // else if (points == 3) { p = "Mostly Accurate"}
  // else if (points == 4) { p = "Fully Accurate"}
  var message = "Great job! You and your team worked hard." +
  " However, here\'s a few things you might have overlooked: \n" +
  "Identification Accuracy: " + sessionStorage.getItem("acc") + "\n" +
  "-> Your system was " +  sessionStorage.getItem("acc") +
  " Anything lower than fully accurate would steer some customers away to your rivals." + "\n"

  if(sessionStorage.getItem("invasive") < 2) {
    // too little info
    message = message + "Invasiveness (Rating Out of 4 Points): " + String(sessionStorage.getItem("invasive")) + "\n" +
    "-> Collecting too little private information led to a less unique and not as protective product " +
    "in which more people decided to use other home security systems, decreasing business. " + "\n"
    if (sessionStorage.getItem("race") == "true" && sessionStorage.getItem("gender") == "true") {
    // too little private info and inclusive of both
      message = message + "Racial Inclusiveness: " + sessionStorage.getItem("race") + "\n, " +
      "Gender Inclusiveness: " + sessionStorage.getItem("gender") + "\n " +
      "-> By being both racially and gender inclusive due to how you tested your system, people of " +
      "all walks of life were able to fully enjoy the product without discrimination. " +  "\n"
    } else {
    // too little private info and exclusive of both
      message = message + "Racial Inclusiveness: " + sessionStorage.getItem("race") + "\n, " +
      "Gender Inclusiveness: " + sessionStorage.getItem("gender") + "\n " +
      "-> By not being both racially and gender inclusive due to how you tested your system, some people " +
      "found this to be insensitive and boycotted your company due to your product, losing you some business. " +  "\n "
    }

  } else if (sessionStorage.getItem("invasive") == 2 || sessionStorage.getItem("invasive") == 3) {
    // enough info
    message = message + "Invasiveness (Rating Out of 4 Points): " + String(sessionStorage.getItem("invasive")) + "\n" +
    "-> By collecting enough private information without it being too much, people felt both comfortable " +
    "and interested enough in your unique product to start using it in their own homes. " + "\n"
    if (sessionStorage.getItem("race") == "true" && sessionStorage.getItem("gender") == "true") {
    // enough private info and inclusive of both
      message = message + "Racial Inclusiveness: " + sessionStorage.getItem("race") + "\n, " +
      "Gender Inclusiveness: " + sessionStorage.getItem("gender") + "\n " +
      "-> By being both racially and gender inclusive due to how you tested your system, people of " +
      "all walks of life were able to fully enjoy the product without discrimination. " +  "\n"
    } else {
    // enough private info and exclusive of both
      message = message + "Racial Inclusiveness: " + sessionStorage.getItem("race") + "\n, " +
      "Gender Inclusiveness: " + sessionStorage.getItem("gender") + "\n " +
      "-> By not being both racially and gender inclusive due to how you tested your system, some people " +
      "found this to be insensitive and boycotted your company due to your product, losing you some business. " +  "\n "
    }
  } else {
    //too much info
    message = message + "Invasiveness (Rating Out of 4 Points): " + String(sessionStorage.getItem("invasive")) + "\n" +
    "-> By collecting too much private information, people felt that your product was too invasive " +
    "and weren't comfortable enough to use it, decreasing business. " + "\n"
    if (sessionStorage.getItem("race") == "true" && sessionStorage.getItem("gender") == "true") {
    // too much private info and inclusive of both
      message = message + "Racial Inclusiveness: " + sessionStorage.getItem("race") + "\n, " +
      "Gender Inclusiveness: " + sessionStorage.getItem("gender") + "\n " +
      "-> By being both racially and gender inclusive due to how you tested your system, people of " +
    " all walks of life were able to fully enjoy the product without discrimination. " +  "\n"
    } else {
    // too much private info and exclusive of both
      message = message + "Racial Inclusiveness: " + sessionStorage.getItem("race") + "\n, " +
      "Gender Inclusiveness: " + sessionStorage.getItem("gender") + "\n " +
      "-> By not being both racially and gender inclusive due to how you tested your system, some people " +
      "found this to be insensitive and boycotted your company due to your product, losing you some business. " +  "\n "
    }
  }
  sessionStorage.setItem("message", message)

  choice1.setAttribute("onClick", "setEnding(sessionStorage.getItem('message'))")
}
