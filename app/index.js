import { useEffect } from "react";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import { Manrope_700Bold } from "@expo-google-fonts/manrope";
SplashScreen.preventAutoHideAsync();

// Ignorar los warnings específicos
import { LogBox } from "react-native";

export default function App() {
  const router = useRouter();
  // Ignorar todos los warnings
  LogBox.ignoreAllLogs();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    OpenSans_600SemiBold,
    Manrope_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      router.replace("/signIn");
    }
  }, [fontsLoaded, router]);

  if (!fontsLoaded) {
    return null;
  }

  return null;
}
