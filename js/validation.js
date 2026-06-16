function validateEmail(email){

    const pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}

document
.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    if(!validateEmail(email)){

        alert("Email tidak sah");

        return;

    }

    alert("Pendaftaran berjaya");

});