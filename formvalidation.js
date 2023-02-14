function checkInput(){
    var pass = document.myform.password.value;
    if(pass.length<8){
        document.getElementById("password").innerHTML="Password must be at least 8 characters.";
        document.getElementById("password").className="red";
    }
    else{
        document.getElementById("password").innerHTML="Hooray! Your account has been succesfully created.";
        document.getElementById("password").className="green";
    }
    var today = new Date();
    var dob = document.myform.bday.value;
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if(age<=21){
        document.getElementById("dob").innerHTML="Minors are not allowed!";
        document.getElementById("dob").className="red";
    }
}