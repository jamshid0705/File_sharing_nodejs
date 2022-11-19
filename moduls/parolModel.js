const mongoose=require('mongoose')

const loginSchema=new mongoose.Schema({
  parol:Number
})

const users=mongoose.model('parols',loginSchema)

module.exports=users