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
  if (!isNaN(lastName)) {
    document.getElementById("lastt").innerHTML =
      " **Please fill character only";
    return false;
  }
  if (email == "") {
    document.getElementById("emailCheck").innerHTML = " **Please Enter Email";
    return false;
  }
  if (email.indexOf("@") <= 0) {
    document.getElementById("emailCheck").innerHTML =
      " **Please Enter Correct Email";
    return false;
  }
  return true;
}

//////////////////////////////

let firstName = "";
let lastName = "";
let btnModalAddEmployee = document.getElementById("bt_add_emp");
let btnAddEmployee = document.getElementById("add_emp");
let container = document.getElementById("targetRow");
let Datacollection = [];
let divFolderArray = [];
const modal = document.querySelector(".modal");
let detailsModal = document.querySelector("#contactModal1");
const overlay = document.querySelector(".overlay");
const overlay2 = document.querySelector(".overlay2");
const btnCloseModal = document.querySelector(".close-modal");
const btnCloseModal2 = document.querySelector(".close-modal2");
const btnsOpenModal = document.querySelector("#add_emp");
const openModal = function () {
  modal.style.display = "block";
  overlay.style.display = "block";
};

const closeModal = function () {
  modal.style.display = "none";
  overlay.style.display = "none";
};
const openModal2 = function () {
  detailsModal.style.display = "block";
  overlay2.style.display = "block";
};

const closeModal2 = function () {
  detailsModal.style.display = "none";
  overlay2.style.display = "none";
};

//Add Employee Button
btnAddEmployee.addEventListener("click", function () {
  console.log("hi i am clicked this is add button");
  btnsOpenModal.addEventListener("click", openModal);

  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  document.querySelector(".Modaltitle").innerHTML = "Enter Employee Details";
  document.getElementById("form-target").reset();
  btnUpdateEmployee = document.querySelector("#btn_update");

  btnUpdateEmployee.style.display = "none";
  btnModalAddEmployee.style.display = "block";
  console.log(firstName + " in btnAddEmployee");
});
btnModalAddEmployee.addEventListener("click", function () {
  if (validation()) {
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
    //department
    let Email = document.getElementById("email-check").value;
    //department
    let office = document.getElementById("office-input").value;
    //department
    let phoneNum = document.getElementById("phoneNum").value;
    //department
    let skype = document.getElementById("skype").value;
    divFolder.querySelector("#tit0").innerHTML = name1 + " " + name2;
    divFolder.querySelector("#tit1").innerHTML = job;
    divFolder.querySelector("#tit2").innerHTML = dept;
    let mid = Datacollection.length;
    // let rid = Datacollection.length;
    //divFolder.id = "" + rid

    Datacollection.push({
      mid,
      name1,
      name2,
      job,
      dept,
      Email,
      office,
      phoneNum,
      skype,
    });
    storeInBowser();

    divFolderArray.push(divFolder);
    console.log("check 123");

    console.log("Hi " + name1 + " " + job + " " + dept);

    console.log("success");

    console.log(divFolder);
    container.appendChild(divFolder);
    document.getElementById("form-target").reset();
    modal.style.display = "none";
    overlay.style.display = "none";
  }
  location.reload();
});
function storeInBowser() {
  let extractedfromArray = JSON.stringify(Datacollection);
  localStorage.setItem("data", extractedfromArray);
}
function loadFromBrowser() {
  let rjson = localStorage.getItem("data");
  if (!rjson) {
    return;
  }

  Datacollection = JSON.parse(rjson);
  console.log(Datacollection[0].name2);
  for (let i = 0; i < Datacollection.length; i++) {
    {
      createEmployeeOnLoad(
        Datacollection[i].mid,
        Datacollection[i].name1,
        Datacollection[i].name2,
        Datacollection[i].Email,
        Datacollection[i].job,
        Datacollection[i].dept,
        Datacollection[i].office,
        Datacollection[i].phoneNum,
        Datacollection[i].skype
      );
    }
  }
}
function createEmployeeOnLoad(
  mid,
  name1,
  name2,
  Email,
  job,
  dept,
  office,
  phoneNum,
  skype
) {
  templates = document.getElementsByTagName("template")[0];
  let divFolderTemplate = templates.content.querySelector("#upper");
  divFolder = document.importNode(divFolderTemplate, true);

  divFolder.querySelector("#tit0").innerHTML = name1 + " " + name2;
  divFolder.querySelector("#tit1").innerHTML = job;
  divFolder.querySelector("#tit2").innerHTML = dept;

  // divFolder = document.importNode(divFolderTemplate, true);
  let view = divFolder.querySelector("[action=view]");
  console.log("view created");
  view.addEventListener("click", function () {
    console.log("View is now clickable");
    // console.log("Inside create details" + rname1 + " " + rname2);
    document.querySelector("#mid").innerHTML = mid;
    document.querySelector("#name-view").innerHTML = name1 + " " + name2;
    document.querySelector("#email-view").innerHTML = Email;
    document.querySelector("#job-view").innerHTML = job;
    document.querySelector("#office-view").innerHTML = office;
    document.querySelector("#dept-view").innerHTML = dept;
    document.querySelector("#phno-view").innerHTML = phoneNum;
    document.querySelector("#skype-view").innerHTML = skype;
    openModal2();
    btnCloseModal2.addEventListener("click", closeModal2);
    overlay.addEventListener("click", closeModal2);
  });

  container.appendChild(divFolder);
}
loadFromBrowser();

