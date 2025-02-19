


    document.getElementById("userForm").addEventListener("submit", function(e) {
        e.preventDefault(); // Prevents form reload

    var name = document.getElementById("name").value;
    var userName = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("confirmPass").value;
    var mobile = document.getElementById("phone").value;
    let gender = document.querySelector('input[name="gender"]:checked');

        if (!gender) {
            alert("Please select a gender.");
            return;
        }
    var user = {
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        gender: gender
    }
    console.log(user);

        
        alert("Registration successful!");
        window.location.href = "../../index.html";
    });
