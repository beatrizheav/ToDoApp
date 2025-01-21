import React, { useState } from "react";
import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
} from "react-native";

import { avatars } from "../data/avatars";
import { avatarPicker } from "../styles/components/avatar-picker";
import { fontsTheme } from "../styles/fontsTheme";
import CustomButton from "./CustomButton";

const AvatarPicker = ({ onAvatarSelect, selectedAvatarUri }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAvatarSelect = (avatarSrc) => {
    onAvatarSelect(avatarSrc);
    setIsModalVisible(false);
  };

  return (
    <View>
      <Text style={fontsTheme.regular}>Pick an avatar!</Text>
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={avatarPicker.container}
      >
        <Image
          source={
            selectedAvatarUri
              ? selectedAvatarUri
              : require("../assets/avatars/add.png")
          }
          style={avatarPicker.avatarImage}
        />
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={avatarPicker.modalBackdrop}>
          <View style={avatarPicker.modalContent}>
            <Text style={fontsTheme.bold}>Choose an Avatar</Text>
            <FlatList
              data={avatars}
              keyExtractor={(item) => item.key}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleAvatarSelect(item.src)}>
                  <Image
                    source={item.src}
                    style={[
                      avatarPicker.avatarImage,
                      avatarPicker.avatarImageMargin,
                    ]}
                  />
                </TouchableOpacity>
              )}
            />
            <CustomButton
              text="Close"
              onPress={() => setIsModalVisible(false)}
              type={"small"}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AvatarPicker;
