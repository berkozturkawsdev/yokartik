export type ArticleBlock =
    | {
        type: "paragraph";
        text: string;
    }
    | {
        type: "heading";
        text: string;
    }
    | {
        type: "image";
        src: string;
        caption?: string;
    }
    | {
        type: "quote";
        text: string;
    }

    | {
        type: "youtube";
        url: string;
    }

    | {
        type: "instagram";
        url: string;
    }

    | {
        type: "twitter";
        url: string;
    };


export interface News {

    id: string;

    title: string;

    description: string;

    image: string;

    category: string;

    date: string;

    content: ArticleBlock[];

}