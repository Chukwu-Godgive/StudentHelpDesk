import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo.png'
import '../Sidebar/Sidebar.css';



function Sidebar() {
    return (
        <div className='container'>
            <div className='sidebar-contents'>
                <img src={Logo} alt='' />
                <div className='sidebar-subcontents'>
                    <ul>
                        <li><Link to='/'>Dashboard</Link></li>
                        <li><Link to='/inquires'>Inquire</Link></li>
                        <li><Link to='/faqs'>Faqs</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default Sidebar;