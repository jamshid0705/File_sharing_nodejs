const mongoose=require('mongoose')

const Schema=new mongoose.Schema({
  parol:{
    type:Number
  },
  filename:{
    type:String,
    require:true
  },
  path:{
    type:String,
    require:true
  },
  size:{
    type:Number,
    require:true
  },
  uuid:{
    type:String,
    require:true
  },
  sender:{
    type:String,
    require:true
  },
  receiver:{
    type:String,
    require:true
  }
},{timestamps:true})


const File=mongoose.model('files',Schema)

module.exports=File
