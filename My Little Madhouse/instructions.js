/*function validatePassword {
    const regex = new RegExp('.*password.*');
    const password = document.getElementById("password").value;
    if (regex.test(password)) {
        document.querySelector("#passwordError").innerHTML = `"${password}" is not a very strong password!`;
    } else {
        document.querySelector("#passwordError").innerHTML = "";
    }
}

function validateAge {
        const age = document.getElementById("Age").value;
        if (age < 16) {
            document.querySelector("#ageError").innerHTML = "Age must be greater than 16";
        } else {
            document.querySelector("#ageError").innerHTML = "";
        }
    }
    function validateName() {
        const name = document.getElementById("Name").value;
        if (userInput.length < 4) {
            document.querySelector("#NameError").innerHTML = "You can do better than that- make it at least 4 characters";
        } else {
            document.querySelector("NameError").innerHTML = "";
        }
    }

   function validateEmail() {

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)) {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
     }

    function validateSoup() {
        if (!userInput === "yes" || !userInput === "y" || !userInput === "Y") {
            document.querySelector("#SoupError").innerHTML = "It's really not a question. Try again and don't screw it up";
        } else {
            document.querySelector("SoupError").innerHTML = "";
        }
    } */