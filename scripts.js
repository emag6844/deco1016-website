function validateForm() {
    var x = document.forms ["myForm"]
    ["username"].value;
    if (x == "") {
      alert("username must be filled out");
      return false;
    }
    var x = document.forms ["myForm"]
    ["email"].value;
    if (x=="") {
        alert ("Email must be filled out");
        return false;
    }

    var x = document.forms ["myForm"]
    ["userPassword"].value;
    if (x=="") {
        alert ("Password must be filled out");
        return false;
    }
    var x = document.forms ["myForm"]
    ["userPasswordConfirm"].value;
    if (x=="") {
        alert ("Password must be filled out");
        return false;
    }
    var userPassword = document.getElementById ("userPassword").value;
    var userPasswordConfirm = document.getElementById ("userPasswordConfirm").value;
    if (userPassword !== userPasswordConfirm) {
        alert ("Not matching");
        return false;
    }
}
function validateForm_two() {
    var x = document.forms ["myFormTwo"]
    ["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    var x = document.forms ["myFormTwo"]
    ["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
    var x = document.forms ["myFormTwo"]
    ["adr"].value;
    if (x == "") {
      alert("Address must be filled out");
      return false;
    }
    var x = document.forms ["myFormTwo"]
    ["city"].value;
    if (x == "") {
      alert("City must be filled out");
      return false;
    }
    // var x = document.forms ["myFormTwo"]
    // ["state"].value;
    // if (x == "") {
    //   alert("State must be filled out");
    //   return false;
    // }
    var x = document.forms ["myFormTwo"]
    ["zip"].value;
    if (x == "") {
      alert("Postcode must be filled out");
      return false;
    }
    var x = document.forms ["myFormTwo"]
    ["cname"].value;
    if (x == "") {
      alert("Name on card must be filled out");
      return false;
    }
    var x = document.forms ["myFormTwo"]
    ["ccnum"].value;
    if (x == "") {
      alert("Credit card number must be filled out");
      return false;
    }
    var x = document.forms ["myFormTwo"]
    ["expmonth"].value;
    if (x == "") {
      alert("Expiration month must be filled out");
      return false;
    }
    var x = document.forms ["myFormTwo"]
    ["expyear"].value;
    if (x == "") {
      alert("Expiration year must be filled out");
      return false;
    }
    var x = document.forms ["myFormTwo"]
    ["cvv"].value;
    if (x == "") {
      alert("CVV must be filled out");
      return false;
    }
}

