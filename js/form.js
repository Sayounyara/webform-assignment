// Amos Chamberlain
// 05/06/2022
// assignment Form Validation

/*
    validateForm function
    // Validation inputs are not emppty
    IF fname IS EMPTY
        ALERT "fname cannot be left blank"
        FOCUS fname
        RETURN false
    END IF
    IF lname IS EMPTY
        ALERT "lname cannot be left blank"
        FOCUS lname
        RETURN false
    END IF
    IF postcode IS EMPTY
        ALERT "postcode cannot be left blank"
        FOCUS postcode
        RETURN false
    END IF
    IF email IS EMPTY
        ALERT "email cannot be left blank"
        FOCUS email
        RETURN false
    END IF
    IF ccard IS EMPTY
        ALERT "ccard cannot be left blank"
        FOCUS ccard
        RETURN false
    END IF
    IF cnumber IS EMPTY
        ALERT "cnumber cannot be left blank"
        FOCUS cnumber
        RETURN false
    END IF
    IF ccv IS EMPTY
        ALERT "ccv cannot be left blank"
        FOCUS ccv
        RETURN false
    END IF

    // Validating the more complex information
    IF postcode IS NaN OR postcode length DOES NOT EQUAL 4
        ALERT "Invalid postcode"
        FOCUS postcode
        RETURN false
    ENDIF
    IF email DOES NOT CONTAIN '@' OR DOES NOT CONTAIN '.' OR email lenth IS GREATER THAN OR EQUAL TO 8
        ALERT "Invalid email address"
        FOCUS email
        RETURN false
    END IF
    IF cnumber IS NaN OR cnumber length DOES NOT EQUAL 16
        ALERT "Invalid credit card number"
        FOCUS cnumber
        RETURN false
    END IF
    IF ccv IS NaN OR ccv length DOES NOT EQUAL 3
        ALERT "Invalid ccv"
        FOCUS ccv
        RETURN false
    END IF
    IF expyear LESS THAN currentYear
        ALERT "Card has expired"
        RETURN false
    ELSE IF expyear EQUALS currentYear
        IF expmonth LESS THAN OR EQUAL TO currentYear
        ALERT "Card has expired"
        RETURN false
    END IF

    ALERT "Your details have been confirmed. Thank you."
    RETURN true
    END FUNCTION



    toOtherWebsites function
    var google = "https://www.google.com/";
    var tafe = "https://www.tafesa.edu.au/";
    var learn = "https://learn.tafesa.edu.au/";
    
    var num = parseInt prompt
    
    WHILE num IS NOT 1, 2, 3
        num = parseInt prompt
    END WHILE

    SWITCH num
        CASE 1
            window.open google
        CASE 2
            window.open tafe
        CASE 3
            window.open learn
    END SWITCH
    END FUNCTION
*/

