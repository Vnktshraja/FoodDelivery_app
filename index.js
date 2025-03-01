
var valid = false;
var passwordFromdb;

function login(event){
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    validateUser(email)

}

async function validateUser(emails){
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById('password').value.trim();



  if (email!=null && password!=null) {
    try {
      let response = await fetch(`http://localhost:8080/foodApp/ValidateController?email=${email}&password=${password}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          },
      }); 

      if (!response.ok) {
        if(response.status === 400){
            valid = false;
            alert('User not registered..!');
            window.location.replace("./Registration_form/register.html");
        }else{
            throw new Error("HTTP error! Status: " + response.status);
        }
      }

      let users = await response.json();

        if(users.password === password){
            console.log(users.name);
            sessionStorage.setItem("user-name", users.name);
            sessionStorage.setItem("user-email", users.email);
        alert('Login successful!');
          window.location.replace( "./home.html");
        }else if(users.password !== password){ 
        alert('Invalid password.');
        }
    } catch (error) {
      console.error("Error:", error );
      var retry = parseInt(sessionStorage.getItem("retry-count")) || 0;
      if(retry<3){
        alert("Failed to register user. Due to server issue.");
        sessionStorage.setItem("retry-count", retry+1);
      }else{
        alert("Logging in as gust user.");
        sessionStorage.setItem("user-name", "Guest user");
        sessionStorage.setItem("user-email", emails);
        window.location.replace( "./home.html");
      }   
    }
  }
}