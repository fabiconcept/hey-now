import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import SplashScreenComponent from '@/components/SplashScreen';
import "../global.css";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [showCustomSplash, setShowCustomSplash] = useState(true);

  // Load fonts
  const [fontsLoaded] = useFonts({
    Quicksand: require('../assets/fonts/Quicksand-VariableFont_wght.ttf'),
  });

  // Prepare app resources
  useEffect(() => {
    async function prepare() {
      try {
        // Prepare your app (load assets, other initialization)
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // Handle native splash screen hiding
  useEffect(() => {
    if (fontsLoaded && appIsReady) {
      // Hide the native splash screen when both fonts are loaded and app is ready
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, appIsReady]);

  // Function to handle when the custom splash screen finishes
  const handleSplashFinish = () => {
    setShowCustomSplash(false);
  };

  // If resources aren't loaded yet, return null (native splash still showing)
  if (!fontsLoaded || !appIsReady) {
    return null;
  }

  // Show custom splash screen after native splash hides
  if (showCustomSplash) {
    return <SplashScreenComponent onFinish={handleSplashFinish} />;
  }

  // Show main app after custom splash finishes
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(authentication)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style='light' />
    </GestureHandlerRootView>
  );
}