var getPlanOne = document.getElementById('panelOneButton');
var getPlanTwo = document.getElementById('panelTwoButton');
var getPlanThree = document.getElementById('panelThreeButton');
var createButton = document.getElementById('create');
var planTypes = document.getElementById('planTypes');
var chooseMsg = document.getElementById('chooseMsg');
var getMoving = document.getElementById('panelOne');
var buildMuscle = document.getElementById('panelTwo');
var loseWeight = document.getElementById('panelThree');

createButton.addEventListener('click', function() {

  chooseMsg.setAttribute('class', 'show');
  planTypes.setAttribute('class', 'show');
  var welcome = document.getElementById('welcome');
})

function removeDiv(divId) {
  $("#"+divId).remove();
}


var mvNext = document.getElementsByClassName('page2')[0];
var mvSecondNext = document.getElementsByClassName('page3')[0];
var mvThirdNext = document.getElementsByClassName('page4')[0];
var mvGenerate = document.getElementsByClassName('page5')[0];
var mvSubmit = document.getElementsByClassName('submitPlan')[0];
var mvIntro = document.getElementsByClassName('intro')[0];
var mvLevel = document.getElementsByClassName('level')[0];
var mvGoal = document.getElementsByClassName('goal')[0];
var mvDays = document.getElementsByClassName('days')[0];
var mvSummary = document.getElementsByClassName('summary')[0];
var levelValue = document.getElementsByName('level');
var goalValue = document.getElementsByName('goal');
var daysValue = document.getElementsByName('day');
var attachSummary = document.getElementById('mvSummary');
var mvSummaryList = document.createElement('ul');
var mvWorkoutLevel = document.createElement('li');
var mvWorkoutGoal = document.createElement('li');
var mvWorkoutDays = document.createElement('li');


getPlanOne.addEventListener('click', function() {
  var createMove = document.getElementById('getMoving');

  chooseMsg.className = "hide";
  getMoving.className = "hide";
  createMove.className = "show";
  buildMuscle.className = "hide";
  loseWeight.className = "hide";
});

mvNext.addEventListener('click', function() {
  mvIntro.className = "hide";
  mvLevel.className = "show";
});

mvSecondNext.addEventListener('click', function(event) {
  event.preventDefault();
  mvLevel.className = "hide";
  mvGoal.className = "show";

  for (var i = 0; i < levelValue.length; i++) {
    var selectedLevel;
    if(levelValue[i].checked) {
      selectedLevel = levelValue[i].value;
      console.log(selectedLevel);
    }
  }

  mvWorkoutLevel.textContent = "Workout Level: " + selectedLevel;
  mvWorkoutLevel.className = "list-unstyled";

  // mvWorkoutLevel.appendChild(mvWorkoutGoal);
  mvSummaryList.appendChild(mvWorkoutLevel);
  attachSummary.appendChild(mvSummaryList);
});

mvThirdNext.addEventListener('click', function(event) {
  event.preventDefault();
  mvGoal.className = "hide";
  mvDays.className = "show";

  for (var i = 0; i < goalValue.length; i++) {
    var selectedGoal;
    if(goalValue[i].checked) {
      selectedGoal = goalValue[i].value;
      console.log(selectedGoal);
    }
  }
  mvWorkoutGoal.textContent = "Workout Goal: " + selectedGoal;
  mvWorkoutGoal.className = "list-unstyled";
  mvWorkoutLevel.appendChild(mvWorkoutGoal);
});

mvGenerate.addEventListener('click', function(event) {
  event.preventDefault();
  mvDays.className = "hide";
  mvSummary.className = "show";

  for (var i = 0; i < daysValue.length; i++) {
    var selectedDays;
    if(daysValue[i].checked) {
      selectedDays = daysValue[i].value;
      console.log(selectedDays);
    }
  }

  mvWorkoutDays.textContent = "Workout Days: " + selectedDays;
  mvWorkoutDays.className = "list-unstyled";
  mvWorkoutGoal.appendChild(mvWorkoutDays);
});




