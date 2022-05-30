import React from 'react';
import Faq from '../../Components/Faq/Faq';
import '../Faqs/Faqs.css';

function Faqs() {
    return (
        <div className='container'>
            <div className='faqs-contents'>
                <h2 className='faqs-heading'>Frequently Asked Questions (FAQs)</h2>
                <div className='faqs1'>
                    <Faq
                        number='1'
                        question='Please can i be able to print out my ID Card from the portal?'
                        answer='Yes, you can do so when you pay your school fee.'
                    />
                    <Faq
                        number='2'
                        question='How much is the current school fee?'
                        answer='The current school fee as of today 5/30/2022 is #124,900.'
                    />
                </div>
                <div className='faqs1'>
                    <Faq
                        number='3'
                        question='When do school Library opens?'
                        answer='From 8:00am - 4:00pm on working week days.'
                    />
                    <Faq
                        number='4'
                        question='Please is it possible to find a Software Developer from the school?'
                        answer='Yes, Lawson Godgive 08130709131 / Skywalker Frankline 08136540722.'
                    />
                </div>
                <div className='faqs1'>
                    <Faq
                        number='5'
                        question='How do i access School WiFi?'
                        answer='Currently school WiFi is not fully setup yet.'
                    />
                    <Faq
                        number='6'
                        question='I need my school Transcript.'
                        answer='To obtain your Transcript, you have to proceed to Exams and Records department.'
                    />
                </div>
            </div>
        </div>
    )
};
export default Faqs;