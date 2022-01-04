import React, { useEffect } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Header = () => {

    return (
        <div className="fixedNav">
            <div className='logoName'>
                <img src='' alt='Club 3' />
            </div>
            <nav>
                <ul className="navLinks">
                    <Link to="/home"><li>Home</li></Link>
                    <Link to="/register"><li>Demo</li></Link>
                    {/* <li>Support</li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Header
