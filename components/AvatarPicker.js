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

// Sample Avatar Data
const avatars = [
  { id: "1", uri: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: "2", uri: "https://randomuser.me/api/portraits/men/2.jpg" },
  { id: "3", uri: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: "4", uri: "https://randomuser.me/api/portraits/women/2.jpg" },
  // Add more avatars here
];

const AvatarDropdownGallery = ({ onAvatarSelect, selectedAvatarUri }) => {
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility

  // Handle avatar selection
  const handleAvatarSelect = (avatar) => {
    onAvatarSelect(avatar);
    setIsModalVisible(false); // Close modal after selection
  };

  return (
    <View style={styles.container}>
      {/* Avatar Display */}
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={styles.avatarDisplay}
      >
        <Text>{selectedAvatarUri ? "Selected Avatar" : "Select Avatar"}</Text>
        {selectedAvatarUri && (
          <Image
            source={{ uri: selectedAvatarUri }}
            style={styles.avatarImage}
          />
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
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleAvatarSelect(item.uri)}>
                  <Image
                    source={{ uri: item.uri }}
                    style={styles.avatarImageGrid}
                  />
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  avatarDisplay: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ddd",
    alignItems: "center",
    flexDirection: "row",
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
