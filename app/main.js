import React, { useState } from "react";
import { View } from "react-native";
import { containers } from "../styles/containers";
import AvatarPicker from "../components/AvatarPicker";

const Main = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  return (
    <View style={containers.safeArea}>
      <AvatarPicker
        selectedAvatarUri={selectedAvatar}
        onAvatarSelect={setSelectedAvatar}
      />
    </View>
  );
};
export default Main;