function validateForm() {
    var fName = document.getElementById("fname");
    var fNameError = document.getElementById("fnameerror");
    var lName = document.getElementById("lname");
    var lNameError = document.getElementById("lnameerror");
    var postcode = document.getElementById("postcode");
    var postcodeError = document.getElementById("postcodeerror");
    var email = document.getElementById("email");
    var emailError = document.getElementById("emailerror");
    var cardNumber = document.getElementById("cnumber");
    var cardNumberError = document.getElementById("cnumbererror");
    var ccv = document.getElementById("ccv");
    var ccvError = document.getElementById("ccverror");

    var expMonth = document.getElementById("expmonth");
    var expYear = document.getElementById("expyear");
    var expError = document.getElementById("experror");

    var currDate = new Date();

    fNameError.innerHTML = "";
    lNameError.innerHTML = "";
    postcodeError.innerHTML = "";
    emailError.innerHTML = "";
    cardNumberError.innerHTML = "";
    ccvError.innerHTML = "";
    expError.innerHTML = "";

    if (fName.value == "") {
        // This checks to see if the first name value is blank
        // If it is blank, the program tells the user through error messages in
        // the form and returns false, keeping all the current data on screen
        fNameError.innerHTML = "&nbsp First name cannot be left blank";
        fName.focus();
        return false;
    }
    fNameError.innerHTML = "";

    if (lName.value == "") {
        // This checks to see if the last name value is blank
        lNameError.innerHTML = "&nbsp Last name cannot be left blank";
        lName.focus();
        return false;
    }
    lNameError.innerHTML = "";

    if (postcode.value == "") {
        // This checks to see if the postcode value is blank
        postcodeError.innerHTML = "&nbsp Postcode cannot be left blank";
        postcode.focus();
        return false;
    }
    if (isNaN(postcode.value) || postcode.value.length != 4) {
        // This checks to see if the postcode value is valid by checking if it is a number and if it has exactly 4 characters
        postcodeError.innerHTML = "&nbsp Invalid postcode";
        postcode.focus();
        return false;
    }
    postcodeError.innerHTML = "";

    if (email.value == "") {
        // This checks to see if the email value is blank
        emailError.innerHTML = "&nbsp Email cannot be left blank";
        email.focus();
        return false;
    }
    if (!(email.value.includes("@")) || !(email.value.includes(".")) || email.value.length < 8) {
        // This checks to see if the email value is valid by checking if it contains an 'at sign' (@) and a period (.), and if the email is greater than or equal to 8
        emailError.innerHTML = "&nbsp Invalid email address";
        email.focus();
        return false;
    }
    emailError.innerHTML = "";

    if (cardNumber.value == "") {
        // This checks to see if the card number value is blank
        cardNumberError.innerHTML = "&nbsp Card number cannot be left blank";
        cardNumber.focus();
        return false;
    }
    if (isNaN(cardNumber.value) || cardNumber.value.length != 16) {
        // This checks to see if the card number value is valid by checking if it is a number and if it has exactly 16 characters
        cardNumberError.innerHTML = "&nbsp Invalid credit card number";
        cardNumber.focus();
        return false;
    }
    cardNumberError.innerHTML = "";

    if (ccv.value == "") {
        // This checks to see if the ccv value is blank
        ccvError.innerHTML = "&nbsp CCV cannot be left blank";
        ccv.focus();
        return false;
    }
    if (isNaN(ccv.value) || ccv.value.length != 3) {
        // This checks to see if the ccv value is valid by checking if it is a number and if it has exactly 3 characters
        ccvError.innerHTML = "&nbsp Invalid CCV";
        ccv.focus();
        return false;
    }
    ccvError.innerHTML = "";

    if (expYear.value < currDate.getFullYear()) {
        // This checks to see if the expiry year value is less than the current year
        expError.innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Credit card has expired";
        return false;
    } else if (expYear.value == currDate.getFullYear()) {
        if (expMonth.value <= currDate.getMonth()) {
            // If the last check is false, this checks to see if the expiry year is equal to the current year and if the expiry
            // month is less than or equal to the current month
            expError.innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Credit card has expired";
            return false;
        }
    }
    expError.innerHTML = "";

    // If the data proceeds through all the validation checks, it alerts the user and returns true
    alert("Your details have been confirmed. Thank you.");
    return true;
}

function toOtherWebsites() {
    var google = "https://www.google.com/";
    var tafe = "https://www.tafesa.edu.au/";
    var learn = "https://learn.tafesa.edu.au/";

    var num = parseInt(prompt("Which website do you want?\n1. Google\n2. TafeSA\n3. Learn", "1"));

    // This loop checks to see if num equals 1, 2 or 3
    while (num != 1 && num != 2 && num != 3) {
        // If it isn't any valid option, the website prompts the user again
        num = parseInt(prompt("Invalid input. Try again.\nWhich website do you want?\n1. Google\n2. TafeSA\n3. Learn", "1"));
    }

    switch (num) {
        case 1:
            // If num == 1, it opens this website
            window.open(google, "Google.com", width=800,height=800);
            invalid = false;
            break;
        case 2:
            // Else, if num == 2, it opens this website
            window.open(tafe, "TafeSA", width=800,height=800);
            invalid = false;
            break;
        case 3:
            // Else, if num == 3, it opens this website
            window.open(learn, "Tafe Learn", width=800,height=800);
            invalid = false;
            break;
    }
}

function toHelp() {
    window.open("html/help.html", "Help page", width=600,height=600);
}

function onFocus(object) {
    object.style.background = "#eee";
}

function onBlur(object) {
    object.style.background = "#ccc";
}