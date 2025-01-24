import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import DraggableFlatList from "react-native-draggable-flatlist";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

const App = () => {
  const [sections, setSections] = useState(DATA);

  // Flatten the data for the DraggableFlatList
  const flatListData = sections.reduce((acc, section) => {
    const sectionHeader = { key: section.title, isHeader: true };
    const items = section.data.map((item) => ({ key: item, isHeader: false }));
    return [...acc, sectionHeader, ...items];
  }, []);

  // Handle the drag and drop of items
  const handleDragEnd = ({ data }) => {
    const newSections = [];
    let currentSection = null;

    data.forEach((item) => {
      if (item.isHeader) {
        currentSection = { title: item.key, data: [] };
        newSections.push(currentSection);
      } else {
        currentSection.data.push(item.key);
      }
    });

    setSections(newSections);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <DraggableFlatList
          data={flatListData}
          renderItem={({ item, index, drag }) => (
            <TouchableOpacity
              style={item.isHeader ? styles.headerContainer : styles.item}
              onLongPress={drag}
            >
              {item.isHeader ? (
                <Text style={styles.header}>{item.key}</Text>
              ) : (
                <Text style={styles.title}>{item.key}</Text>
              )}
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.key + index}
          onDragEnd={handleDragEnd}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  headerContainer: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingLeft: 16,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});

export default App;
