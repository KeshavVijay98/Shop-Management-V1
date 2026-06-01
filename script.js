const products = [];
const productForm = document.querySelector("#product-form");
productForm.addEventListener("submit" ,function(event) {
    event.preventDefault();
    const name = document.querySelector("#productName").value .trim() .toLowerCase();
    if(name === "") {
        alert("name required");
        return;
    }
    if(name.length<3 || name.length>25) {
        alert("name required");
        return;
    }
    const quantity = Number(document.querySelector("#productQuantity").value .trim());
    if(quantity === "") {
        alert("quantity required");
        return;
    }
    if(quantity<0 || quantity>100) {
        alert("quantity required");
        return;
    }
    const price = Number(document.querySelector("#productPrice").value .trim());
    if(price === "") {
        alert("price required");
        return;
    }
    if(price<0 || price>1000000) {
        alert("quantity required");
        return;
    }
    const product = {
        name: name,
        quantity: quantity,
        price: price
    }
    products.push(product)
    renderProducts();
});

const ptbody = document.querySelector("#p-t-body");
function renderProducts() {
    ptbody.innerHTML = "";
    for(let i=0; i<products.length; i++) {
        const product = products[i];       
        ptbody.innerHTML += 
        `<tr>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.price}</td>
        </tr>`
    }
}