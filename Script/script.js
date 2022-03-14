console.log("check succesful");
function validation() {
  console.log("try");
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email-check").value;
  if (firstName == "") {
    document.getElementById("firstt").innerHTML = " **Please fill First Name";
    return false;
  }
  if (firstName.length <= 4) {
    document.getElementById("firstt").innerHTML = " **Please type big  Name";
    return false;
  }
  if (!isNaN(firstName)) {
    document.getElementById("firstt").innerHTML =
      " **Please fill character only";
    return false;
  }
  if (lastName == "") {
    document.getElementById("lastt").innerHTML = " **Please fill Last Name";
    return false;
  }
  if (!isNaN(lastname)) {
    document.getElementById("lastt").innerHTML =
      " **Please fill character only";
    return false;
  }
  if ((email = "")) {
    document.getElementById("emailCheck").innerHTML = " **Please Enter Email";
    return false;
  }
  if (email.indexOf("@") <= 0) {
    document.getElementById("emailCheck").innerHTML =
      " **Please Enter Correct Email";
    return false;
  }
}

//////////////////////////////
let namek = document.getElementById("tit0");
let role = document.getElementById("tit1");
let department = document.getElementById("tit2");
let firstName = "";
let lastName = "";
let btnModalAddEmployee = document.getElementById("bt_add_emp");
let btnAddEmployee = document.getElementById("add_emp");
let container = document.getElementById("upper");
//Add Employee Button
btnAddEmployee.addEventListener("click", function () {
  console.log("hi i am clicked this is add button");
  templates = document.getElementsByTagName("template")[0];
  let divFolderTemplate = templates.content.querySelector(".card-body");
  divFolder = document.importNode(divFolderTemplate, true);

  // let divName = divFolder.querySelector("[purpose=name]");
  // divName.innerHTML = firstName + " " + lastName;
  //container.appendChild(divFolder)
  console.log(firstName + " in btnAddEmployee");
});
btnModalAddEmployee.addEventListener("click", function () {
  console.log("hi i am clicked this is modal add button");
  //first name
  const name1 = document.getElementById("first-name").value;
  //last name
  const name2 = document.getElementById("last-name").value;
  //job-title
  const job = document.getElementById("firstt").value;
  //department
  const dept = document.getElementById("department").value;

  console.log("Hi " + name1 + " " + job + " " + dept);

  if (name1 != null) {
    firstName = name1;
    console.log(firstName);
  } else {
    lastName = null;
  }

  if (name2 != null) {
    lastName = name2;
  } else {
    lastName = null;
  }

  if (job != null) {
    role.innerHTML = job;
    console.log("success");
  } else {
    role.innerHTML = null;
  }

  if (dept != null) {
    dept.innerHTML = dept;
    console.log("success dept");
  } else {
    dept.innerHTML = null;
  }

  namek.innerHTML = firstName + " " + lastName;

  container.appendChild(divFolder);
  // document.getElementById("detailsForm").reset();
});

// window.addEventListener("click", function (e) {
//   if (e.target == modal) {
//     document.getElementById("detailsForm").reset();
//     modal.style.display = "none";
//   }
// });
