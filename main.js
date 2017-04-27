// Write your JavaScript code here

//Initial planets array
var planetArray = [
  ['Sun', 27.9],
  ['Mercury', 0.377],
  ['Venus', 0.9032],
  ['Earth', 1],
  ['Moon', 0.1655],
  ['Mars', 0.3895],
  ['Jupiter', 2.64],
  ['Saturn', 1.139],
  ['Uranus', 0.917],
  ['Neptune', 1.148],
  ['Pluto', 0.059]
];

//Final Planet array, and reversed.
var planets = planetArray.reverse();

//Global select control
var selectControl;

//Called when form is loaded, sets up select element.
function onLoadFunction() {

  selectControl = document.getElementById("planets");
  for (i = 0; i < planets.length; i += 1) {
    var opt = document.createElement("option");
    opt.label = planets[i][0];
    opt.value = planets[i][1].toString();
    selectControl.options.add(opt);
  }
}

//Calculate weight of person via planet gravity value.
function calculateWeight(weight, planetName) {

  for (var index = 0; index < planets.length; index++) {
    if (planetName === planets[index][0]) {
      var calcWeight = Number(Math.round((parseInt(weight, 10) * planets[index][1]) + 'e2') + 'e-2');
      return calcWeight;
    }
  }
  return -1;
}

//Onclick handler will call the calculation
document.getElementById('calculateWeight').onclick = function handleClickEvent(ev) {

//Get index
  var selectedIndex = selectControl.selectedIndex;
  //Get the gravity value;
  var gravity = selectControl.value;
  //This is from the selected item
  var planetName = selectControl.options[selectedIndex].label;
  //Pull the weight value from the inut box
  var userWeight = document.getElementById("userWeight").value;
  //Calculate the weight
  var weightCalc = calculateWeight(userWeight, planetName);
//Print it.
  var outputString;
  if (planets[selectedIndex][0] === "Sun") {
    outputString = "Your weight on the sun is " + weightCalc + " Pounds.";
  } else {
    outputString = "Your weight on the planet " + planets[selectedIndex][0] + " is " + weightCalc + " Pounds.";
  }
  document.getElementById("output").innerHTML = outputString;
}
