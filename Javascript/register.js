function validateForm(){
    var display="";
    var name = document.register.name.value;
    var email = document.register.email.value;
    var pass1 = document.register.password1.value;
    var pass2 = document.register.password2.value;
    var number = document.register.number.value;
    var date = document.register.date.value;
    var rename =  /^[a-z A-Z]+$/;
    var remail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var renumber = /^[0-9]{10}$/;
    var redate =  /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var error = "";
    var f=0;
    if (!name.match(rename)) {
        f++;
        error += "Name Error : Please Enter Your Name Properly\n"
    }
    if (!email.match(remail)) {
        f++;
        error += "E-Mail Error : Please Enter a valid Email\n";
    }
    if (pass1.length<9 || pass1!=pass2) {
        f++;
        error += "Password Error : Please enter a strong Password\n"
    }
    if (!number.match(renumber)) {
        f++;
        error += "Phone Number Error : Enter a Valid Number\n"
    }
    if (!date.match(redate)) {
        f++;
        error += "Date Error : Enter a Valid Date\n"
    }
    if (f!=0)
        window.alert(error);
    else
        window.alert("Successfully Registered!");
}