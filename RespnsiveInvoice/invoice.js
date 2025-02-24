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
        img.src= item.img;
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
}


window.onload= function(){
    cartItems();
}
cartItems();

function printInvoice() {
    var invoiceContent = document.getElementById('invoice').innerHTML;
    var printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.write('<html><head><title>Print Invoice</title></head><body>');
    printWindow.document.write(invoiceContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}

function sendInvoiceEmail() {
    let invoiceHtml = document.getElementById("invoice").innerHTML;

    fetch("http://localhost:8080/email/send-invoice", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            to: "recipient@example.com",
            subject: "Your Invoice",
            invoiceHtml: invoiceHtml
        })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error("Error:", error));
}

function pay(){
    window.location.href='../../Select_payment_type_page/paytype.html';
}

