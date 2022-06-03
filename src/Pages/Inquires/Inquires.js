import React from 'react';
// import { Link } from 'react-router-dom';
import '../Inquires/Inquires.css';

function Inquires() {
    return (
        <div className='container'>
            <div className='inquires-contents'>
                <div className='inquires-heading'>
                    <h1>Make inquires concerning our School, Faculties, Departments, or Offices</h1>
                </div>
                <div className='inquires-form'>
                    <form action='https://public.herotofu.com/v1/bbaa1420-e32a-11ec-826d-57a28a4a2cb5'  method='post'>
                        <div  className='form-div'>
                            <div  className='form-div1'>
                                <p>Full Name:</p>
                                <input type='text' placeholder='enter your name' name='Name' />

                                <p>Phone Number:</p>
                                <input type='tel' placeholder='enter your phone number' />
                            </div>
                            <div  className='form-div2'>
                                <p>Email:</p>
                                <input type='email' placeholder='enter your email' name='Email' required/>

                                <p>Inquires To:</p>
                                <input type='text' placeholder='name of faculty, department or office' name='Inquires To' required/>
                                </div>
                            </div>
                            <p>Message:</p>
                            <textarea placeholder='enter your messages' name='Message' required></textarea>
                        <div>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default Inquires;
