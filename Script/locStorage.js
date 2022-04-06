import viewUi from "./view.js";
class Local {
  firstName = "";
  lastName = "";
  btnModalAddEmployee = document.getElementById("bt_add_emp");
  btnAddEmployee = document.getElementById("add_emp");
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

  loadFromBrowser() {
    let rjson = localStorage.getItem("data");
    if (!rjson) {
      return;
    }
    console.log(rjson);
    let Datacollection = JSON.parse(rjson);
    console.log(Datacollection[0].name2);
    for (let i = 0; i < Datacollection.length; i++) {
      {
        this.createEmployeeOnLoad(
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
  createEmployeeOnLoad(
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
    let templates = document.getElementsByTagName("template")[0];
    let divFolderTemplate = templates.content.querySelector("#upper");
    let divFolder = document.importNode(divFolderTemplate, true);
    let container = document.getElementById("targetRow");
    let overlay2 = document.querySelector(".overlay2");
    let overlay = document.querySelector(".overlay");
    let detailsModal = document.querySelector("#contactModal1");
    let btnCloseModal2 = document.querySelector(".close-modal2");
    divFolder.querySelector("#tit0").innerHTML = name1 + " " + name2;
    divFolder.querySelector("#tit1").innerHTML = job;
    divFolder.querySelector("#tit2").innerHTML = dept;
    let view = divFolder.querySelector("[action=view]");
    view.addEventListener("click", function () {
      document.querySelector("#mid").innerHTML = mid;
      document.querySelector("#name-view").innerHTML = name1 + " " + name2;
      document.querySelector("#email-view").innerHTML = Email;
      document.querySelector("#job-view").innerHTML = job;
      document.querySelector("#office-view").innerHTML = office;
      document.querySelector("#dept-view").innerHTML = dept;
      document.querySelector("#phno-view").innerHTML = phoneNum;
      document.querySelector("#skype-view").innerHTML = skype;
      detailsModal.style.display = "block";
      overlay2.style.display = "block";
      btnCloseModal2.addEventListener("click", this.closeModal2);
      overlay.addEventListener("click", this.closeModal2);
    });

    container.appendChild(divFolder);
  }

  openModal2 = function () {
    this.detailsModal.style.display = "block";
    this.overlay2.style.display = "block";
  };
  closeModal2 = function () {
    this.detailsModal.style.display = "none";
    this.overlay2.style.display = "none";
  };
}
export default new Local();
