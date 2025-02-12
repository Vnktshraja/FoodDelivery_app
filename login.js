document.getElementById("clk").addEventListener('click', 

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

    if(email == 'test@gmail.com' && password == 'admin'){
      alert('Login successful!');
        window.location.replace( "./home.html");
    }else {
      alert('Invalid email or password.');
    }

}


const buttons = document.querySelectorAll("");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Class-based event triggered!");
            

        });
    });