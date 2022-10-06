import '../../styles/Contact.css';
import ContactForm from './ContactForm';
import ContentLeft from './ContentLeft';

const Contact = () => {
  return(
    <section id='contact' className='contact'>
      <ContentLeft />
      <ContactForm />
    </section>
  )
}

export default Contact;
