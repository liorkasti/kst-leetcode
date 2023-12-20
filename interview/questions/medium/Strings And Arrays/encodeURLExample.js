const express = require("express");
const shortid = require("shortid");

const app = express();
const urlMap = new Map();
const hitMap = new Map();

app.get("/shorten", (req, res) => {
    const originalUrl = req.query.url;
    const shortUrl = shortid.generate();
    urlMap.set(shortUrl, originalUrl);
    hitMap.set(shortUrl, 0);
    res.json({
        originalUrl: originalUrl,
        shortUrl: shortUrl
    });
});

app.get("/:shortUrl", (req, res) => {
    const shortUrl = req.params.shortUrl;
    const originalUrl = urlMap.get(shortUrl);
    if (!originalUrl) {
        return res.status(404).send("URL not found");
    }
    hitMap.set(shortUrl, hitMap.get(shortUrl) + 1);
    res.redirect(originalUrl);
});

app.get("/hits/:shortUrl", (req, res) => {
    const shortUrl = req.params.shortUrl;
    const hits = hitMap.get(shortUrl);
    if (!hits) {
        return res.status(404).send("URL not found");
    }
    res.json({
        shortUrl: shortUrl,
        hits: hits
    });
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
