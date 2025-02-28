
var valid = false;
var passwordFromdb;
document.getElementById("").addEventListener('click', 

  function logging(event){
    event.preventDefault();

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

    if(email == 'test@gmail.com' && password == 'admin'){
      alert('Login successful!');
        window.location.replace( "home.html");
    }else {
      alert('Invalid email or password.');
    }

  })

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
    validateUser()

}

async function validateUser(){
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
            localStorage.setItem("user-name", users.name);
            localStorage.setItem("user-email", users.email);
        alert('Login successful!');
          window.location.replace( "./home.html");
        }else if(users.password !== password){ 
        alert('Invalid password.');
        }
    } catch (error) {
      console.error("Error:", error );
      alert("Failed to register user.");
    }
        
    }

   

}


const buttons = document.querySelectorAll("");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Class-based event triggered!");
            

        });
    });