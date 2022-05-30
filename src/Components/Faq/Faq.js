import React from 'react';
import '../Faq/Faq.css';

function Faq(props) {
    return (
        <div className='container'>
            <div className='faq'>
                <p className='fa-number'>{props.number}.|</p>
                <div className='faq-contents'>
                    <div className='faq-question'>
                        <h3>{props.question}</h3>
                    </div>
                    <p className='faq-answer'>{props.answer}</p>
                </div>
            </div>
        </div>
    )
}
export default Faq;