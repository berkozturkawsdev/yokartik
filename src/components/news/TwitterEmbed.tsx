import { useEffect } from "react";

interface Props {
    url: string;
}

export default function TwitterEmbed({ url }: Props) {

    useEffect(() => {
        if (window.twttr) {
            window.twttr.widgets.load();
        }
    }, [url]);


    return (
        <blockquote className="twitter-tweet">
            <a href={url}></a>
        </blockquote>
    );
}