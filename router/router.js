const router=require('express').Router()
const fileController=require('../controller/fileController')



router.route('/').post(fileController.addFile)
router.route('/send').post(fileController.sendFile)

 

module.exports=router