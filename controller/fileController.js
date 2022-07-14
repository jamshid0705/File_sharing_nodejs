const multer=require('multer')
const path=require('path') // path faylni orginal nomi aytadi masalan : png ,jpg 
const File=require('../moduls/fileModul')
const {v4:uuid4}=require('uuid')  // bizga unikalni id yasab beradi
const sendMail=require('../services/emailService')


let storage=multer.diskStorage({
  destination:(req,file,cb)=>cb(null,'uploads/'), // qaysi faylda ekanligini ko'rsatish
  filename:(req,file,cb)=>{ // fayl larga nom berish . Bir xil bo'lmasligi kerak . cb function bizga uniquname ni qaytaradi. req.fayl.faylname ga tenglab qo'yadi
    const uniqueName=`${Date.now()}-${Math.round(Math.random()*1E9)} ${path.extname(file.originalname)}`;
    cb(null,uniqueName) 
  }
})


let upload=multer({storage,limit:{filesSize:1000000*100}}).single('myfile')

////////////// Add File ///////////////////

const addFile=async (req,res)=>{
 

  // store file

  upload(req,res,async(err)=>{
     // validate request

    if(!req.file){
      return res.json({error:"All fields are required."})
    }

    if(err){
      return res.status(500).send({error:err.message})
    }

    // store into database
    const file=await File.create({  
      filename:req.file.filename,
      uuid:uuid4(),        // unikalni id yasab beradi
      path:req.file.path,
      size:req.file.size
    })

    return res.json({file:`${process.env.APP_BASE_URL}/files/${file.uuid}`})
  })
}



//////////// Send file ///////////////

const sendFile=async(req,res)=>{
  const {uuid,emailTo,emailFrom}=req.body

  if(!uuid || !emailTo || !emailFrom){
    return res.status(422).send({error:'Barcha malumotlarni kiriting !'})
  }

  // get database

  const file=await File.findOne({uuid:uuid})

  if(file.sender){
    return res.status(422).send({error:'Bu email ishlatilgan !'})
  }

  file.sender=emailFrom
  file.receiver=emailTo
  const response=await file.save()

  // send email

  sendMail({
    from:emailFrom,
    to:emailTo,
    subject:'Fayl jo\'natildi !',
    text:`${emailFrom} sizga fayl keldi !`,
    html:require('../services/emailTemplate')({
      emailFrom:emailFrom,
      downloadLink:`${process.env.APP_BASE_URL}/files/${file.uuid}`,
      size:parseInt(fayl.size/1000)+'KB',
      expires:"24 hours"
    })
  })




}




module.exports={addFile,sendFile}


