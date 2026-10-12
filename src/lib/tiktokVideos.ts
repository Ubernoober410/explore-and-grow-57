import v1 from "@/assets/tiktok-7694553170084777229.jpg.asset.json";
import v2 from "@/assets/tiktok-7694182278523587853.jpg.asset.json";
import v3 from "@/assets/tiktok-7688572832254643469.jpg.asset.json";
import v4 from "@/assets/tiktok-7685997653578026254.jpg.asset.json";
import v5 from "@/assets/tiktok-7681117210537987341.jpg.asset.json";
import v6 from "@/assets/tiktok-7681106612588727566.jpg.asset.json";
import v7 from "@/assets/tiktok-7681106178641792269.jpg.asset.json";
import v8 from "@/assets/tiktok-7681105977889885453.jpg.asset.json";
import v9 from "@/assets/tiktok-7681079810549927181.jpg.asset.json";

export interface TikTokVideo {
  videoId: string;
  url: string;
  title: string;
  thumbnail: string;
}

const video = (url: string, title: string, thumbnail: string): TikTokVideo => ({
  videoId: url.split("/video/")[1] ?? url,
  url,
  title,
  thumbnail,
});

export const TIKTOK_VIDEOS: TikTokVideo[] = [
  video(
    "https://www.tiktok.com/@emerging.lux/video/7694553170084777229",
    "Day in the life of a wildlife forensic scientist",
    v1.url
  ),
  video(
    "https://www.tiktok.com/@emerging.lux/video/7694182278523587853",
    "Day in the life of a courtroom reporter",
    v2.url
  ),
  video(
    "https://www.tiktok.com/@emerging.lux/video/7688572832254643469",
    "Day in the life of an airport technician",
    v3.url
  ),
  video(
    "https://www.tiktok.com/@emerging.lux/video/7685997653578026254",
    "Day in the life of a lineman",
    v4.url
  ),
  video(
    "https://www.tiktok.com/@emerging.lux/video/7681117210537987341",
    "Day in the life of a elevator technician",
    v5.url
  ),
  video(
    "https://www.tiktok.com/@emerging.lux/video/7681106612588727566",
    "Day in the life of an offshore oil rig worker",
    v6.url
  ),
  video(
    "https://www.tiktok.com/@emerging.lux/video/7681106178641792269",
    "Day in the life of a train conductor",
    v7.url
  ),
  video(
    "https://www.tiktok.com/@emerging.lux/video/7681105977889885453",
    "Treat water",
    v8.url
  ),
  video(
    "https://www.tiktok.com/@emerging.lux/video/7681079810549927181",
    "Day in the life of a garbage man",
    v9.url
  ),
];
