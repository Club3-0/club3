import React, { useEffect } from 'react'
import '../css/Header.css'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Header = () => {



    // useEffect(() => {
    //     gsap.to(".fixedNav", {
    //         top: 0,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".contactNav",
    //             start: 1,
    //             toggleActions: "play none reverse none",
    //             scrub: -1,
    //         }, 
    //       });
    // }, [])

    return (
        <div className="fixedNav">
            <div className='logoName'>
                <img src='' alt='Club 3' />
            </div>
            <nav>
                <ul className="navLinks">
                    <li>Home</li>
                    <li>Demo</li>
                    <li>Support</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
