import { UserProvider } from "../context/UserContext";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <UserProvider>
      <Slot /> {/* Renders the content based on routing */}
    </UserProvider>
  );
}
