import { useState } from "react";
import FormAPI from "../../adapters/FormAPI";



const ContactForm = () => {
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [message, updateMessage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await FormAPI(name, email, message);
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
      <input className='submit' type='submit' value='Submit'/>
    </form>
  )
}

export default ContactForm;