const searchByBox = () => {
  let key = document.querySelector("#searchBox").value.toUpperCase();
  let list = document.querySelector("#targetRow");

  let names = list.querySelectorAll("#tit0");
  let jobRoles = list.querySelectorAll("#tit1");
  let depts = list.querySelectorAll("#tit2");

  for (var i = 0; i < names.length; i++) {
    let name = names[i].innerHTML;
    let job = jobRoles[i].innerHTML;
    let dept = depts[i].innerHTML;

    if (name) {
      if (name.toUpperCase().indexOf(key) > -1) {
        names[
          i
        ].parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
          "";
      } else {
        names[
          i
        ].parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
          "none";
      }
    }
  }
};
let searchBox = document.querySelector("#searchBox");
searchBox.onkeyup = searchByBox;

let btnGroup = document.querySelector(".btnGroup");
let btns = btnGroup.querySelectorAll(".all");

//   console.log(btns[0].innerHTML + " btn visible " + btns.length)

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    console.log("btn clicked " + btns[i].innerHTML);
    let key = btns[i].innerHTML;
    // let names = container.querySelectorAll("[purpose=employeeName]");
    let list = document.querySelector("#targetRow");

    let names = list.querySelectorAll("#tit0");
    for (var j = 0; j < names.length; j++) {
      let name = names[j].innerHTML;
      if (i == 0) {
        list.innerHTML = "";
        loadFromBrowser();
      }

      if (name) {
        if (name.toUpperCase().indexOf(key) == 0) {
          names[
            j
          ].parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
            "";
        } else {
          names[
            j
          ].parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
            "none";
        }
      }
    }
  });
}

//Filter
// var SelectOption=document.getElementById(".form-select");
// if(SelectOption.options[0])
function getSelectedValue(event) {
  console.log(
    "Value: " +
      event.target.value +
      "; Display: " +
      event.target[event.target.selectedIndex].text +
      "."
  );
  if (event.target[event.target.selectedIndex].text == "Department") {
    console.log("target succeded");

    document.querySelector(".list2").style.display = "none";
    document.querySelector(".list3").style.display = "none";
  } else if (
    event.target[event.target.selectedIndex].text == "Preffered Name"
  ) {
    document.querySelector(".list1").style.display = "";
    document.querySelector(".list2").style.display = "";
    document.querySelector(".list3").style.display = "";
  } else if (event.target[event.target.selectedIndex].text == "Office") {
    document.querySelector(".list1").style.display = "none";
    document.querySelector(".list3").style.display = "none";
  } else if (event.target[event.target.selectedIndex].text == "Job Title") {
    document.querySelector(".list1").style.display = "none";
    document.querySelector(".list2").style.display = "none";
  }
}
//clear Button
document.querySelector(".ser").addEventListener("click", function () {
  let key = (document.querySelector("#searchBox").value = "");
  let list = document.querySelector("#targetRow");
  list.innerHTML = "";
  loadFromBrowser();
});

