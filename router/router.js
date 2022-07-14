const router=require('express').Router()
const fileController=require('../controller/fileController')


// file add
router.route('/').post(fileController.addFile)
router.route('/send').post(fileController.sendFile)



module.exports=router