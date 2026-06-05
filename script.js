const products = [];
let editingindex = null;
const productForm = document.querySelector("#product-form");
productForm.addEventListener("submit" ,function(event) {

    // read product and validation 
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
    if(quantityy<0 || quantityy>1000) {
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
    for( let i=0; i<products.length; i++) {
        if(i === editingindex) {
            continue;
        }
        if(products[i].name === name) {
            alert("product already exist");
            return;
        }
    }
    if(editingindex === null) {
        products.push(product);
    }
    else {
        products[editingindex] = product
    }
    editingindex = null;
    renderProducts();
    productForm.reset();
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
            <td><button onclick="deleteProduct(${i})" class="delete"> <i class="fa-solid fa-trash"> </button></td>
            <td><button onclick="editProduct(${i})" class="edit"> <i class="fa-solid fa-pen-to-square"></i> </button></td>
        </tr>`
    }
}

// delete product
function deleteProduct(index) {
    products.splice(index, 1);
    renderProducts();
}

// edit product
function editProduct(index) {
    const product = products[index];
    document.querySelector("#productName").value = product.name;
    document.querySelector("#productQuantity").value = product.quantity;
    document.querySelector("#productUnit").value = product.unit;
    document.querySelector("#productPrice").value = product.price;
    editingindex = index;
}