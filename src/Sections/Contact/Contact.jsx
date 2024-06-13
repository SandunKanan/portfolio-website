import React, {useRef} from 'react'
import './Contact.scss'
import theme_pattern from '../../assets/icons/theme_pattern.svg'
import mail_icon from '../../assets/icons/mail_icon.svg'
import location_icon from '../../assets/icons/location_icon.svg'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm(
    //   process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //   process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //   form.current,
    //   process.env.REACT_APP_EMAILJS_USER_ID

    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form.current, {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>sandunkanangama@gmail.com</p>
                </div>
                {/* <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>0704 160 1776</p>
                </div> */}
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Tokyo, Japan</p>
                </div>
            </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
