import React from 'react';
// import { Link } from 'react-router-dom';
import '../Inquires/Inquires.css';

function Inquires() {
    
    const thankYou = () => {
        window.location.href='/'
        alert('Thank You for reaching out to us. We will get back to you within 3hrs!')
    }

    return (
        <div className='container'>
            <div className='inquires-contents'>
                <div className='inquires-heading'>
                    <h1>Make inquires concerning our School, Faculties, Departments, or Offices</h1>
                </div>
                <div className='inquires-form'>
                    <form onSubmit={thankYou} method='get'>
                        <div  className='form-div'>
                            <div  className='form-div1'>
                                <p>Full Name:</p>
                                <input type='text' placeholder='enter your name' />

                                <p>Phone Number:</p>
                                <input type='tel' placeholder='enter your phone number' />
                            </div>
                            <div  className='form-div2'>
                                <p>Email:</p>
                                <input type='email' placeholder='enter your email' required/>

                                <p>Inquires To:</p>
                                <input type='text' placeholder='name of faculty, department or office' required/>
                                </div>
                            </div>
                            <p>Message:</p>
                            <textarea placeholder='enter your messages' required></textarea>
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
