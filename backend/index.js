const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()
const responseMessage = require('./lib/response-message');
const log = require ('./lib/log-messages')
const routerApi = require('./routes/index');//hace un llamado a la funcion routerApi
const authRoutes = require('./routes/auths.router');//hace un llamado a auth.router
const productsRouters = require('./routes/products.router');
const usersRouters = require('./routes/users.router');
const FormsRouters = require('./routes/contactForms.router');
var cors = require ('cors');





const app = express();
routerApi(app);

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());


// Conexión a Base de datos

mongoose
.connect(process.env.MONGO_URI)
.then(()=> log.logMessage("connected to the database"))


// rutas 
app.use('/api',authRoutes);
app.use('/api/products', productsRouters);
app.use('/api/users', usersRouters);
app.use('/api/forms', FormsRouters);



// iniciar server
app.all('*', (req, res) => {
  responseMessage( res, 400, "Bad request");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () =>{
    console.log(`The application is running at: http://127.0.0.1:3002`);
  });
