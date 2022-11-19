const express=require('express')
const fileRouter=require('./router/router')
const showRouter=require('./router/showRouter')
const downloadRouter=require('./router/downloadRouter')
const registrRouter=require('./router/registrRouter')
const bodyParser=require('body-parser')
const app=express()
const path=require('path')

const PORT=process.env.PORT || 4000;

const connectDB=require('./config/db')


app.use(express.static('public'))
app.use(express.json())



// app.use(bodyParser.text({ type: 'text/html' }))

app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')

let bodyP=bodyParser.json()
app.use(express.urlencoded());

app.use('/api/files',fileRouter)
app.use('/files',showRouter)
app.use('/files/download',downloadRouter)
app.use('/login',bodyP,registrRouter)

app.use('/submit-password',bodyP,downloadRouter)




app.listen(PORT,()=>{
  console.log(`${PORT} - port eshitishni boshladi !`)
})