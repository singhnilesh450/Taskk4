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
  // if ((email = "")) {
  //   document.getElementById("emailCheck").innerHTML = " **Please Enter Email";
  //   return false;
  // }
  // if (email.indexOf("@") <= 0) {
  //   document.getElementById("emailCheck").innerHTML =
  //     " **Please Enter Correct Email";
  //   return false;
  // }
}

//////////////////////////////
let namek = document.querySelector("#tit0");
let role = document.querySelector("#tit1");
let department = document.querySelector("#tit2");
let firstName = "";
let lastName = "";
let btnModalAddEmployee = document.getElementById("bt_add_emp");
let btnAddEmployee = document.getElementById("add_emp");
let container = document.getElementById("boxes");

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelector(".show-modal");
// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };
// let cardBox = document.querySelector(".row");
// let card1 = document.querySelector(".card-body");
// let card2 = document.querySelector(".card-desc");
//Add Employee Button
btnAddEmployee.addEventListener("click", function () {
  console.log("hi i am clicked this is add button");
  // btnsOpenModal.addEventListener("click", openModal);

  // btnCloseModal.addEventListener("click", closeModal);
  // overlay.addEventListener("click", closeModal);
  // cardBox.innerHTML = "";
  // templates = document.getElementsByTagName("template")[0];
  // let divFolderTemplate = templates.content.querySelector("#upper");
  // divFolder = document.importNode(divFolderTemplate, true);

  // let divName = divFolder.querySelector("[purpose=name]");
  // divName.innerHTML = firstName + " " + lastName;
  //container.appendChild(divFolder)
  console.log(firstName + " in btnAddEmployee");
});
btnModalAddEmployee.addEventListener("click", function () {
  templates = document.getElementsByTagName("template")[0];
  let divFolderTemplate = templates.content.querySelector("#upper");
  divFolder = document.importNode(divFolderTemplate, true);
  console.log("hi i am clicked this is modal add button");
  //first name
  let name1 = document.getElementById("first-name").value;
  //last name
  let name2 = document.getElementById("last-name").value;
  //job-title
  let job = document.getElementById("job-titlee").value;
  //department
  let dept = document.getElementById("department").value;

  console.log("Hi " + name1 + " " + job + " " + dept);

  // firstName = name1;
  // console.log(firstName);

  // lastName = name2;

  // namek.textContent = firstName + " " + lastName;

  // role.textContent = "kk";
  // console.log("success");

  // department.textContent = "hh";
  // console.log("success dept");

  container.appendChild(divFolder);

  // document.getElementById("detailsForm").reset();
  //   let templateString = `<template>
  // <div class="col-lg-3 col-md-4 col-sm-6 carr" id="upper">
  // <div class="card border-primary bg-secondary mb-3 mb-resp" id="inner">
  //  <div class="card-body" id="cardBody">
  //    <div class="card-desc d-flex " id="cardDesc">
  //          <img src="images/user-pic.webp" alt="" width="75" height="75" class="align-flex-start" id="imagee">
  //       <div class="descc align-flex-end">
  //          <h6 class="card-title mb-0" id="tit0">${name1}</h6>
  //          <p class="card-text mb-0" id="tit1">${job}</p>
  //          <p class="card-text mb-0" id="tit2"><small class="text-muted">${department}</small></p>
  //          <span><i class="fa-solid fa-square-phone" id="icon1"></i></span>
  //          <span><i class="fa-solid fa-envelope"id="icon1"></i></span>
  //          <span><i class="fa-solid fa-comment"id="icon1"></i></span>
  //          <span><i class="fa-solid fa-star-sharp"id="icon1"></i></span>
  //          <span><i class="fa-solid fa-heart"id="icon1"></i></span>
  //   </div>
  //   </div>
  //  </div>
  // </div>
  // </div>
  // </template>`;
  // alert(templateString);
  // container.insertAdjacentElement("beforeend", templateString);
  // container.appendChild(templateString);
  // document.querySelector("#contactModal").style.display = "none";
});

// window.addEventListener("click", function (e) {
//   if (e.target == modal) {
//     document.getElementById("detailsForm").reset();
//     modal.style.display = "none";
//   }
// });
