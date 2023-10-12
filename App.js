import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./src/screens/HomeScreen"
import RestaurantScreen from "./src/screens/RestaurantScreen"
import { Provider } from "react-redux"
import store from "./src/store"
import BasketScreen from "./src/screens/BasketScreen"

const { Screen, Navigator } = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigator>
          <Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Screen name="Restaurant" component={RestaurantScreen} />
          <Screen
            options={() => ({ presentation: "modal", headerShown: false })}
            name="Basket"
            component={BasketScreen}
          />
        </Navigator>
      </Provider>
    </NavigationContainer>
  )
}
