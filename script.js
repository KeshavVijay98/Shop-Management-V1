const products = [];
const productForm = document.querySelector("#product-form");
productForm.addEventListener("submit" ,function(event) {

    // validation
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
    const quantity = document.querySelector("#productQuantity").value .trim();
    if(quantity === "") {
        alert("quantity required");
        return;
    }
    const quantityy = Number(quantity);
    if(quantityy<0 || quantityy>100) {
        alert("quantity required");
        return;
    }
    const unit = document.querySelector("#productUnit").value;

    const price = document.querySelector("#productPrice").value .trim();
    if(price === "") {
        alert("price required");
        return;
    }
    const pricee = Number(price);
    if(pricee<0 || pricee>1000000) {
        alert("price required");
        return;
    }
    const product = {
        name: name,
        quantity: quantityy,
        unit: unit,
        price: pricee
    }
    products.push(product)
    renderProducts();
});

// add product
const ptbody = document.querySelector("#p-t-body");
function renderProducts() {
    ptbody.innerHTML = "";
    for(let i=0; i<products.length; i++) {
        const product = products[i];       
        ptbody.innerHTML += 
        `<tr>
            <td>${product.name}</td>
            <td>${product.quantity} ${product.unit}</td>
            <td>${product.price} <span>Rs</span></td>
            <td><button>Delete</button></td>
        </tr>`
    }
}

// delete product