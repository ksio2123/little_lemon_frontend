import heroImage from './th-1168171847.jpg'
function Hero() {
    return (
        <section className="hero">
            <article className="hero__article">
                <h2 className="hero__article-h2">Little Lemon</h2>
                <h3 className="hero__article-h3">Chicago</h3>
                <p className="hero__article-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <button class="button"> Reserve a Table</button>
            </article>
            <img src={heroImage} className='hero__image' alt="sample"/>
        </section>
    )
}

export default Hero;