import React from 'react'
import '../css/Landing.css';
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
                <section className="two">
                    <div className="quoteBox">
                        Quote Icon
                        <h2>"In order to be irreplaceable, you have to be different"</h2>
                        <h3>Coco Chanel</h3>
                    </div>
                </section>
                <section className="three">
                    <div>
                        <h1>About us</h1>
                        <p>
                        Frutti Felici Bakery is a European-styled café-patisserie where each customer is treated in a unique manner, respecting his/her individuality and needs. We offer various organic pastries, cookies, cakes, desserts, chocolate-dipped strawberries, and healthy smoothies. Our bakers use the finest quality ingredients and pride themselves on unique, time-tested recipes.  
                        </p>
                    </div>
                    <img src="" alt="image" />
                </section>
                <section className="four">
                    <div>
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
                </section>
            </section>
        </div>
    )
}

export default Landing
