import Local from "./locStorage.js";

class search {
  firstName = "";
  lastName = "";
  btnModalAddEmployee = document.getElementById("bt_add_emp");
  btnAddEmployee = document.getElementById("add_emp");
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
    let btnCloseModal2 = document.querySelector(".close-modal2");
    divFolder.querySelector("#tit0").innerHTML = name1 + " " + name2;
    divFolder.querySelector("#tit1").innerHTML = job;
    divFolder.querySelector("#tit2").innerHTML = dept;
    let view = divFolder.querySelector("[action=view]");
    console.log("view created");
    view.addEventListener("click", function () {
      console.log("View is now clickable");
      let detailsModal = document.querySelector("#contactModal1");
      let overlay2 = document.querySelector(".overlay2");
      document.querySelector("#mid").innerHTML = mid;
      document.querySelector("#name-view").innerHTML = name1 + " " + name2;
      document.querySelector("#email-view").innerHTML = Email;
      document.querySelector("#job-view").innerHTML = job;
      document.querySelector("#office-view").innerHTML = office;
      document.querySelector("#dept-view").innerHTML = dept;
      document.querySelector("#phno-view").innerHTML = phoneNum;
      document.querySelector("#skype-view").innerHTML = skype;
      // this.openModal2;
      detailsModal.style.display = "block";
      overlay2.style.display = "block";
      let overlay = document.querySelector(".overlay");
      btnCloseModal2.addEventListener("click", this.closeModal2);
      overlay.addEventListener("click", this.closeModal2);
    });
    let container = document.getElementById("targetRow");
    container.appendChild(divFolder);
  }
  searchByBox = () => {
    console.log("hih");
    let key = document.querySelector("#searchBox").value.toUpperCase();
    let list = document.querySelector("#targetRow");
    let container = document.getElementById("targetRow");
    let names = list.querySelectorAll("#tit0");
    let jobRoles = list.querySelectorAll("#tit1");
    let depts = list.querySelectorAll("#tit2");
    let CardCollection = [];
    let rjson = localStorage.getItem("data");
    if (!rjson) {
      return;
    }

    let Datacollection2 = JSON.parse(rjson);

    for (var i = 0; i < Datacollection2.length; i++) {
      let name = Datacollection2[i].name1;
      if (name) {
        if (name.toUpperCase().includes(key)) {
          CardCollection.push(Datacollection2[i]);
          console.log(CardCollection);
        } else {
        }
      }
    }
    container.innerHTML = "";
    console.log("ks[s");
    for (let i = 0; i < CardCollection.length; i++) {
      {
        this.createEmployeeOnLoad(
          CardCollection[i].mid,
          CardCollection[i].name1,
          CardCollection[i].name2,
          CardCollection[i].Email,
          CardCollection[i].job,
          CardCollection[i].dept,
          CardCollection[i].office,
          CardCollection[i].phoneNum,
          CardCollection[i].skype
        );
      }
    }
  };

  // console.log(btns[0].innerHTML + " btn visible " + btns.length)
  render() {
    let container = document.getElementById("targetRow");
    let btnGroup = document.querySelector(".btnGroup");
    let btns = btnGroup.querySelectorAll(".all");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        console.log("btn clicked " + btns[i].innerHTML);
        let key = btns[i].innerHTML;
        // let names = container.querySelectorAll("[purpose=employeeName]");
        let list = document.querySelector("#targetRow");
        if (i == 0) {
          container.innerHTML = "";
          Local.loadFromBrowser();
          console.log("dd");
          return;
        }
        // let names = list.querySelectorAll("#tit0");
        let CardCollection = [];
        let rjson = localStorage.getItem("data");
        if (!rjson) {
          return;
        }
        let Datacollection2 = JSON.parse(rjson);
        for (var j = 0; j < Datacollection2.length; j++) {
          // let name = names[j].innerHTML;
          let name = Datacollection2[j].name1;

          if (name) {
            if (name.toUpperCase().indexOf(key) == 0) {
              CardCollection.push(Datacollection2[j]);
              console.log(CardCollection);
            } else {
            }
          }
        }
        container.innerHTML = "";
        console.log("ks[s");
        // this.loadFromBrowser2(CardCollection);
        for (let i = 0; i < CardCollection.length; i++) {
          this.createEmployeeOnLoad(
            CardCollection[i].mid,
            CardCollection[i].name1,
            CardCollection[i].name2,
            CardCollection[i].Email,
            CardCollection[i].job,
            CardCollection[i].dept,
            CardCollection[i].office,
            CardCollection[i].phoneNum,
            CardCollection[i].skype
          );
        }
      });
    }
  }
  //Filter
  // var SelectOption=document.getElementById(".form-select");
  // if(SelectOption.options[0])

  trigger() {
    let formEle = document.getElementById("formfield");
    formEle.addEventListener("change", this.getSelectedValue);
  }
  getSelectedValue() {
    let formEle = document.getElementById("formfield");
    let ind = formEle.selectedIndex;
    console.log(ind);
    console.log("sd");
    let tex = formEle.options[ind].text;
    console.log(tex);
    if (tex == "Department") {
      console.log("binod");
    }
    if (tex == "Department") {
      console.log("target succeded");

      document.querySelector(".list2").style.display = "none";
      document.querySelector(".list3").style.display = "none";
    } else if (tex == "Preffered Name") {
      document.querySelector(".list1").style.display = "";
      document.querySelector(".list2").style.display = "";
      document.querySelector(".list3").style.display = "";
    } else if (tex == "Office") {
      document.querySelector(".list1").style.display = "none";
      document.querySelector(".list3").style.display = "none";
    } else if (tex == "Job Title") {
      document.querySelector(".list1").style.display = "none";
      document.querySelector(".list2").style.display = "none";
    }
  }
  //clear Button
  clear() {
    document.querySelector(".ser").addEventListener("click", function () {
      let key = (document.querySelector("#searchBox").value = "");
      let list = document.querySelector("#targetRow");
      list.innerHTML = "";
      Local.loadFromBrowser();
    });
  }

  filter() {
    let filterResources = [];

    let deptUl = document.querySelector(".list1");
    let depLi = deptUl.querySelectorAll(".list-items");
    console.log(depLi);
    let boldButton = "";
    let container = document.getElementById("targetRow");
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
        console.log(totalDepartments.length, i);
        for (var j = 0; j < totalDepartments.length; j++) {
          if (deptFilter == totalDepartments[j].innerHTML.toUpperCase()) {
            totalDepartments[
              j
            ].parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
              "";
            filterResources.push(totalDepartments[j]);
            console.log(filterResources);
          } else {
            totalDepartments[
              j
            ].parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
              "none";
          }
        }
      });
    }
  }
  filter1() {
    let officeUl = document.querySelector(".list3");
    let officeLi = officeUl.querySelectorAll(".list-items2");
    let boldButton1 = "";
    let container = document.getElementById("targetRow");
    for (let i = 0; i < officeLi.length; i++) {
      officeLi[i].addEventListener("click", function () {
        boldButton1 = officeLi[i];
        let filterResources = [];
        officeLi[i].style.fontWeight = "bold";

        let deptFilter = officeLi[i].innerHTML.toUpperCase(); //name of the particular department

        for (var k = 0; k < officeLi.length; k++) {
          if (k != i) {
            officeLi[k].style.fontWeight = "normal";
          }
        }
        let totalDepartments = container.querySelectorAll("#tit1"); //total departments
        console.log(totalDepartments.length, i);
        for (var j = 0; j < totalDepartments.length; j++) {
          if (deptFilter == totalDepartments[j].innerHTML.toUpperCase()) {
            totalDepartments[
              j
            ].parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
              "";
            filterResources.push(totalDepartments[j]);
            console.log(filterResources);
          } else {
            totalDepartments[
              j
            ].parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
              "none";
          }
        }
      });
    }
  }

  // loadFromBrowser2(Datacollection) {
  //   for (let i = 0; i < Datacollection.length; i++) {
  //     {
  //       this.createEmployeeOnLoad(
  //         Datacollection[i].mid,
  //         Datacollection[i].name1,
  //         Datacollection[i].name2,
  //         Datacollection[i].Email,
  //         Datacollection[i].job,
  //         Datacollection[i].dept,
  //         Datacollection[i].office,
  //         Datacollection[i].phoneNum,
  //         Datacollection[i].skype
  //       );
  //     }
  //   }
  // }
}

export default new search();
