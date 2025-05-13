import { VideoSource } from "expo-video";

const HOST_URL = "http://192.168.124.37:3000";

const localVideoId: VideoSource = require("./assets/videos/3.mp4") as number;

const localVideo: VideoSource = {
  assetId: localVideoId,
  metadata: {
    title: "Local Video",
    artist: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

const externalVideo: VideoSource = {
  uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  metadata: {
    title: "Big Buck Bunny",
    artist: "The Open Movie Project",
  },
};

const video1: VideoSource = {
  uri: `${HOST_URL}/video/1.mp4`,
  metadata: {
    title: "Video 1",
    artist: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

const video2: VideoSource = {
  uri: `${HOST_URL}/video/2.mp4`,
  metadata: {
    title: "Video 2",
    artist: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

const video3: VideoSource = {
  uri: `${HOST_URL}/video/3.mp4`,
  metadata: {
    title: "Video 3",
    artist: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

const video4: VideoSource = {
  uri: `${HOST_URL}/video/4.mp4`,
  metadata: {
    title: "Video 4",
    artist: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

const video5: VideoSource = {
  uri: `${HOST_URL}/video/5.mp4`,
  metadata: {
    title: "Video 5",
    artist: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

const video6: VideoSource = {
  uri: `${HOST_URL}/video/6.mp4`,
  metadata: {
    title: "Video 6",
    artist: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

const video7: VideoSource = {
  uri: `${HOST_URL}/video/7.mp4`,
  metadata: {
    title: "Video 7",
    artist: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

const video8: VideoSource = {
  uri: `${HOST_URL}/video/8.mp4`,
  metadata: {
    title: "Video 8",
    artist: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

const video9: VideoSource = {
  uri: `${HOST_URL}/video/9.mp4`,
  metadata: {
    title: "Video 9",
    artist: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

const nullSource: VideoSource = {
  metadata: {
    title: "Null Source",
    artist: "-",
  },
};

const videoSources: VideoSource[] = [
  localVideo,
  externalVideo,
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
  video8,
  video9,
  nullSource,
];

export { videoSources };
