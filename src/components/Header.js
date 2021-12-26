import React from 'react'
import '../css/Header.css'

const Header = () => {
    return (
        <div>
            <div className="contactNav">Contact info that disappears on scroll</div>
            <div className="fixedNav">
                <img src='' alt='Logo here' />
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
