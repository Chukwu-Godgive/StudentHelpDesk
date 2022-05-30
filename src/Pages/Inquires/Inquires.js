import React, {useRef} from 'react';
import Emailjs from 'emailjs-com';
import '../Inquires/Inquires.css';

function Inquires() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      Emailjs.sendForm('service_389kdvm', 'template_9wvawwm', form.current, 'xKU1URm_n5bjx6CJP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='container'>
            <div className='inquires-contents'>
                <div className='inquires-heading'>
                    <h1>Make inquires concerning our School, Faculties, Departments, or Offices</h1>
                </div>
                <div className='inquires-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div  className='form-div'>
                            <div  className='form-div1'>
                                <p>Full Name:</p>
                                <input type='text' placeholder='enter your name' name='from_name' />

                                <p>Phone Number:</p>
                                <input type='tel' placeholder='enter your phone number' />
                            </div>
                            <div  className='form-div2'>
                                <p>Email:</p>
                                <input type='email' placeholder='enter your email' name='reply_to' required/>

                                <p>Inquires To:</p>
                                <input type='text' placeholder='name of faculty, department or office' required/>
                                </div>
                            </div>
                            <p>Message:</p>
                            <textarea placeholder='enter your messages' name='message' required></textarea>
                        <div>
                            <button >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default Inquires;
