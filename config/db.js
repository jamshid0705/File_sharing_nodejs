require('dotenv').config({path:'./config.env'})
const mongoose=require('mongoose')


const connect=()=>{
  mongoose.connect(process.env.DATABASE_URL,{}).then(()=>{
    console.log('Databasega ulanish hosil qilindi !')
  }).catch(err=>{
    console.log("Ulanishda xato :",err)
  })
}
connect()

module.exports=connect
