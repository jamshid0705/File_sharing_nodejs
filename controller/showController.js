const File=require('../moduls/fileModul')

const showController=async(req,res)=>{
  try {
    const file=await File.findOne({uuid:req.params.uuid})

    if(!file){
      return res.render('download',{error:'Sizning linkingizni vaqti tugagan'})
    }

    res.render('download',{
      uuid:file.uuid,
      fileName:file.filename,
      fileSize:file.size,
      downloadLink:`${process.env.APP_BASE_URL}/files/download/${file.uuid}`
    })
    
  } catch (error) {
    return res.render('download',{error:'showda xato !'}) 
  }
}

module.exports={showController}