import type { ArticleBlock } from "../../types/News";
import InstagramEmbed from "./InstagramEmbed";
import "./ArticleContent.css";
import YouTubeEmbed from "./YoutubeEmbed";
import TwitterEmbed from "./TwitterEmbed";

interface Props {
    blocks: ArticleBlock[];
}


export default function ArticleContent({
    blocks
}: Props) {

    return (

        <div className="article-content">

            {
                blocks.map((block, index) => {


                    switch (block.type) {


                        case "paragraph":

                            return (
                                <p key={index}>
                                    {block.text}
                                </p>
                            );


                        case "heading":

                            return (
                                <h2 key={index}>
                                    {block.text}
                                </h2>
                            );


                        case "image":

                            return (
                                <figure key={index}>

                                    <img src={block.src} />

                                    {
                                        block.caption &&
                                        <figcaption>
                                            {block.caption}
                                        </figcaption>
                                    }

                                </figure>
                            );


                        case "quote":

                            return (
                                <blockquote key={index}>
                                    {block.text}
                                </blockquote>
                            );

                        case "instagram":
                            return (
                                <InstagramEmbed
                                    key={index}
                                    url={block.url}
                                />
                            );

                        case "youtube":
                            return (
                                <YouTubeEmbed
                                    key={index}
                                    url={block.url}
                                />
                            );

                        case "twitter":
                            return (
                                <TwitterEmbed
                                    key={index}
                                    url={block.url}
                                />
                            );

                    }


                })
            }

        </div>

    );
}