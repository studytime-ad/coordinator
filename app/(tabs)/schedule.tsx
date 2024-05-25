import { StyleSheet, FlatList, SafeAreaView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Schedule() {
  return (
    <SafeAreaView>
      <LinearGradient colors={["#FFF3F3", "#DDB52F"]} style={styles.mainView}>
        <Text style={styles.titleText}>Schedule</Text>

        <View style={styles.scheduleView}>
          <Text style={styles.orientationText}>Day 1</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  orientationText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemText: {
    padding: 10,
    fontSize: 18,
    textAlign: "justify",
  },
  scheduleView: {
    backgroundColor: "#FFF3F3",
    borderColor: '#DDB52F',
    borderWidth: 2,
    borderRadius: 15,
    height: "92%",
    // flex: 1,
    marginTop: 20,
    padding: 10,
  },
});
