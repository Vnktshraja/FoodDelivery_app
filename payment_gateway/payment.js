document.getElementById("billForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevents form reload
    sendEmail();
    alert("Paid successfully!");
    sessionStorage.clear();
        window.location.href = "../../menu.html#cart-page";

});

function sendEmail(){
   
    var page = sessionStorage.getItem("invoiceHtml");
    console.log(page);
const apiUrl = "http://localhost:8080/foodApp/SendEmailServlet";
    fetch(apiUrl, {
        method: "POST",
        
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            to: "venkateshkannan0316@gmail.com",
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

$(document).ready(function(){
    $('.bxslider').bxSlider({
        controls: false
    });
});