import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Landing.css';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


const Landing = () => {

    
    useEffect(() => {
        ScrollTrigger.defaults({
            toggleActions: "restart pause resume pause",
            scroller: ".main"
          });

        const tl = gsap.timeline()
            .fromTo('.club3', {y: '50%'}, {duration: 1, y: '0%'})
            .fromTo('.line1', { opacity: '0%', y: '50%'}, {duration: 1, opacity: '100%', y: '0%'})
            .fromTo('.line2', { opacity: '0%', y: '50%'}, {duration: 1, opacity: '100%', y: '0%'})
            .fromTo('.line3', { opacity: '0%', y: '50%'}, {duration: 1, opacity: '100%', y: '0%'})
        
        const textTL1 = gsap.timeline({scrollTrigger: { trigger: ".two .textBox" } })
            .fromTo('.two .textBox', { opacity: '0%', y: '50%'}, {duration: 1, opacity: '100%', y: '0%'})

        const textTL2 = gsap.timeline({scrollTrigger: { trigger: ".three .textBox" } })
            .fromTo('.three .textBox', { opacity: '0%', y: '50%'}, {duration: 1, opacity: '100%', y: '0%'})


            return () => {
                tl.kill();
                textTL1.kill();
                textTL2.kill();
            }
        
    }, [])
    
    
    
    return (
        <div>
            <div className="main">
                <section className="one panel">
                    <div>
                        <h2 className='club3'>Club 3</h2>
                        <h1 className='line1'>Spend more time,</h1>
                        <h1 className='line2'>doing what you love.</h1>
                        <h3 className='line3'>Software built for directors, by a director.</h3>
                        <Link to="/register"><button className='demoButton'>Demo</button></Link>
                    </div>
                </section> 
                <section className="two panel">
                    <div className='textBox'>
                        <h1>Automated Membership Management</h1>
                        <p>Spend more time doing what you love.</p>
                    </div>
                </section>
                <section className="three panel">
                    <div className='textBox'>
                        <h1>Efficient and Simple Court Scheduling</h1>
                        <p>Maximizing your resources has never been easier.</p>
                    </div>
                </section>
                {/* <section className="four">
                    <div className="lax_preset_fadeIn:234.25:0">
                        <h1>Order your custom cake today at Frutti Felici Bakery!</h1>
                        <p>Frutti Felici cakes are custom made cake art from your idea, theme, or picture. It takes time to manifest your idea into a work of art. Tap the links below to get a quote and order your custom made cake.</p>
                        <button>Get a quote</button>
                    </div>
                </section>
                <section className="five">
                    <img src="" alt="image" />
                    <div>
                        <h1>The art of living</h1>
                        <p>
                        The inspiration to open this kind of pastry shop comes from Paris. Each boulangerie or pastry shop in Paris is different from the previous one. Yet, all of them are great. According to Parisians, they have what they call the Art de Vivre. The art of living or life. Food does not have to be “enough” it should be tasty, but most importantly, it has to be sophisticated. It is a process that they enjoy. And we want all the customers of Frutti Felici Bakery to experience that kind of sensation.
                        </p>
                        <h3>Welcome to Frutti Felici Bakery!</h3>
                    </div>
                </section>
                <section className="six">
                    <h1>Our Shop</h1>
                    <p>Custom Cakes, Chocolate-dipped strawberries, Artisan handcrafted chocolate, Desserts and many more.</p>
                </section>
                <section className="seven">
                    <div>
                        <img src="" alt="image" />
                        <img src="" alt="image" />
                        <img src="" alt="image" />
                    </div>
                    <div>
                        <img src="" alt="image" />
                        <img src="" alt="image" />
                        <img src="" alt="image" />
                    </div>
                    <button>Order online</button>
                </section>
                <section className="eight">
                    <h2>What our Customers say:</h2>
                    <p>CAROUSEL HERE</p>
                </section> */}
            </div>
        </div>
    )
}

export default Landing
