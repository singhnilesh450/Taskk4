class Validate {
  validation(firstName, lastName, email) {
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
}
export default new Validate();
