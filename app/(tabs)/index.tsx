import { StyleSheet, FlatList, SafeAreaView, Text, View } from "react-native";


export default function HomeScreen() {
  const FlatlistData = [
    {
      key: 1,
      value:
        "Lorem ipsum dolor sit amet,  labore et dolore magna aliqua. Ut enim ad minim veniam, uip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ",
    },
    {
      key: 2,
      value:
        "Lorem ipsum dolor sit amet. Ut enim ad minim veniam, uip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ",
    },
    {
      key: 3,
      value:
        " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ",
    },
    {
      key: 4,
      value:
        "Ut enim ad minim veniam, uip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ",
    },
    {
      key: 5,
      value:
        "Lorem ipsum dolor sit amet,  labore et dolore magna aliqua. Ut enim ad minim veniam, uip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ",
    },
    {
      key: 6,
      value:
        "Lorem ipsum dolor sit amet. Ut enim ad minim veniam, uip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ",
    },
    {
      key: 7,
      value:
        " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ",
    },
    {
      key: 8,
      value:
        "Ut enim ad minim veniam, uip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ",
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Text style={styles.titleText}>Home</Text>

        <View style={styles.scheduleView}>
          <Text style={styles.orientationText}>Orientation</Text>
          <FlatList
            data={FlatlistData}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.itemText}>
                  {item.key}. {item.value}
                </Text>
              </View>
            )}
          />
        </View>
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
