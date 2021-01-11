const User = require("../models/UserModel");
const Joi = require("joi")
const bcrypt = require("bcrypt")

const registerValidtor = (data) =>{
    const schema = Joi.object({
        name: Joi.string().min(4).required(),
        email: Joi.string().required().email(),
        password:Joi.string().min(6).required()
    });
    return schema.validate(data)
}

const loginValidator = (data) =>{
    const schema = Joi.object({
        email:Joi.string().required().email(),
        password:Joi.string().min(6).required()
    })
    return schema.validate(data)
}

const registerUser = async(req,res) =>{
    try{
        let { error } = registerValidtor(req.body)

        if(error){
            throw new Error(error.details[0].message)
        }

        let {email,password,name} = req.body
        let userExists = await User.findOne({email:email})
        let encryptedPassword = await bc
    }
}