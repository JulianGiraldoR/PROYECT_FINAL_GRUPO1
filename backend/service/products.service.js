const productSchema = require('../models/product.model');

const readProducts = () => new Promise((resolve, reject) => {
  productSchema.find()
    .then((products) => resolve( products ))
    .catch((error) => reject({code: 500, message: error}))
});

const readProduct = (id) => new Promise((resolve , reject) => {
  productSchema.findById(id)
    .then((product) => resolve(product))
    .catch((error) => reject({code: 500, message: error}) );
});

const createProduct = (product) => new Promise((resolve, reject) => {
  const productDB = productSchema(product);
  productDB.save()
    .then(() => resolve({code: 201, message: "Product created successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

const updateProduct = (id, product) => new Promise((resolve , reject) => {
  productSchema.findByIdAndUpdate(id, product)
    .then(() => resolve({code: 201, message: "Product updated successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

const deleteProduct = (id) => new Promise((resolve , reject) => {
  productSchema.findByIdAndDelete(id)
    .then(() => resolve({code: 200, message: "Product deleted successfully"}) )
    .catch((error) => reject({code: 500, message: error}) );
});

module.exports = {
  readProducts,
  readProduct,
  createProduct,
  updateProduct,
  deleteProduct
}
