const mongoose=require('mongoose')

const loginSchema=new mongoose.Schema({
  name:String,
  surename:String,
  password:Number,
  passwordchange:Number
})

const users=mongoose.model('users',loginSchema)

module.exports=users