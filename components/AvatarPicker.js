import React, { useState } from "react";
import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

import { avatars } from "../data/avatars";
import { colorsTheme } from "../styles/colorsTheme";

const AvatarDropdownGallery = ({ onAvatarSelect, selectedAvatarUri }) => {
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility

  // Handle avatar selection
  const handleAvatarSelect = (avatarSrc) => {
    onAvatarSelect(avatarSrc); // Pass the image to the parent component
    setIsModalVisible(false); // Close modal after selection
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={styles.container}
      >
        <Text>{selectedAvatarUri ? "Selected Avatar" : "Select Avatar"}</Text>
        {selectedAvatarUri && (
          <Image source={selectedAvatarUri} style={styles.avatarImage} />
        )}
      </TouchableOpacity>

      {/* Modal for Avatar Gallery */}
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose an Avatar</Text>

            {/* Avatar Grid Gallery */}
            <FlatList
              data={avatars}
              keyExtractor={(item) => item.key}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleAvatarSelect(item.src)}>
                  <Image source={item.src} style={styles.avatarImageGrid} />
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => setIsModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: 121,
    width: 121,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colorsTheme.lightestGray,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  avatarImageGrid: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AvatarDropdownGallery;
