import { Platform, StatusBar, StyleSheet } from "react-native"

export const SafeAndroidArea = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
})
