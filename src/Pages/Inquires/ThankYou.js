import React from 'react';
import '../Inquires/ThankYou.css';
import { Link } from 'react-router-dom';


function ThankYou() {
    return (
        <div className='container'>
            <div>
                <div className='thankyou-contents'>
                    <p>Thank You for reaching out to us. We will get back to you within 3hrs!</p>
                    <button><Link to='/'>Go-To-Home</Link></button>
                </div>
            </div>
        </div>
    )
}
export default ThankYou;