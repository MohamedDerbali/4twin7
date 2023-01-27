const addProduct = (product, products) => {
    products.push(product);
};
const deleteProduct = (title, products) => {
    let result = products.filter((el) => el.title !== title);
    return result;
};
const updateProduct = (product, index, products) => {
    try{
        if(index<0 || index>products.length-1){
            throw new Error("you must specify a valid index");
        }
        products[index] = product;
    }catch(err){
        console.log(err.message)
    }
};
const printProducts = (products) => {
    console.log(products);
};
const sortProducts = (products) => {
    products.sort((a,b) => b.price - a.price);
};
const searchProduct = (title, products) => {
    try{
        const searchCriteria = (el) => el.title === title;
        if(!(products[products.findIndex(searchCriteria)])){
            throw new Error("product does not exist!");
        }
        console.log("searchedProduct", products[products.findIndex(searchCriteria)]);
    
    }catch(err){
        console.log(err.message)
    }
};
module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  printProducts,
  sortProducts,
  searchProduct,
};
