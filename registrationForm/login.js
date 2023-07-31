// alert("hey there!");

let username = document.getElementById("userinput");
let useremail = document.getElementById("useremail");
let userpassword = document.getElementById("userpassword");

const setError = (id, err) => {
  document.getElementById(id).innerHTML = err;
};

const removeError = (id) => {
  document.getElementById(id).innerHTML = "";
};

function Validation() {
  event.preventDefault();
  if (username.value == "") {
    setError("Error1", "Name is Required");
  } else if (useremail.value == "") {
    setError("Error2", "Email is Required");
    removeError("Error1");
  } else if (userpassword.value == "") {
    setError("Error3", "Password is Required");
    removeError("Error1");
    removeError("Error2");
  } else if (userpassword.value.length < 8) {
    setError("Error3", "Password contain 8 charactors");
    removeError("Error1");
    removeError("Error2");
  } else {
    removeError("Error1");
    removeError("Error2");
    removeError("Error3");
    consolevalue();
  }
}

function consolevalue() {
  console.log(`User Name is ${username.value}`);
  console.log(`User email is ${useremail.value}`);
  console.log(`User password is ${userpassword.value}`);
  document.getElementById("Error3").innerHTML = "";
  document.getElementById("Error1").innerHTML = "";
  document.getElementById("Error2").innerHTML = "";
  document.getElementById("userinput").value = "";
  document.getElementById("useremail").value = "";
  document.getElementById("userpassword").value = "";
}
