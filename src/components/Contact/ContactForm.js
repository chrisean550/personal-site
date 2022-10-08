import { useState } from "react";


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

  const handleSubmit = (e) => {
    e.preventDefault();
    updateName('');
    updateEmail('');
    updateMessage('Yea.. so I have not set up the form yet. But feel free to shoot me an email at chriseannichols@gmail.com');
    
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
