
import type { News } from "../types/News";
import rawKatyPerryBottle from "./news/katy-perry-bottle.json";
import rawAnimeFanOrder from "./news/anime-fan-order.json";
import rawDdgSunglasses from "./news/ddg-sunglasses.json";

const katyPerryBottle: News = rawKatyPerryBottle as unknown as News;
const animeFanOrder: News = rawAnimeFanOrder as unknown as News;
const ddgSunglasses: News = rawDdgSunglasses as unknown as News;

export const news: News[] = [
    ddgSunglasses,
    animeFanOrder,
    katyPerryBottle,
];