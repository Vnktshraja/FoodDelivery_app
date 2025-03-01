document.getElementById("billForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevents form reload
    sendEmail();
    alert("Paid successfully!");
    sessionStorage.removeItem("cartData");
    window.location.href = "../../menu.html#cart-page";
});

function sendEmail(){
    var cartItem = JSON.parse(sessionStorage.getItem("cartData")) || []; // Default to empty array

    if (!Array.isArray(cartItem)) {
    cartItem = []; // Ensure cartItem is always an array
    }
    let sum = 0;
    cartItem.forEach(item => {
    sum += item.price;
    console.log(sum);
    });
    var email = sessionStorage.getItem("user-email");
    var page = "Order quantity : "+ cartItem.length + " Amount Paid : Rs. " + sum + " /-";
    console.log(page);
const apiUrl = "http://localhost:8080/foodApp/SendEmailServlet";
    fetch(apiUrl, {
        method: "POST",
        
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            to: email,
            subject: "Your Invoice",
            invoiceHtml: page
        })
    })
    .then(response => response.text())
    .then(data => console.log("email sent", data))
    .catch(error => console.error("Error:", error));
};

function totalAmount(){
    var cartItem = JSON.parse(sessionStorage.getItem("cartData")) || []; // Default to empty array

    if (!Array.isArray(cartItem)) {
    cartItem = []; // Ensure cartItem is always an array
    }

    let sum = 0;
    cartItem.forEach(item => {
    sum += item.price;
    console.log(sum);
    });
    
    document.getElementById('m-total-amount').innerText= 'Total Price : Rs. ' + sum + ' /-';
    document.getElementById("cart-title").innerText = `Total Item : ${cartItem.length}`;
}

window.onload = function() {
    totalAmount();
};

 function validate(event) {
    event.preventDefault(); 

    let isValid = true; 

    // Get form input values
    let name = document.querySelector("input[placeholder='mr. john deo']").value.trim();
    let cardNumber = document.querySelector("input[placeholder='1111-2222-3333-4444']").value.trim();
    let expYear = document.querySelector("input[placeholder='2022']").value.trim();
    let cvv = document.querySelector("input[placeholder='1234']").value.trim();
    let expMonth = document.querySelector("input[placeholder='january']").value.trim();

    // Clear previous error messages
    document.querySelectorAll(".error").forEach(e => e.remove());

    // Validate Name
    if (name === "") {
        showError("input[placeholder='mr. john deo']", "Name is required");
        isValid = false;
    }

    // Validate Card Number (should be 16 digits)
    if (!/^\d{16}$/.test(cardNumber)) {
        showError("input[placeholder='1111-2222-3333-4444']", "Card number must be 16 digits");
        isValid = false;
    }

    // Validate Expiration Year (must be in the future)
    let currentYear = new Date().getFullYear();
    if (!/^\d{4}$/.test(expYear) || expYear < currentYear) {
        showError("input[placeholder='2022']", "Enter a valid future year");
        isValid = false;
    }

    // Validate CVV (3 or 4 digits)
    if (!/^\d{3,4}$/.test(cvv)) {
        showError("input[placeholder='1234']", "CVV must be 3 or 4 digits");
        isValid = false;
    }

    // Validate Expiration Month (should be a valid month)
    let months = [
        "january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"
    ];
    if (!months.includes(expMonth.toLowerCase())) {
        showError("input[placeholder='january']", "Enter a valid month");
        isValid = false;
    }

    // If all fields are valid, allow form submission
    if (isValid) {
        alert("Payment Successful!");
        this.submit();
    }
};

// Function to display error messages
function showError(selector, message) {
    let inputField = document.querySelector(selector);
    let errorMsg = document.createElement("p");
    errorMsg.classList.add("error");
    errorMsg.style.color = "red";
    errorMsg.style.fontSize = "12px";
    errorMsg.textContent = message;
    inputField.parentNode.appendChild(errorMsg);
}