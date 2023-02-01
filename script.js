const form = document.querySelector("#form");
const name = document.querySelector("#name");
const lastName = document.querySelector('#last-name')
const phoneNo = document.querySelector("#phone-number");
const email = document.querySelector("#email");
const skills = document.querySelector('#skills')
function checkInput() {
  const nameValue = name.value.trim();
  const lastNameValue = lastName.value.trim()
  const emailValue = email.value.trim();
  const phoneNoValue = phoneNo.value.trim();
  const skillsValue = skills.value.trim()
  //  validation for name
  if (nameValue === "") {
    errorMsg(name, "Name cannot be empty");
  } else if (nameValue.length < 3) {
    errorMsg(name, "Atleast three characters");
  } else {
    success(name);
  }
  if (lastNameValue === "") {
    errorMsg(lastName, "Last name cannot be empty");
  } else if (lastNameValue.length < 3) {
    errorMsg(lastName, "Atleast three characters");
  } else {
    success(lastName);
  }
  // email validation
  if (emailValue === "") {
    errorMsg(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    errorMsg(email, "Email is not valid");
  } else {
    success(email);
  }
  // validation for phone No
  if (phoneNoValue === "") {
    errorMsg(phoneNo, "Phone Number can't be empty");
  } else if (isNaN(phoneNoValue)) {
    errorMsg(phoneNo, "Not a valid Phone Number");
  } 
  else if(phoneNoValue.length < 11 || phoneNoValue.length > 11){
    errorMsg(phoneNo, "Must be equal to eleven digits")
  }
  else {
    success(phoneNo);
  }   
if(skillsValue === ""){
  errorMsg(skills, "Please select a value")
}
else{
  success(skills)
}
validateRadio()

}

function errorMsg(input, value) {
  const formControl = input.parentElement;
  const message = formControl.querySelector("small");
  message.innerText = value;
  formControl.className = "form-control error";
}
function success(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});
function validateRadio(){
  const radio = document.getElementsByName('gender')
  const radioError =  document.querySelector('.radio-error')
for(let i = 0; i<radio.length; i++){
  
  if(radio[i].checked ===false){
   radioError.innerText = "Please select a gender"
  }
  else{
radioError.innerText = ""
  }
}

}