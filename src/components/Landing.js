import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Landing.css';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


const Landing = () => {

    
    useLayoutEffect(() => {
        let sections = gsap.utils.toArray("section");
        gsap.to(sections, {
            yPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".main",
                snap: 1 / (sections.length - 1),
                pin: true,
                scrub: 1,
                id: "landing-effect"
            }, 
          });
          
    }, [])
    
    
    
    return (
        <div>
            <div className="main">
                <section className="one section">
                    <div>
                        <h2>Club 3</h2>
                        <h1>The solution to the problem,<br /> you actually have.</h1>
                        <Link to="/register"><button>Demo</button></Link>
                    </div>
                </section> 
                <section className="two section">
                    <h1>Spend more time<br></br> doing what you love.</h1>
                </section>
                <section className="three section">
                    <h1>Automated <br />membership<br /> management</h1>
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
