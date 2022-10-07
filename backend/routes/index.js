const express = require('express');
const uploadRouters = require('./uploads.router')


function routerApi(app){
  const router = express.Router();
  app.use("", router);
  router.use('/api/upload',uploadRouters);

};

module.exports = routerApi;
