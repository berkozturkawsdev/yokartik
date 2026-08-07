import { useEffect } from "react";

interface Props {
    url: string;
}

export default function InstagramEmbed({ url }: Props) {

    useEffect(() => {

        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }

    }, [url]);


    return (
        <blockquote
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
        />
    );
}