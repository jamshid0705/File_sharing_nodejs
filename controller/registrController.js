const User=require('../moduls/loginModel')


const loginPage=async(req,res)=>{
  try {
    res.render('login')
  } catch (error) {
    console.log(error)
  }
}


const login=async(req,res)=>{
  try {
    console.log(req.body)
    const login=await User.create({
      name:req.body.name,
      surename:req.body.surname,
      password:req.body.password,
      passwordchange:req.body.passwordchange
    })

    res.status(200).json({
      status:'success',
      data:login
    })

  } catch (error) {
    console.log(error)
  }
}

module.exports={login,loginPage}