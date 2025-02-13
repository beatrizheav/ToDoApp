// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack screenOptions={{ headerShown: false }} />;
// }

import { UserProvider } from "../context/UserContext"; // Import the UserProvider
import { Stack } from "expo-router"; // Use Stack to manage screen options
import { Slot } from "expo-router"; // To render the page content

export default function RootLayout() {
  return (
    <UserProvider>
      <Slot /> {/* Renders the content based on routing */}
    </UserProvider>
  );
}