let filterResources = [];

let deptUl = document.querySelector(".list1");
let depLi = deptUl.querySelectorAll(".list-items");
let boldButton = "";
for (let i = 0; i < depLi.length; i++) {
  depLi[i].addEventListener("click", function () {
    boldButton = depLi[i];
    filterResources = [];
    depLi[i].style.fontWeight = "bold";

    let deptFilter = depLi[i].innerHTML.toUpperCase(); //name of the particular department

    for (var k = 0; k < depLi.length; k++) {
      if (k != i) {
        depLi[k].style.fontWeight = "normal";
      }
    }
    let totalDepartments = container.querySelectorAll("#tit2"); //total departments
    console.log(totalDepartments.length);
    for (var j = 0; j < totalDepartments.length; j++) {
      if (deptFilter == totalDepartments[j].innerHTML.toUpperCase()) {
        totalDepartments[j].parentElement.parentElement.style.display = "";
        filterResources.push(totalDepartments[j]);
        console.log(filterResources);
      } else {
        totalDepartments[j].parentElement.parentElement.style.display = "none";
      }
    }
  });
}

// $("#dd").on("change", function () {
//   $("#last-name").val($(this).val());

// updateFullName();
// {
//   console.log("triggered");
//   $("#dd").val($("#firs-tname").val() + " " + $("#last-name").val());
// }
// // });
// $("#first-name, #last-name").on("input", updateFullName);

/* Edit details modal */

let editDetails = document.querySelector(".edit_btn");
editDetails.addEventListener("click", function () {
  console.log("edit Details clicked");
  openModal();
  closeModal2();
  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  //console.log(localStorage.getItem("rid"))
  let index = document.querySelector("#mid").innerHTML;
  console.log(index + " employee needed");
  // modal.style.display = "block";
  let employeeJson = localStorage.getItem("data");
  let employees = JSON.parse(employeeJson);
  //console.log(employees[0].name1)
  btnUpdateEmployee = document.querySelector("#btn_update");

  btnUpdateEmployee.style.display = "block";
  btnModalAddEmployee.style.display = "none";

  document.querySelector(".Modaltitle").innerHTML = "Update Employee Details";

  document.getElementById("first-name").value = employees[index].name1;
  document.getElementById("last-name").value = employees[index].name2;
  document.getElementById("email-check").value = employees[index].Email;
  document.getElementById("job-titlee").value = employees[index].job;
  document.getElementById("office-input").value = employees[index].office;
  document.getElementById("department").value = employees[index].dept;
  document.getElementById("phoneNum").value = employees[index].phoneNum;
  document.getElementById("skype").value = employees[index].skype;

  btnUpdateEmployee.addEventListener("click", function () {
    let name1 = document.getElementById("first-name").value;
    let name2 = document.getElementById("last-name").value;
    let email = document.getElementById("email-check").value;
    let job = document.getElementById("job-titlee").value;
    let office = document.getElementById("office-input").value;
    let dept = document.getElementById("department").value;
    let phno = document.getElementById("phoneNum").value;
    let skypeid = document.getElementById("skype").value;

    employees[index].name1 = name1;
    employees[index].name2 = name2;
    employees[index].Email = email;
    employees[index].job = job;
    employees[index].office = office;
    employees[index].dept = dept;
    employees[index].phoneNum = phno;
    employees[index].skype = skypeid;

    let njson = JSON.stringify(employees);
    localStorage.setItem("data", njson);
    closeModal2();
    location.reload();
  });
});
