const product = [];

const productForm = document.querySelector("#product-form");

productForm.addEventListener("submit" ,function(event) {

    console.log("submitted");
    event.preventDefault();
});