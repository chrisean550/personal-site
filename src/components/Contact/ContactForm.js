import { useState } from "react";
import FormAPI from "../../adapters/FormAPI";
import ReCaptchaV2 from 'react-google-recaptcha';



const ContactForm = () => {
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [message, updateMessage] = useState("");
  const [token, updateToken] = useState("");

  const handleInputChange = (e) => {
    const target = e.target;
    if(target.name === 'name'){
      updateName(target.value);
    }
    else if(target.name === 'email'){
      updateEmail(target.value);
    }
    else if(target.name === 'message'){
      updateMessage(target.value);
    }
  }

  const handleToken = (token) =>{
    updateToken(token);
  }

  const handleExpire = () =>{
    updateToken(null);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await FormAPI(name, email, message, token);
    if(success){
      updateName('');
      updateEmail('');
      updateMessage('Message Sent!');
    } else{
      alert('There was an issue with the submission.')
    } 
  }

  return(
    <form className='contact-form' onSubmit={handleSubmit}>
      <h3>Contact</h3>
      <br/>

      <label className='contact-input'>
        Full Name:&#160;
        <input type='text' name='name' value={name} onChange={handleInputChange}/>
      </label>

      <label className='contact-input'>
        Email:&#160;
        <input type='text' name='email' value={email} onChange={handleInputChange}/>
      </label>

      <label className='contact-textarea'>
        Message:&#160;
        <textarea name='message' value={message} onChange={handleInputChange}/>
      </label>
      <div className='submit-wrapper'>
        <input className='submit' type='submit' value='Submit'/>
        <ReCaptchaV2 
          sitekey={process.env.REACT_APP_SITE_KEY} 
          onChange={handleToken}
          onExpired={handleExpire}
        />
      </div>
    </form>
  )
}

export default ContactForm;
