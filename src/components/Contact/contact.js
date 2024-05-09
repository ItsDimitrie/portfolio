import React from "react";
import './contact.css';

const Contact = () => {
  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTtle'>Contact Me</h1>
        <span className='contactDesc'>If you have any questions or would like to work with me, please feel free to contact me.</span>

        <form className='contactForm'>
          <input type='text' placeholder='Your Name' className='name' />
          <input type='email' placeholder='Your Email' className='email' />
          <textarea className='msg' name='message' rows='5' placeholder="Your Message"></textarea>
          <button type='submit' value='send' className='submitBtn'><i id='sendIcon' class="fa-solid fa-paper-plane fa-beat fa-2xl"></i>Submit</button>
          <div classname='links'>
          </div>
        </form>

      </div>
    </section>
  )
}

export default Contact;