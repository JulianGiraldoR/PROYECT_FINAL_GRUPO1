//crud del modelo products

const productServices = require('../service/products.service');

const getProducts = (size) => new Promise((resolve, reject) => {
  try {
    let products = [];
    products = productServices.readProducts()
    if(size){
      resolve(products.slice(0, size));
    }else{
      resolve( products );
    }
  } catch (error) {
    reject({code: 500, message: "Error unexpected", log: error });
  }
});

const getProduct = (id) => new Promise((resolve, reject) => {
  try {
    resolve( productServices.readProducts(id) );
  } catch (error) {
    reject( error );
  }
});

const postProduct = (body) => new Promise((resolve, reject) => {
  try {
    resolve( productServices.createProduct(body) );
  } catch (error) {
    reject(error);
  }
});

const putProduct = (productID, body) => new Promise((resolve, reject) => {
  try {
    resolve( productServices.updateProduct(productID, body) );
  } catch (error) {
    reject(error);
  }
});

const deleteProduct = (id) => new Promise((resolve, reject) => {
  try {
    resolve( productServices.deleteProduct(id) );
  } catch (error) {
    reject(error);
  }
});

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct
}
