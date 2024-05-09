import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c36shpa', 'template_vjtrd2q', form.current, {
        publicKey: 'lxbKqSg9hGJZ9E4KJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Your message has been sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Your message could not be sent. Please try again later or contact the email below.');
        },
      );
  };

  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTtle'>Contact Me</h1>
        <span className='contactDesc'>If you have any questions or would like to work with me, please feel free to contact me.</span>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='Your Name' className='name' name='your_name' />
          <input type='email' placeholder='Your Email' className='email' name='from_email' />
          <textarea className='msg' name='message' rows='5' placeholder="Your Message"></textarea>
          <button type='submit' value='send' className='submitBtn'><i id='sendIcon' class="fa-solid fa-paper-plane fa-beat fa-2xl"></i>Submit</button>
          <div className='links'>
          </div>
        </form>

      </div>
    </section>
  )
}

export default Contact;