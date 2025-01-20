import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { containers } from "../styles/containers";
import CustomAlert from "../components/CustomAlert";

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={containers.main}>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Text style={{ fontSize: 30 }}>Open Alert</Text>
      </TouchableOpacity>
      <CustomAlert
        visible={modalVisible}
        title={"Delete task"}
        description={"Are you sure you want to delete this task?"}
        setVisible={setModalVisible}
      />
    </View>
  );
};
export default Main;
