import React from 'react';
import githubIcon from '../../assests/githubIcon.png';
import linkedInIcon from '../../assests/linkedinIcon.png';

import './Header.css';

const Header = ({children}) => {
    return (
        <header>
            <div className='headerInformation'>
                <h1>Expense App</h1>
                <h3>A simple website in which you can track expenses items localy</h3>
                <div className='icons'>
                    <a href='https://github.com/NadavBitran' className='iconLink'><img src={githubIcon}/></a>
                    <a href='https://www.linkedin.com/in/nadavbitran/' className='iconLink'><img src={linkedInIcon}/></a>
                </div>
            </div>
            {children}
        </header>
    );
};

export default Header;