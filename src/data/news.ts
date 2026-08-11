import type { News } from "../types/News";

const newsModules = import.meta.glob("./news/*.json", {
    eager: true,
    import: "default",
});

const monthMap: Record<string, number> = {
    Ocak: 0,
    Şubat: 1,
    Mart: 2,
    Nisan: 3,
    Mayıs: 4,
    Haziran: 5,
    Temmuz: 6,
    Ağustos: 7,
    Eylül: 8,
    Ekim: 9,
    Kasım: 10,
    Aralık: 11,
};

const parseTurkishDate = (date: string): number => {
    const match = date.match(/^(\d{1,2})\s+([A-Za-zÇçĞğİıÖöŞşÜü]+)\s+(\d{4})/);

    if (!match) return 0;

    const [, day, month, year] = match;

    return new Date(
        Number(year),
        monthMap[month],
        Number(day)
    ).getTime();
};

export const news: News[] = (Object.values(newsModules) as News[]).sort(
    (a, b) => parseTurkishDate(b.date) - parseTurkishDate(a.date)
);