import Local from "./locStorage.js";

class search {
  container = document.getElementById("targetRow");
  detailsModal = document.querySelector("#contactModal1");
  overlay = document.querySelector(".overlay");
  overlay2 = document.querySelector(".overlay2");
  btnCloseModal = document.querySelector(".close-modal");
  btnCloseModal2 = document.querySelector(".close-modal2");

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
    divFolder.querySelector("#tit0").innerHTML = name1 + " " + name2;
    divFolder.querySelector("#tit1").innerHTML = job;
    divFolder.querySelector("#tit2").innerHTML = dept;
    self = this;
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
      self.detailsModal.style.display = "block";
      self.overlay2.style.display = "block";
      self.btnCloseModal2.addEventListener("click", this.closeModal2);
      self.overlay.addEventListener("click", this.closeModal2);
    });
    this.container.appendChild(divFolder);
  }
  searchByBox = () => {
    let key = document.querySelector("#searchBox").value.toUpperCase();
    this.SearchInCardsAndDisplayTheItems(key);
  };

  SearchInCardsAndDisplayTheItems(key) {
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
        } else {
        }
      }
    }
    this.container.innerHTML = "";
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
  }
  SearchByButton() {
    let btnGroup = document.querySelector(".btnGroup");
    let btns = btnGroup.querySelectorAll(".all");
    var self = this;
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        let key = btns[i].innerHTML;
        if (i == 0) {
          self.container.innerHTML = "";
          Local.loadFromBrowser();
          console.log("dd");
          return;
        }
        self.SearchInCardsAndDisplayTheItems(key);
      });
    }
  }

  filter() {
    let formEle = document.getElementById("formfield");
    formEle.addEventListener("change", this.getSelectedValue);
  }
  getSelectedValue() {
    let formEle = document.getElementById("formfield");
    let ind = formEle.selectedIndex;
    let tex = formEle.options[ind].text;
    if (tex == "Department") {
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
      let list = document.querySelector("#targetRow");
      list.innerHTML = "";
      Local.loadFromBrowser();
    });
  }

  boldButton1 = "";
  searchByDiffCriteria() {
    let deptUl = document.querySelector(".list1");
    var depLi = deptUl.querySelectorAll(".list-items");
    let jobUl = document.querySelector(".list3");
    let jobLi = jobUl.querySelectorAll(".list-items2");
    let officeUl = document.querySelector(".list2");
    let officeLi = officeUl.querySelectorAll(".list-items1");
    this.helper(jobLi, 1);
    this.helper(depLi, 0);
    this.helper(officeLi, 2);
  }

  helper(list, number) {
    self = this;
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("click", function () {
        // if (self.boldButton1.text != "") {
        //   console.log("ddfee");
        //   console.log(self.boldButton1.text);
        //   // self.boldButton1.style.fontWeight = "normal";
        // }
        this.boldButton1 = list[i];
        list[i].style.fontWeight = "bold";

        let deptFilter = list[i].innerHTML.toUpperCase(); //name of the
        for (var k = 0; k < list.length; k++) {
          if (k != i) {
            list[k].style.fontWeight = "normal";
          }
        }
        let container = document.getElementById("targetRow");
        let CardCollection = [];
        let rjson = localStorage.getItem("data");
        if (!rjson) {
          return;
        }

        let Datacollection2 = JSON.parse(rjson);
        for (var l = 0; l < Datacollection2.length; l++) {
          let name1;
          if (number == 0) {
            name1 = Datacollection2[l].dept;
          } else if (number == 1) {
            name1 = Datacollection2[l].job;
          } else {
            name1 = Datacollection2[l].office;
          }
          if (name1) {
            if (name1.toUpperCase().trim() === deptFilter.trim()) {
              CardCollection.push(Datacollection2[l]);
            } else {
            }
          }
        }
        container.innerHTML = "";
        for (let ii = 0; ii < CardCollection.length; ii++) {
          {
            self.createEmployeeOnLoad(
              CardCollection[ii].mid,
              CardCollection[ii].name1,
              CardCollection[ii].name2,
              CardCollection[ii].Email,
              CardCollection[ii].job,
              CardCollection[ii].dept,
              CardCollection[ii].office,
              CardCollection[ii].phoneNum,
              CardCollection[ii].skype
            );
          }
        }
      });
    }
  }
}

export default new search();
