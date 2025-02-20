import AsyncStorage from "@react-native-async-storage/async-storage";

// When user log out remove the item in the async storage
const logout = async () => {
  try {
    await AsyncStorage.removeItem("user");
  } catch (error) {
    console.error("Error cerrando sesión:", error);
  }
};

export default logout;
