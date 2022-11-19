const express=require('express')
const Router=express.Router()
const registrController=require('../controller/registrController')

Router.route('/users').post(registrController.login)
Router.route('/').get(registrController.loginPage)

module.exports=Router