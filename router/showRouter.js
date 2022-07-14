const router=require('express').Router()
const showController=require('../controller/showController')

// show

router.route('/:uuid').get(showController.showController)

 

module.exports=router