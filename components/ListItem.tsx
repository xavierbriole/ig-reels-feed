import { VideoSource, VideoView, useVideoPlayer } from "expo-video";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ViewSize } from "./List";

type Props = {
  item: VideoSource;
  index: number;
  viewSize: ViewSize;
  visibleIndex: number;
};

export default function RenderItem({
  item,
  index,
  viewSize,
  visibleIndex,
}: Props) {
  const player = useVideoPlayer(null, (player) => {
    player.bufferOptions = {
      preferredForwardBufferDuration: 5,
    };
    player.loop = true;
    player.pause();
  });

  useEffect(() => {
    (async () => {
      await player.replaceAsync(item);
      player.currentTime = 10;
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    if (visibleIndex === index) {
      player.play();
    } else {
      player.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleIndex]);

  return (
    <View style={viewSize}>
      <VideoView
        player={player}
        style={styles.videoView}
        nativeControls={false}
        contentFit="cover"
        allowsVideoFrameAnalysis={false}
      />
      <View style={styles.overlayContainer}>
        <View style={styles.metadataContainer}>
          <Text style={styles.metadataText}>Video</Text>
        </View>
        <View style={styles.controlsContainer}>
          <Button title="❤️" />
          <Button title="❤️" />
          <Button title="❤️" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  videoView: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  overlayContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  metadataContainer: {
    marginBottom: 50,
    marginLeft: 25,
  },
  metadataText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  controlsContainer: {
    marginBottom: 50,
    marginRight: 25,
    justifyContent: "space-around",
    height: 200,
  },
});
