const express=require('express')
const fileRouter=require('./router/router')
const showRouter=require('./router/showRouter')
const downloadRouter=require('./router/downloadRouter')
const app=express()
const path=require('path')

const PORT=process.env.PORT || 4000;

const connectDB=require('./config/db')

app.use(express.static('public'))
app.use(express.json())

app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')

app.use('/api/files',fileRouter)
app.use('/files',showRouter)
app.use('/files/download',downloadRouter)


app.listen(PORT,()=>{
  console.log(`${PORT} - port eshitishni boshladi !`)
})