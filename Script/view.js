import Local from "./locStorage.js";
import { validation } from "./validations.js";
class viewUi {
  firstName = "";
  lastName = "";
  // btnModalAddEmployee = document.getElementById("bt_add_emp");
  // btnAddEmployee = document.getElementById("add_emp");
  container = document.getElementById("targetRow");
  // Datacollection = [];
  Datacollection2 = [];
  divFolderArray = [];
  CardCollection = [];
  modal = document.querySelector(".modal");
  detailsModal = document.querySelector("#contactModal1");
  overlay = document.querySelector(".overlay");
  overlay2 = document.querySelector(".overlay2");
  btnCloseModal = document.querySelector(".close-modal");
  btnCloseModal2 = document.querySelector(".close-modal2");
  btnsOpenModal = document.querySelector("#add_emp");
  close1() {
    this.btnCloseModal.addEventListener("click", this.closeModal);
  }
  close2() {
    this.btnCloseModal2.addEventListener("click", this.closeModal2);
  }
  openModal = function () {
    this.modal.style.display = "block";
    this.overlay.style.display = "block";
  };

  closeModal = function () {
    let modal = document.querySelector(".modal");
    let overlay = document.querySelector(".overlay");
    modal.style.display = "none";
    overlay.style.display = "none";
  };
  openModal2 = function () {
    this.detailsModal.style.display = "block";
    this.overlay2.style.display = "block";
  };
  closeModal2 = function () {
    let detailsModal = document.querySelector("#contactModal1");
    let overlay2 = document.querySelector(".overlay2");
    detailsModal.style.display = "none";
    overlay2.style.display = "none";
  };
  // storeInBowser(Datacollection) {
  //   console.log(Datacollection);
  //   let extractedfromArray = JSON.stringify(Datacollection);

  //   localStorage.setItem("data", extractedfromArray);
  // }
  //Add Employee Button
  addButtonEmp() {
    let firstName = "";
    let lastName = "";
    let detailsModal = document.querySelector("#contactModal1");
    // btnModalAddEmployee = document.getElementById("bt_add_emp");
    // btnAddEmployee = document.getElementById("add_emp");
    let container = document.getElementById("targetRow");
    let btnModalAddEmployee = document.getElementById("bt_add_emp");
    let btnAddEmployee = document.getElementById("add_emp");
    let btnsOpenModal = document.querySelector("#add_emp");
    let overlay = document.querySelector(".overlay");
    let btnCloseModal = document.querySelector(".close-modal");
    let btnCloseModal2 = document.querySelector(".close-modal2");
    let modal = document.querySelector(".modal");
    btnAddEmployee.addEventListener("click", function () {
      console.log("hi i am clicked this is add button");
      btnsOpenModal.addEventListener("click", function () {
        modal.style.display = "block";
        overlay.style.display = "block";
      });

      btnCloseModal.addEventListener("click", function () {
        modal.style.display = "none";
        overlay.style.display = "none";
      });
      overlay.addEventListener("click", function () {
        modal.style.display = "none";
        overlay.style.display = "none";
      });
      document.querySelector(".Modaltitle").innerHTML =
        "Enter Employee Details";
      document.getElementById("form-target").reset();
      let btnUpdateEmployee = document.querySelector("#btn_update");

      btnUpdateEmployee.style.display = "none";
      btnModalAddEmployee.style.display = "block";
      console.log(firstName + " in btnAddEmployee");
    });
  }

  addModalButtonEmp() {
    let firstName = "";
    let lastName = "";
    let Datacollection = [];
    let divFolderArray = [];
    // btnModalAddEmployee = document.getElementById("bt_add_emp");
    // btnAddEmployee = document.getElementById("add_emp");
    let container = document.getElementById("targetRow");
    let btnModalAddEmployee = document.getElementById("bt_add_emp");
    let btnAddEmployee = document.getElementById("add_emp");
    let btnsOpenModal = document.querySelector("#add_emp");
    let overlay = document.querySelector(".overlay");
    let btnCloseModal = document.querySelector(".close-modal");
    let detailsModal = document.querySelector("#contactModal1");
    let btnCloseModal2 = document.querySelector(".close-modal2");
    let modal = document.querySelector(".modal");
    btnModalAddEmployee.addEventListener("click", function () {
      if (validation()) {
        let templates = document.getElementsByTagName("template")[0];
        let divFolderTemplate = templates.content.querySelector("#upper");
        let divFolder = document.importNode(divFolderTemplate, true);
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

        console.log("hi");
        // let rid = Datacollection.length;
        //divFolder.id = "" + rid
        let rjson = localStorage.getItem("data");
        if (rjson) {
          Datacollection = JSON.parse(rjson);
        }

        let mid = Datacollection.length;
        console.log("hdsi");

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
        console.log(Datacollection);

        let extractedfromArray = JSON.stringify(Datacollection);
        localStorage.setItem("data", extractedfromArray);

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
  }

  Editdetails() {
    let editDetails = document.querySelector(".edit_btn");
    let firstName = "";
    let lastName = "";
    let Datacollection = [];

    let container = document.getElementById("targetRow");
    let btnModalAddEmployee = document.getElementById("bt_add_emp");
    let btnAddEmployee = document.getElementById("add_emp");
    let btnsOpenModal = document.querySelector("#add_emp");
    let overlay = document.querySelector(".overlay");
    let btnCloseModal = document.querySelector(".close-modal");
    let btnCloseModal2 = document.querySelector(".close-modal2");
    let modal = document.querySelector(".modal");
    let detailsModal = document.querySelector("#contactModal1");
    let overlay2 = document.querySelector(".overlay2");
    editDetails.addEventListener("click", function () {
      console.log("edit Details clicked");
      modal.style.display = "block";
      overlay.style.display = "block";
      detailsModal.style.display = "none";
      overlay2.style.display = "none";
      btnCloseModal.addEventListener("click", this.closeModal);
      overlay.addEventListener("click", this.closeModal);
      //console.log(localStorage.getItem("rid"))
      let index = document.querySelector("#mid").innerHTML;
      console.log(index + " employee needed");
      // modal.style.display = "block";
      let employeeJson = localStorage.getItem("data");
      let employees = JSON.parse(employeeJson);
      //console.log(employees[0].name1)
      let btnUpdateEmployee = document.querySelector("#btn_update");

      btnUpdateEmployee.style.display = "block";
      btnModalAddEmployee.style.display = "none";

      document.querySelector(".Modaltitle").innerHTML =
        "Update Employee Details";

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
        detailsModal.style.display = "none";
        overlay2.style.display = "none";
        location.reload();
      });
    });
  }
}
export default new viewUi();
