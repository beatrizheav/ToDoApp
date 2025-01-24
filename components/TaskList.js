import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import tasks from "../data/tasks.json";
import TaskView from "./TaskView";
import CustomTitle from "./CustomTitle";

export default function App() {
  const [dataToDo, setDataToDo] = useState(
    tasks.filter((item) => item.status === "to do")
  );
  const [dataInProgress, setDataInProgress] = useState(
    tasks.filter((item) => item.status === "in progress")
  );

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity onLongPress={drag} disabled={isActive}>
          <TaskView task={item} />
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <CustomTitle text={"To do"} type={"small"} />
        <View style={{ height: 200, marginBottom: 15 }}>
          <DraggableFlatList
            data={dataToDo}
            onDragEnd={({ data }) => setDataToDo(data)} // Update the state with the new data after drag
            keyExtractor={(item) => item.id.toString()} // Key extractor for each item
            renderItem={renderItem} // Render function for each item
          />
        </View>
        2
        <CustomTitle text={"In-progress"} type={"small"} />
        <View style={{ height: 200 }}>
          <DraggableFlatList
            data={dataInProgress}
            onDragEnd={({ data }) => setDataToDo(data)} // Update the state with the new data after drag
            keyExtractor={(item) => item.id.toString()} // Key extractor for each item
            renderItem={renderItem} // Render function for each item
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  rowItem: {
    height: 100,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
