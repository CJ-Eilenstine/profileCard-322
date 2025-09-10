import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://cdn.discordapp.com/attachments/849739277980926002/1415220577928740974/IMG_3068.jpg?ex=68c26a5f&is=68c118df&hm=c1bd73cc33d505daa0469fea77188c1c63bc6b181edcc0b77adda34fb9077402&",
          }}
          style={styles.avatar}
        />
        <Text style={styles.title}>CJ Eilenstine</Text>
        <Text style={styles.bio}>
          I am a Media Art's and Science Major at IUI, who loves coffee cake.
        </Text>
        <Text style={styles.fact}>I play lots of basketball.</Text>
        <Text style={styles.fact}>I am somewhere at sometime.</Text>
        <Text style={styles.fact}>
          I like listening to audiobooks like Mistborn
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2eddc2",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#f09c77",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    textAlign: "center",
    margin: 15,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 15,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "Bold",
    margin: 5,
  },
  bio: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  fact: {
    textAlign: "center",
    fontSize: 12,
    color: "#555",
    marginTop: 5,
  },
});
