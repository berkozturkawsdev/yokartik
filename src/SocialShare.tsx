import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaWhatsapp,
    FaLink
} from "react-icons/fa";

interface Props {
    title: string;
    url: string;
}

export default function SocialShare({ title, url }: Props) {

    const shareUrl = encodeURIComponent(url);
    const shareTitle = encodeURIComponent(title);

    const copyLink = async () => {
        await navigator.clipboard.writeText(url);
        alert("Link copied!");
    };

    const nativeShare = async () => {
        if (navigator.share) {
            await navigator.share({
                title,
                text: title,
                url
            });
        }
    };

    return (
        <div className="share-container">

            <button
                className="share-btn native"
                onClick={nativeShare}
            >
                Share
            </button>

            <a
                className="share-btn facebook"
                target="_blank"
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            >
                <FaFacebookF />
            </a>

            <a
                className="share-btn twitter"
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
            >
                <FaTwitter />
            </a>

            <a
                className="share-btn linkedin"
                target="_blank"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            >
                <FaLinkedinIn />
            </a>

            <a
                className="share-btn whatsapp"
                target="_blank"
                href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
            >
                <FaWhatsapp />
            </a>

            <button
                className="share-btn copy"
                onClick={copyLink}
            >
                <FaLink />
            </button>

        </div>
    );
}