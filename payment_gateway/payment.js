document.getElementById("billForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevents form reload

    alert("Paid successfully!");
    sessionStorage.clear();
        window.location.href = "../../menu.html#cart-page";

});

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