// task 1, 2, & 3
let inputName = document.querySelector(".name");
let inputYear = document.querySelector(".year");
let message = document.querySelector(".message");
let ageButton = document.querySelector(".age-button")

// task 4
let currentYear = 2022;

// task 5 & 6
let userName;
let userYear;

// task 7
let age;



ageButton.onclick = function() {
  userName = inputName.value;
  userYear = Number(inputYear.value);
  let currentYear = new Date().getFullYear();  // returns the current year
  age = currentYear - userYear;
  message.innerHTML = `WOW, ${userName}, GETTING UP THERE! Almost ${age + 1}....`
}
