interface Props {
    url: string;
}

export default function YouTubeEmbed({ url }: Props) {

    const videoId = new URL(url).searchParams.get("v");

    return (
        <div className="youtube-container">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video"
                allowFullScreen
            />
        </div>
    );
}