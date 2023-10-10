import { StatusBar } from "expo-status-bar"
import { SafeAreaView, Text, TextInput, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./src/screens/HomeScreen"

const { Screen, Navigator } = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  )
}
