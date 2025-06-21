import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

let cache = null;
let cacheTime = 0;

app.get("/api/rss", async (req, res) => {
  try {
    const now = Date.now();
    const feed = req.query.feed || "news";
    const rssUrl = `https://www.animenewsnetwork.com/news/rss.xml`;

    if (cache && now - cacheTime < 60000) {
      return res.json(cache);
    }

    const response = await fetch(rssUrl);
    if (!response.ok) {
      return res.status(response.status).send(await response.text());
    }

    const xmlText = await response.text();
    const json = await parseStringPromise(xmlText, {
      explicitArray: false,
      mergeAttrs: true,
    });

    let items = json.rss?.channel?.item || [];
    items = Array.isArray(items) ? items : [items];

    if (feed.toLowerCase() !== "news") {
      const label = feed.charAt(0).toUpperCase() + feed.slice(1);
      items = items.filter((item) => {
        const cat = item.category;
        if (Array.isArray(cat)) return cat.includes(label);
        return cat === label;
      });
    }

    cache = items;
    cacheTime = now;

    res.json(items);
  } catch (err) {
    console.error("RSS proxy error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ ВЫЗОВ СЕРВЕРА ДОЛЖЕН БЫТЬ ТУТ, СНАРУЖИ
app.listen(PORT, () =>
  console.log(`✅ ANN proxy running on http://localhost:${PORT}`)
);
