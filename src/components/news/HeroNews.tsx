import "./HeroNews.css";

interface HeroNewsProps {
    title: string;
    description: string;
    image: string;
    category: string;
    date: string;
}


export default function HeroNews({
    title,
    description,
    image,
    category,
    date
}: HeroNewsProps) {

    return (
        <section className="hero-news">

            <div className="hero-news__image">
                <img src={image} alt={title} />
            </div>


            <div className="hero-news__content">

                <span className="hero-news__category">
                    {category}
                </span>


                <h1>
                    {title}
                </h1>


                <p>
                    {description}
                </p>


                <span className="hero-news__date">
                    {date}
                </span>

            </div>

        </section>
    );
}