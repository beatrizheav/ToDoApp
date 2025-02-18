import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { LogBox } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import { Manrope_700Bold } from "@expo-google-fonts/manrope";
import { Asset } from "expo-asset";

SplashScreen.preventAutoHideAsync();

export default function App() {
  LogBox.ignoreAllLogs();

  const router = useRouter();
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    OpenSans_600SemiBold,
    Manrope_700Bold,
  });

  const assets = [
    require("../assets/avatars/1.png"),
    require("../assets/avatars/2.png"),
    require("../assets/avatars/3.png"),
    require("../assets/avatars/4.png"),
    require("../assets/avatars/5.png"),
    require("../assets/avatars/6.png"),
    require("../assets/avatars/7.png"),
    require("../assets/avatars/8.png"),
    require("../assets/avatars/9.png"),
    require("../assets/avatars/10.png"),
    require("../assets/avatars/11.png"),
    require("../assets/avatars/12.png"),
    require("../assets/avatars/13.png"),
    require("../assets/avatars/14.png"),
    require("../assets/avatars/15.png"),
    require("../assets/avatars/16.png"),
    require("../assets/avatars/add.png"),
    require("../assets/images/SignIn.png"),
    require("../assets/images/splashScreen.png"),
  ];

  useEffect(() => {
    async function loadAssets() {
      await Asset.loadAsync(assets);
      setAssetsLoaded(true);
    }
    loadAssets();
  }, []);

  useEffect(() => {
    if (fontsLoaded && assetsLoaded) {
      SplashScreen.hideAsync();
      router.replace("/signIn");
    }
  }, [fontsLoaded, router]);

  if (!fontsLoaded) {
    return null;
  }

  return null;
}
