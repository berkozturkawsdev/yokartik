import "./NewsCard.css";
import { Link } from "react-router-dom";

interface NewsCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    date: string;
}

export default function NewsCard({
    id,
    title,
    description,
    image,
    category,
    date
}: NewsCardProps) {
    return (
        <Link
            to={`/article/${id}`}
            className="news-card"
            aria-label={`Open article: ${title}`}
        >
            <div className="news-card__image-wrap">
                <img
                    className="news-card__image"
                    src={image}
                    alt={title}
                />
                <span className="news-card__badge">Detayları Gör</span>
            </div>

            <div className="news-card__content">
                <span className="news-card__category">{category}</span>
                <h2>{title}</h2>
                <p>{description}</p>

                <div className="news-card__footer">
                    <span className="news-card__date">{date}</span>
                    <span className="news-card__readmore">Devamını Oku →</span>
                </div>
            </div>
        </Link>
    );
}