import List from "@/components/List";
import convertVideoToVideoSource from "@/tools/convertVideoToVideoSource";
import fetchVideos from "@/tools/fetchVideos";
import { VideoSource } from "expo-video";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const [videoSources, setVideoSources] = useState<VideoSource[] | undefined>(
    undefined,
  );
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = () => {
    setRefreshing(true);

    fetchVideos({ hostUrl: "http://192.168.124.37:3000" })
      .then((videos) => videos.map((video) => convertVideoToVideoSource(video)))
      .then((videoSources) => {
        setVideoSources(videoSources);
      })
      .finally(() => {
        setRefreshing(false);
      });
  };

  const onRefresh = () => {
    setVideoSources(undefined);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <List
        videoSources={videoSources ?? []}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
