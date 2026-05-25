const products = [];

const productForm = document.querySelector("#product-form");

productForm.addEventListener("submit" ,function(event) {

    event.preventDefault();

    const name = document.querySelector("#productName").value;
    if( name=== "")

    const quantity = document.querySelector("#productQuantity").value;

    const price = document.querySelector("#productPrice").value;

    console.log(name);
    console.log(quantity);
    console.log(price);
});