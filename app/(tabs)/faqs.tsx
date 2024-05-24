import { StyleSheet, FlatList, SafeAreaView, Text, View } from "react-native";

export default function Faqs() {

  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Text style={styles.titleText}>FAQs</Text>
      </View>
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
    borderWidth: 2,
    borderRadius: 15,
    height: "92%",
    // flex: 1,
    marginTop: 20,
    padding: 10,
  },
});
