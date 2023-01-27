const {
  addProduct,
  updateProduct,
  deleteProduct,
  printProducts,
  sortProducts,
  searchProduct,
} = require("./serviceProducts");
// product (title, price, quantity)
let products = [];
let product = {
    title: "ballon",
    price: 25,
    quantity: 5
}
let product1 = {
    title: "pc",
    price: 800,
    quantity: 5
}
addProduct(product, products);
addProduct(product1, products);
printProducts(products);
products = deleteProduct("pc", products);
console.log("after delete");
printProducts(products);
console.log("after update");
let productToBeReplaced = {
    title: "table",
    price: 150,
    quantity: 4
}
updateProduct(productToBeReplaced, 0, products);
printProducts(products);
addProduct(product, products);
addProduct(product1, products);
sortProducts(products);
console.log("after sort");
printProducts(products);
searchProduct("pc", products);