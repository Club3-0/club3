import React from 'react'
import child3 from '../img/child3.jpg';
import child2 from '../img/child2.jpg';


const Landing = () => {
    return (
        <div>
            <section className="main">
                <section className="one">
                <img src={child3}/>
                <div>
                    <h1>Jen's Website</h1>
                    <h2>Prometabolic for Kids</h2>
                    <p>A simplified guide to providing the best nutrition for your child.</p>
                    <button>Online Shop</button>
                </div>
                <img src={child2}/>
                </section> 
            </section>
        </div>
    )
}

export default Landing
