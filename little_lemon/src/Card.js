function Card ({title, description, img, price, bottomText}) {
    return (
        <article className="card__article">
            <img className="card__article-img" src={img} alt="sample"/>
            <div className="card__article-text">
                <div className="card__article-header">
                    <h3 className="card__article-title">{title}</h3>
                    <h3 className="card__article-price">{price}</h3>
                </div>
                <p className="card__article-description">{description}</p>
                <a href="/" className="card__article-bottom-text">{bottomText}</a>
            </div>
        </article>
    )
}

export default Card;