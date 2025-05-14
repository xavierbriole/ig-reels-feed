import { Video } from "@/tools/fetchVideos";
import { VideoSource } from "expo-video";

export default function convertVideoToVideoSource(video: Video): VideoSource {
  return {
    uri: video.url,
    useCaching: true,
    metadata: {
      title: video.name,
      artist: video.description,
    },
  };
}
