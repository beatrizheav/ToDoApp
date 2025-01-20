import React, { useState } from "react";
import { View } from "react-native";
import { containers } from "../styles/containers";
import AvatarDropdownGallery from "../components/AvatarPicker";

const Main = () => {
  const task = {
    id: "1",
    title: "Task 1",
    description: "Description of Task 1",
    date: "2025-01-20",
    priority: "Low",
    category: "Work",
  };

  const [selectedAvatar, setSelectedAvatar] = useState(null); // Track selected avatar

  const handleAvatarSelect = (avatarUri) => {
    setSelectedAvatar(avatarUri);
    // Do something with the selected avatar URI (e.g., save to the backend)
  };

  return (
    <View style={containers.main}>
      <AvatarDropdownGallery
        selectedAvatarUri={selectedAvatar}
        onAvatarSelect={handleAvatarSelect}
      />
    </View>
  );
};
export default Main;
