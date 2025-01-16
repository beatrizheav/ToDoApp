import { useEffect } from "react";
import { useRouter } from "expo-router";
import { LogBox } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import { Manrope_700Bold } from "@expo-google-fonts/manrope";

LogBox.ignoreAllLogs(true);

export default function Index() {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    OpenSans_600SemiBold,
    Manrope_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      router.replace("/main");
    }
  }, [fontsLoaded, router]);
}
