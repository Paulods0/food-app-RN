import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./src/screens/HomeScreen"
import RestaurantScreen from "./src/screens/RestaurantScreen"
import { Provider } from "react-redux"
import store from "./src/store"
import BasketScreen from "./src/screens/BasketScreen"
import PreparingOrderScreen from "./src/screens/PreparingOrderScreen"
import DeliveryScreen from "./src/screens/DeliveryScreen"

const { Screen, Navigator, Group } = createNativeStackNavigator()

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
            options={{
              presentation: "transparentModal",
              headerShown: false,
              animation: "slide_from_bottom",
            }}
            name="Basket"
            component={BasketScreen}
          />
          <Screen
            name="PreparingOrderScreen"
            component={PreparingOrderScreen}
            options={{
              presentation:"fullScreenModal",
              headerShown: false,
              animation: "fade_from_bottom",
            }}
          />
          <Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{
              presentation:"fullScreenModal",
              headerShown: false,
              animation: "fade_from_bottom",
            }}
          />
        </Navigator>
      </Provider>
    </NavigationContainer>
  )
}
