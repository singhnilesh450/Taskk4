import Local from "./locStorage.js";
import Validate from "./validations.js";
class viewUi {
  firstName = "";
  lastName = "";
  container = document.getElementById("targetRow");
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
  //Add Employee Button
  addButtonEmp() {
    let firstName = "";
    let btnModalAddEmployee = document.getElementById("bt_add_emp");
    let btnAddEmployee = document.getElementById("add_emp");
    let btnsOpenModal = document.querySelector("#add_emp");
    let overlay = document.querySelector(".overlay");
    let btnCloseModal = document.querySelector(".close-modal");
    let modal = document.querySelector(".modal");
    btnAddEmployee.addEventListener("click", function () {
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
    let Datacollection = [];
    let divFolderArray = [];
    let container = document.getElementById("targetRow");
    let btnModalAddEmployee = document.getElementById("bt_add_emp");
    let overlay = document.querySelector(".overlay");
    let modal = document.querySelector(".modal");
    btnModalAddEmployee.addEventListener("click", function () {
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
      if (Validate.validation(name1, name2, Email)) {
        let templates = document.getElementsByTagName("template")[0];
        let divFolderTemplate = templates.content.querySelector("#upper");
        let divFolder = document.importNode(divFolderTemplate, true);

        let skype = document.getElementById("skype").value;
        divFolder.querySelector("#tit0").innerHTML = name1 + " " + name2;
        divFolder.querySelector("#tit1").innerHTML = job;
        divFolder.querySelector("#tit2").innerHTML = dept;
        let rjson = localStorage.getItem("data");
        if (rjson) {
          Datacollection = JSON.parse(rjson);
        }
        let mid = Datacollection.length;
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
        let extractedfromArray = JSON.stringify(Datacollection);
        localStorage.setItem("data", extractedfromArray);
        divFolderArray.push(divFolder);
        container.appendChild(divFolder);
        document.getElementById("form-target").reset();
        modal.style.display = "none";
        overlay.style.display = "none";
      }
    });
  }

  Editdetails() {
    let editDetails = document.querySelector(".edit_btn");
    let btnModalAddEmployee = document.getElementById("bt_add_emp");
    let overlay = document.querySelector(".overlay");
    let btnCloseModal = document.querySelector(".close-modal");
    let modal = document.querySelector(".modal");
    let detailsModal = document.querySelector("#contactModal1");
    let overlay2 = document.querySelector(".overlay2");
    let btnUpdateEmployee = document.querySelector("#btn_update");
    editDetails.addEventListener("click", function () {
      modal.style.display = "block";
      overlay.style.display = "block";
      detailsModal.style.display = "none";
      overlay2.style.display = "none";
      btnCloseModal.addEventListener("click", this.closeModal);
      overlay.addEventListener("click", this.closeModal);
      let index = document.querySelector("#mid").innerHTML;
      let employeeJson = localStorage.getItem("data");
      let employees = JSON.parse(employeeJson);
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
