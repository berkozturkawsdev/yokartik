import NewsCard from "./NewsCard";
import "./NewsGrid.css";
import { news } from "../../data/news";
import { Helmet } from "react-helmet-async";


export default function NewsGrid() {

    return (
        <>

            {/* <Helmet>

                <title>
                    Yok Artık - Gerçek Ama İnanılmaz Haberler
                </title>

                <meta
                    name="description"
                    content="Dünyadan şaşırtıcı, ilginç ve viral haberler."
                />

            </Helmet> */}
            <section className="news-grid">

                {
                    news.map(article => (

                        <NewsCard
                            key={article.id}
                            id={article.id}
                            title={article.title}
                            description={article.description}
                            image={article.image}
                            category={article.category}
                            date={article.date}
                        />

                    ))
                }

            </section>
        </>


    );
}