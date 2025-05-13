import ExternalLink from "@/components/ExternalLink";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ig-reels-feed</Text>
      <Text style={styles.text}>
        2025 ©{" "}
        <ExternalLink style={styles.link} href="https://www.xavierbriole.com">
          Xavier Briole
        </ExternalLink>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  text: {
    marginBottom: 10,
    color: "#FFFFFF",
  },
  link: {
    color: "#007AFF",
  },
});
