import AsyncStorage from "@react-native-async-storage/async-storage";

// When user sign In, the user data is stored in the device
const storeUser = async (userData) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(userData));
  } catch (error) {
    console.error("Error guardando el usuario:", error);
  }
};

export default storeUser;
