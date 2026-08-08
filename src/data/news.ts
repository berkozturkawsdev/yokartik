
import type { News } from "../types/News";
import rawKatyPerryBottle from "./news/katy-perry-bottle.json";
import rawAnimeFanOrder from "./news/anime-fan-order.json";
import rawDdgSunglasses from "./news/ddg-sunglasses.json";
import rawAsmrBan from "./news/asmr-ban.json";
import rawNewOrleans911Ai from "./news/new-orleans-911-ai.json";
import rawGoogleFlockGold from "./news/google-flock-gold.json";
import rawItalianHelpGerman from "./news/italians-help-germans.json";
import rawTrumpNaruto from "./news/trump-pokemon-naruto.json";
import rawUtahTamponFire from "./news/utah-tampon-fire.json";

const katyPerryBottle: News = rawKatyPerryBottle as unknown as News;
const animeFanOrder: News = rawAnimeFanOrder as unknown as News;
const ddgSunglasses: News = rawDdgSunglasses as unknown as News;
const asmrBan: News = rawAsmrBan as unknown as News;
const newOrleans911Ai: News = rawNewOrleans911Ai as unknown as News;
const googleFlockGold: News = rawGoogleFlockGold as unknown as News;
const italianHelpGerman: News = rawItalianHelpGerman as unknown as News;
const trumpNaruto: News = rawTrumpNaruto as unknown as News;
const utahTamponFire: News = rawUtahTamponFire as unknown as News;


export const news: News[] = [
    utahTamponFire,
    trumpNaruto,
    italianHelpGerman,
    googleFlockGold,
    newOrleans911Ai,
    asmrBan,
    ddgSunglasses,
    animeFanOrder,
    katyPerryBottle,
];