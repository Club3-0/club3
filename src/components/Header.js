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
                <p>Club 3</p>
            </div>
            <nav>
                <ul className="navLinks">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/register"><li>Demo</li></Link>
                    {/* <li>Support</li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Header
