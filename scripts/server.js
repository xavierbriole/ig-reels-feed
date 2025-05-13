const express = require("express");
const path = require("path");
const app = express();

// eslint-disable-next-line no-undef
const videoDirectory = path.join(__dirname, "..", "assets", "videos");

app.get("/video/:name", (req, res) => {
  const videoPath = path.join(videoDirectory, req.params.name);

  const fs = require("fs");
  fs.access(videoPath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send("Vidéo non trouvée.");
    }

    res.sendFile(videoPath);
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Listen on http://localhost:3000");
});
