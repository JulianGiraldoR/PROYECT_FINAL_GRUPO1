const router = require('express').Router();
const User = require('../models/user.model');
const joi = require ('@hapi/joi');//paquete para validaciones
const bcrypt = require ('bcrypt');//paquete para encriptar contraseñas
const jwt = require('jsonwebtoken');//paquete para enviar token de identificacion al usuario

//metodo de validacion de email registados en la DB

const schemaLogin = joi.object({
    email: joi.string().min(6).max(255).required().email(),
    password: joi.string().min(6).max(1024).required()
})

// metodo POST para el login  /login
router.post('/login', async (req,res) => {
    // validaciones de usuario 
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })

    //validacion email
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({messaje: 'email not found' });

    //validar contraseña 
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({messaje :'password invalid' })

    //envio respuesta de login correcto con jwt
    const token = jwt.sign({
        name:user.name,
        id:user._id
    },process.env.TOKEN_SECRET)

        res.json({
        data: 'you are SIGNIN',
        token:token
    })
    })

//metodo de validacion de los datos del registro( name email y password)

const schemaRegister = joi.object({
    name: joi.string().min(6).max(255).required(),
    email: joi.string().min(6).max(255).required().email(),
    password: joi.string().min(6).max(1024).required()
})

// metodo post para crear nuevos usuarios /register
router.post('/register', async (req, res) => {

    //validaciones de usuario

    const {error} = schemaRegister.validate(req.body)
    if(error){
        return res.status(400).json({error: error.details[0].message})//captura la informacion de error guardada en detail para mostrar el tipo de error
    }

    //validacion de email 

    const emailValid = await User.findOne({email:req.body.email})
    if(emailValid) return res.status(400).json({message:'this email is already exist'})

    // hash de contraseña (encriptar contraseña)

    const salt = await bcrypt.genSalt(10);// cantidad de saltos que da la contraseña para encriptarce
    const password = await bcrypt.hash(req.body.password,salt)


    //captura la informacion del request(frontend) y la guarda en una nueva variable user
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password :password,
    })

    try{
        
        const savedUser = await user.save();
        res.status(200).json({
            data: savedUser
        })
    }catch(error){
        res.status(400).json(error)
    }

    
})
module.exports = router; 