var bmNext = document.getElementsByClassName('page2')[1];
var bmSecondNext = document.getElementsByClassName('page3')[1];
var bmThirdNext = document.getElementsByClassName('page4')[1];
var bmGenerate = document.getElementsByClassName('page5')[1];
var bmSubmit = document.getElementsByClassName('submitPlan')[1];
var bmIntro = document.getElementsByClassName('intro')[1];
var bmLevel = document.getElementsByClassName('level')[1];
var bmGoal = document.getElementsByClassName('goal')[1];
var bmDays = document.getElementsByClassName('days')[1];
var bmSummary = document.getElementsByClassName('summary')[1];

getPlanTwo.addEventListener('click', function() {
  var createBuild = document.getElementById('buildMuscle');

  chooseMsg.className = "hide";
  getMoving.className = "hide";
  createBuild.className = "show";
  buildMuscle.className = "hide";
  loseWeight.className = "hide";
});

bmNext.addEventListener('click', function() {
  bmIntro.className = "hide";
  bmLevel.className = "show";
})

bmSecondNext.addEventListener('click', function() {
  bmLevel.className = "hide";
  bmGoal.className = "show";
})

bmThirdNext.addEventListener('click', function() {
  bmGoal.className = "hide";
  bmDays.className = "show";
})

bmGenerate.addEventListener('click', function() {
  bmDays.className = "hide";
  bmSummary.className = "show";
})

var bmAttachSummary = document.getElementById('bmSummary');
var bmSummaryList = document.createElement('ul');

var bmWorkoutLevel = document.createElement('li');
bmWorkoutLevel.textContent = "Workout Level: ";
bmWorkoutLevel.className = "list-unstyled";

var bmWorkoutGoal = document.createElement('li');
bmWorkoutGoal.textContent = "Workout Goal: ";
bmWorkoutGoal.className = "list-unstyled";

var bmWorkoutDays = document.createElement('li');
bmWorkoutDays.textContent = "Workout Days: ";
bmWorkoutDays.className = "list-unstyled";

bmWorkoutGoal.appendChild(bmWorkoutDays);
bmWorkoutLevel.appendChild(bmWorkoutGoal);
bmSummaryList.appendChild(bmWorkoutLevel);
bmAttachSummary.appendChild(bmSummaryList);

var lwNext = document.getElementsByClassName('page2')[2];
var lwSecondNext = document.getElementsByClassName('page3')[2];
var lwThirdNext = document.getElementsByClassName('page4')[2];
var lwGenerate = document.getElementsByClassName('page5')[2];
var lwSubmit = document.getElementsByClassName('submitPlan')[2];
var lwIntro = document.getElementsByClassName('intro')[2];
var lwLevel = document.getElementsByClassName('level')[2];
var lwGoal = document.getElementsByClassName('goal')[2];
var lwDays = document.getElementsByClassName('days')[2];
var lwSummary = document.getElementsByClassName('summary')[2];

getPlanThree.addEventListener('click', function() {
  var createLose = document.getElementById('loseWeight');

  chooseMsg.className = "hide";
  getMoving.className = "hide";
  createLose.className = "show";
  buildMuscle.className = "hide";
  loseWeight.className = "hide";
});

lwNext.addEventListener('click', function() {
  lwIntro.className = "hide";
  lwLevel.className = "show";
})

lwSecondNext.addEventListener('click', function() {
  lwLevel.className = "hide";
  lwGoal.className = "show";
})

lwThirdNext.addEventListener('click', function() {
  lwGoal.className = "hide";
  lwDays.className = "show";
})

lwGenerate.addEventListener('click', function() {
  lwDays.className = "hide";
  lwSummary.className = "show";
})

var lwAttachSummary = document.getElementById('lwSummary');
var lwSummaryList = document.createElement('ul');

var lwWorkoutLevel = document.createElement('li');
lwWorkoutLevel.textContent = "Workout Level: ";
lwWorkoutLevel.className = "list-unstyled";

var lwWorkoutGoal = document.createElement('li');
lwWorkoutGoal.textContent = "Workout Goal: ";
lwWorkoutGoal.className = "list-unstyled";

var lwWorkoutDays = document.createElement('li');
lwWorkoutDays.textContent = "Workout Days: ";
lwWorkoutDays.className = "list-unstyled";

lwWorkoutGoal.appendChild(lwWorkoutDays);
lwWorkoutLevel.appendChild(lwWorkoutGoal);
lwSummaryList.appendChild(lwWorkoutLevel);
lwAttachSummary.appendChild(lwSummaryList);
