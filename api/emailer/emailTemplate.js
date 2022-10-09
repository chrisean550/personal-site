module.exports = (name, email, message) =>{
  let mail =''
  mail+=`You Have A Form Submission!\n`
  mail+=`Name: ${name}\n`
  mail+=`Email: ${email}\n`
  mail+=`Message: ${message}\n`
  
  return(mail);
}
