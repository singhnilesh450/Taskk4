// console.log("exporting");
import search from "./search.js";
import Local from "./locStorage.js";
import viewUi from "./view.js";
import { validation } from "./validations.js";
viewUi.addButtonEmp();

viewUi.addModalButtonEmp();
viewUi.Editdetails();
Local.loadFromBrowser();
// search.loadFromBrowser2();
let searchBox = document.querySelector("#searchBox");
searchBox.onkeyup = search.searchByBox;
search.render();

let formEle = document.getElementById("formfield");
// const e = new Event("change");
// formEle.addEventListener("change", search.getSelectedValue(e));
search.trigger();
search.filter();
search.filter1();
search.clear();
validation();
viewUi.close1();
viewUi.close2();
