const File=require('../moduls/fileModul')
const Parol=require('../moduls/parolModel')

let parol;

const submitpassword=async(req,res)=>{
  try {
    parol=req.body.parol

    res.render('download',parol)
  } catch (error) {
    console.log(error)
  }
}

const download=async(req,res)=>{
  const file=await File.findOne({uuid:req.params.uuid})

  console.log(file)
  if(!file){
    return res.render('download',{error:'link vaqti tugagan !'})
  }

  const filePath=`${__dirname}/../${file.path}`
  res.download(filePath)
}



module.exports={download,submitpassword}