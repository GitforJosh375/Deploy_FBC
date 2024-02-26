import "./PrayerStyles.css"
import {useRef} from 'react'
import emailjs from '@emailjs/browser';


function PrayerReq() {

        const form = useRef()

        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs
              .sendForm('service_q5i2icb', 'template_6pcveah', form.current, {
                publicKey: 'urGUoB2VJ29BJw5eR',
              })
              .then(
                () => {
                  console.log('SUCCESS!');
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
              );
              e.target.reset();
          };
    return(
        <div className="form-container">
            <h1>Send A Prayer Request</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Full Name" name="user_name" required/>
                <input type="email" placeholder="Email" name="user_email" required/>
                <input type="text" placeholder="Subject" name="subject" required/>
                <textarea name="message" placeholder="Prayer Request" rows="4"></textarea>
                <button type="submit">Send Prayer Request</button>
            </form>
        </div>
    )
}

export default PrayerReq