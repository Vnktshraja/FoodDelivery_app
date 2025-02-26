


    document.getElementById("userForm").addEventListener("submit", async function(e) {
        e.preventDefault(); // Prevents form reload

    var name = document.getElementById("name").value;
    var userName = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("confirmPass").value;
    var mobile = document.getElementById("phone").value;
    var gender = document.querySelector('input[name="gender"]:checked');


        if (!gender) {
            alert("Please select a gender.");
            return;
        }

    if(password !== confirmPassword){
        alert("Passwords do not match!");
        return;
    }
    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    var user = {
        userName: userName,
        email: email,
        password: password,
        mobile: Number(mobile),
        gender: gender.value
    }
    try {
        let response = await fetch("http://localhost:8082/foodApp/UserController/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error("HTTP error! Status: " + response.status);
        }

        let data = await response.json();
        console.log("Response:", data);

        alert("Registration successful!");
        window.location.href = "../../index.html";
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to register user.");
    }
    });

    function validateMobile() {
        var phoneInput = document.getElementById("phone");
        var errorMsg = document.getElementById("error-msg");
        phoneInput.value = phoneInput.value.replace(/\D/g, '');
        if (phoneInput.value.length > 0 && phoneInput.value.length !== 10) {
            errorMsg.textContent = "Mobile number must be exactly 10 digits.";
        } else {
            errorMsg.textContent = "";
        }
    }