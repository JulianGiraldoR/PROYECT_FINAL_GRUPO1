const express = require('express');
const response = require('../lib/response-message');
const log = require('../lib/log-messages');
const productController = require('../controller/products.controller');

const router = express.Router();

router.get('', (req, res) => {
  const { size } = req.query;
  productController.getProducts(size)
    .then( products => {
      response(res, {code: 200, key: "products", payload: products})
    })
    .catch(error => {
      log.logError(error.log);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.get('/:id', (req, res) =>{
  const { id } = req.params;
  productController.getProduct(id)
    .then( product => {
      response(res, {code: 200, key: "product", payload: product})
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.post('', (req, res) => {
  const { body } = req;
  productController.postProduct(body)
    .then( result => {
      response(res, { code: result.code, key: "message", payload: result.message});
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.put('/:productID', (req, res) => {
  const { productID } = req.params;
  const { body } = req;
  productController.putProduct(productID, body)
    .then(result => {
      response(res, {code: result.code, key: "message", payload: result.message})
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  productController.deleteProduct(id)
    .then(result => {
      response(res, {code: result.code, key: "message", payload: result.message})
    })
    .catch(error => {
      log.logError(error);
      response(res, {code: error.code, key: "message", payload: error.message})
    })
});

module.exports = router;
