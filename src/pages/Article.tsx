import { useParams } from "react-router-dom";
import { news } from "../data/news";
import "./Article.css";
import ArticleContent from "../components/news/ArticleContent";
import { Helmet } from "react-helmet-async";


export default function Article() {

    const { id } = useParams();
    console.log("ARTICLE ID:", id);

    const article = news.find(
        item => item.id === id
    );

    console.log(article);
    if (!article) {
        return (
            <h1>
                Article not found
            </h1>
        );
    }


    return (
        <>
            <Helmet>
                <title>
                    {`${article.title ?? "Haber"} | Yok Artık`}
                </title>

                <meta
                    name="description"
                    content={article.description ?? ""}
                />

                <meta
                    property="og:title"
                    content={`${article.title ?? "Haber"} | Yok Artık`}
                />

                <meta
                    property="og:description"
                    content={article.description ?? ""}
                />
            </Helmet>
            <article className="article">

                <img
                    className="article__image"
                    src={article.image}
                    alt={article.title}
                />


                <div className="article__content">

                    <span className="article__category">
                        {article.category}
                    </span>


                    <h1>
                        {article.title}
                    </h1>


                    <p className="article__date">
                        {article.date}
                    </p>


                    <ArticleContent
                        blocks={article.content}
                    />

                </div>

            </article>
        </>


    );
}