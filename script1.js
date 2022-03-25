let timeout;

// traversing the DOM and getting the input and span using their IDs

let password = document.getElementById('PassEntry')
let strengthBadge = document.getElementById('StrengthDisp')

// The strong and weak password Regex pattern checker

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{5,}))')

function StrengthChecker(PasswordParameter){
    // We then change the badge's color and text based on the password strength

    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong Password'
    } else if(mediumPassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = 'Orange'
        strengthBadge.textContent = 'Medium Password'
    } else{
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Weak Password'
    }
}

// Adding an input event listener when a user types to the  password input 

password.addEventListener("input", () => {

    //The badge is hidden by default, so we show it

    strengthBadge.style.display= 'block'
    clearTimeout(timeout);

    //We then call the StrengChecker function as a callback then pass the typed password to it

    timeout = setTimeout(() => StrengthChecker(password.value), 500);

    //Incase a user clears the text, the badge is hidden again

    if(password.value.length !== 0){
        strengthBadge.style.display != 'block'
    } else{
        strengthBadge.style.display = 'none'
    }
});


// email validation

let email = document.getElementById('Email')
let strengthBadge1 = document.getElementById('StrengthDisp1')
// The strong and weak password Regex pattern checker

let validemail = new RegExp('([a-z0-9]+@[a-z]+\.[a-z]{2,3})')

function StrengthChecker1(emailParameter){
    // We then change the badge's color and text based on the password strength

    if(validemail.test(emailParameter)) {
        strengthBadge1.style.backgroundColor = "green"
        strengthBadge1.textContent = 'Valid email address entered.'
   
    } 
    else
    {
        strengthBadge1.style.backgroundColor = 'red'
        strengthBadge1.textContent = 'Please enter valid email address.'
    }
}

// Adding an input event listener when a user types to the  password input 

email.addEventListener("input", () => {

    //The badge is hidden by default, so we show it

    strengthBadge1.style.display= 'block'
    clearTimeout(timeout);

    //We then call the StrengChecker function as a callback then pass the typed password to it

    timeout = setTimeout(() => StrengthChecker1(email.value), 500);

    //Incase a user clears the text, the badge is hidden again

    if(email.value.length !== 0){
        strengthBadge1.style.display != 'block'
    } else{
        strengthBadge1.style.display = 'none'
    }
});


    //Phone Number validation.
    function val(){
        var mobile = document.getElementById("mobile").value;
        var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        let strengthBadge3 = document.getElementById('StrengthDisp3')
        
        if(mobile.trim()==""){
          strengthBadge3.style.color = "Orange";
          strengthBadge3.textContent = 'Enter your mobile number';
        
        }
        else if((regex.test(mobile))){
          strengthBadge3.style.color = "Green";
          strengthBadge3.textContent = 'Valid Mobile number Entered';
        }
        else
        {
          strengthBadge3.style.color = "Red";
          strengthBadge3.textContent = 'Invalid Mobile number Entered';
        }
        }
        