const nodemailer=require('nodemailer')

const sendMail=async ({from,to,subject,text,html})=>{

  let transport=nodemailer.createTransport({
    host:process.env.EMAIL_HOST,
    port:process.env.EMAIL_PORT,
    auth:{
      user:process.env.EMAIL_USER,
      pass:process.env.EMAIL_PASS
    },
    tls:{
      rejectUnauthorized:false,
    }
  })


  return await transport.sendMail({
    from:from,
    to:to,
    subject:subject,
    text:text,
    html:html,
  })

}

module.exports=sendMail