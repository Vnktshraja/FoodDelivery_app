document.getElementById('print').addEventListener('click', function() {
    var originalContent = document.body.innerHTML;
    var invoiceContent = document.getElementById('dwnld').innerHTML;
    document.body.innerHTML = invoiceContent;
    window.print();
    document.body.innerHTML = originalContent;
});

var cart=sessionStorage.getItem('cartData');
cartData= JSON.parse(cart);
function cartItems(){
    var tableBody=  document.getElementById('table-body');
    tableBody.innerHTML= '';

    cartData.map(item=> {
        var tableRow= document.createElement('tr');
        
        var rowData1= document.createElement('td');
        var img= document.createElement('img');
        img.src= "../"+item.img;
        img.width = 90;
        img.height = 90;
        img.style.width = "75px";  
        img.style.height = "75px";
        rowData1.appendChild(img);
    
        var rowData2= document.createElement('td');
        rowData2.innerText= item.name;
        
        var rowData3= document.createElement('td');
        var btn1= document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerText= '-';
        var span= document.createElement('span');
        span.innerText= item.quantity;
        // var btn2= document.createElement('button');
        // btn2.setAttribute('class','increase-item');
        // btn2.innerText= '+';
        
        // rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        // rowData3.appendChild(btn2);
    
        var rowData4= document.createElement('td');
        rowData4.innerText= item.price;
    
        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);
    
        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
    var total = cartData.reduce((acc, item)=> acc+item.price,0);
    document.getElementById('total').innerText= total+'/-';
}


window.onload= function(){
    cartItems();
    setBillDetails();
}
cartItems();

function printInvoice() {
    var invoiceContent = document.getElementById('dwnld').innerHTML;
    var printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.write('<html><head><title>Print Invoice</title></head><body>');
    printWindow.document.write(invoiceContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}

function generateInvoiceNumber() {
    return "INV-" + Date.now(); // Example: INV-1701234567890
}

// Set the invoice number in HTML
document.getElementById("invoice-number").textContent = generateInvoiceNumber();

let today = new Date();
        let formattedDate = today.toLocaleDateString(); // Default format (depends on locale)

        // Set the date inside the div
        document.getElementById("today-date").textContent = formattedDate;

        function setBillDetails() {
            let name = sessionStorage.getItem("user-name") || "Guest User";
            let address = sessionStorage.getItem("billToAddress") || "Address Not Available";
    
            document.getElementById("billToName").textContent = name;
            document.getElementById("billToAddress").textContent = address;
        }
    
        // Call function on page load
        // document.addEventListener("DOMContentLoaded", setBillDetails);