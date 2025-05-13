import { VideoSource } from "expo-video";
import { Video } from "./fetchVideos";

export default function convertVideoToVideoSource(video: Video): VideoSource {
  return {
    uri: video.url,
    useCaching: false,
  };
}
