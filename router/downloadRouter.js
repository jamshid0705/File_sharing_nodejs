const router=require('express').Router()

const File=require('../moduls/fileModul')


router.get('/:uuid',async(req,res)=>{
  const file=await File.findOne({uuid:req.params.uuid})

  if(!file){
    return res.render('download',{error:'link vaqti tugagan !'})
  }

  const filePath=`${__dirname}/../${file.path}`
  res.download(filePath)
})

module.exports=router