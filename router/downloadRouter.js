const router=require('express').Router()
const downloadController=require('../controller/downloadController')

// download file
router.route('/:uuid').get(downloadController.download)

module.exports=router