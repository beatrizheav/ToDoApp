import { useEffect } from "react";
import AppLoading from "expo-app-loading";
import { useRouter } from "expo-router";
import { LogBox } from "react-native";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

import { OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";

LogBox.ignoreAllLogs(true);

export default function Index() {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    OpenSans_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      router.replace("/main");
    }
  }, [fontsLoaded, router]);
}
