const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const male = document.getElementById("m");
const female = document.getElementById("f");
let resultArea = document.querySelector(".comment");

const modalContent = document.querySelector(".modal-content");
const modalText = document.querySelector("#modalText");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

const calculate = () => {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && female.checked == false)
  ) {
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;
  } else {
    countBMI();
  }
};

const countBMI = () => {
  const p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }

  const BMI = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

  let result = "";
  if (BMI < 18.5) {
    result = "Underweight";
  } else if (BMI >= 18.5  && BMI < 25) {
    result = "Healthy";
  } else if (BMI >= 25 && BMI < 30) {
    result = "Overweight";
  } else if (BMI >= 30 && BMI < 35) {
    result = "Obese";
  } else if (BMI >= 35 ) {
    result = "Extremely obese";
  }

  resultArea.style.display = "block";
  document.querySelector(
    ".comment"
  ).innerHTML = `You are <span id="comment">${result}</span>`;
  document.querySelector("#result").innerHTML = BMI.toFixed(2);
};

span.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
