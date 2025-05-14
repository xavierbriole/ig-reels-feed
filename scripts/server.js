const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

// eslint-disable-next-line no-undef
const videoDirectory = path.join(__dirname, "..", "assets", "videos");
const HOST_URL = "http://192.168.124.37:3000";

app.get("/videos", (req, res) => {
  fs.readdir(videoDirectory, (err, files) => {
    if (err) {
      return res.status(500).send("Erreur lors de la lecture du répertoire.");
    }

    const videos = files
      .filter((file) => file.endsWith(".mp4"))
      .map((file) => ({
        name: `Vidéo ${file.split(".")[0]}`,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: `${HOST_URL}/video/${file}`,
      }));

    res.json(videos);
  });
});

app.get("/video/:name", (req, res) => {
  const videoPath = path.join(videoDirectory, req.params.name);

  fs.access(videoPath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send("Vidéo non trouvée.");
    }

    res.setHeader("Content-Type", "video/mp4");

    res.sendFile(videoPath);
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Listen on http://localhost:3000");
});
