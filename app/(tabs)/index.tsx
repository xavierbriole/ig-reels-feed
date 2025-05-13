import List from "@/components/List";
import { StyleSheet, View } from "react-native";
import { videoSources } from "../../videosSources";

export default function Index() {
  return (
    <View style={styles.container}>
      <List videoSources={videoSources} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
