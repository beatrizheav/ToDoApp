import { UserProvider } from "../context/UserContext";
import { TaskProvider } from "../context/TaskContext";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <TaskProvider>
      <UserProvider>
        <Slot /> {/* Renders the content based on routing */}
      </UserProvider>
    </TaskProvider>
  );
}
