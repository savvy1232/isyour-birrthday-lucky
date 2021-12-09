const DateOfBirth = document.querySelector("#date-Of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number-button");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "Your are Lucky Champ";
    outputBox.innerHTML += ` <img src="./lucky.svg" alt="lucky class="w3-circle">`;
  } else {
    outputBox.innerText = "You are not lucky enough";
    outputBox.innerHTML += `<img src="./unlucky.svg" alt="unlucky">`;
  }
}
console.log(DateOfBirth.value);

function checkBirthDateIsLucky() {
  const dob = DateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob) compareValues(sum, luckyNumber.value);
  else {
    outputBox.innerText = "Enter both fields";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}
checkNumberButton.addEventListener("click", checkBirthDateIsLucky);
