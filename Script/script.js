import search from "./search.js";
import Local from "./locStorage.js";
import viewUi from "./view.js";

viewUi.addButtonEmp();
viewUi.addModalButtonEmp();
viewUi.Editdetails();
Local.loadFromBrowser();
let searchBox = document.querySelector("#searchBox");
searchBox.onkeyup = search.searchByBox;
search.SearchByButton();
search.filter();
search.searchByDiffCriteria();
search.clear();
viewUi.close1();
viewUi.close2();
