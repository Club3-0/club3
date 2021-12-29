import React from 'react'
import '../css/Header.css'

const Header = () => {
    return (
        <div>
            <div className="contactNav">
                <ul>
                    <li className="contactLink"><i class="fas fa-phone"></i>555-555-5555</li>
                    <li className="contactLink"><i class="far fa-envelope"></i>JENNIFERWEBSITE@GMAIL.COM</li>
                    <li className="contactLink"><i class="far fa-clock"></i>MON-FRI: 9AM-5PM</li>
                </ul>
                <ul>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-f"></i>
                </ul>
            </div>
            <div className="fixedNav">
                <div className='logoName'>
                    <img src='' alt='Logo here' />
                    <h1>Jen's Website</h1>
                </div>
                <nav>
                    <ul className="navLinks">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
