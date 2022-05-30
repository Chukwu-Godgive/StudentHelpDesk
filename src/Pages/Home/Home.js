import React from 'react';
import {FcAbout, FcTodoList} from 'react-icons/fc'
import { Link } from 'react-router-dom';
import '../Home/Home.css';


function Home() {
    return (
        <div className='container'>
            <div className='home-contents'>
                <div className='home-hero'>
                    <h1>welcome to students help desk <br/>esut chapter</h1>
                    <button><Link to='inquires'>Get Started</Link></button>
                </div>
                <div className='home-subsection'>
                    <div className='home-about'>
                        <h1><FcAbout /></h1>
                        <h3>About Us</h3>
                        <p>StudentsHelpDesk is a sub section of our portal that helps students make an inquiry concening issues they are face with or any complain relating to our school.</p>
                        <p>It can be about the School, Faculty, Department, Library and so on.</p>
                    </div>
                    <div className='home-steps'>
                        <h1><FcTodoList /></h1>
                        <h3>Steps</h3>
                        <p>1. Click at Get Started button to kick start</p>
                        <p>2. Enter your name, phone number, and email at the column provided</p>
                        <p>3. Choose the section your directing your inquires to</p>
                        <p>4. Select the faculty, department, or office</p>
                        <p>5. Enter your message and submit. And wait for a feedback in your mail</p>
                        <p><b>Feedback Duration Minimum - 3hrs</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Home;