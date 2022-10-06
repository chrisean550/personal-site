const ContactForm = () => {
  return(
    <form className='contact-form'>
      <h3>Contact</h3>
      <br/>

      <label className='contact-input'>
        Full Name:
        <input type='text' name='name'/>
      </label>

      <label className='contact-input'>
        Email:
        <input type='text' name='name'/>
      </label>

      <label className='contact-textarea'>
        Message:
        <textarea />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default ContactForm;
