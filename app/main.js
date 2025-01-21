import React, { useState } from "react";
import { View, Image } from "react-native";
import { containers } from "../styles/containers";
import AvatarDropdownGallery from "../components/AvatarPicker";

const Main = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null); // Track selected avatar
  return (
    <View style={containers.main}>
      <Image source={selectedAvatar} />
      <AvatarDropdownGallery
        selectedAvatarUri={selectedAvatar}
        onAvatarSelect={setSelectedAvatar}
      />
    </View>
  );
};
export default Main;
