import React, { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { SafeAndroidArea } from "../safeArea"
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from "@react-navigation/native"

const PreparingOrderScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery")
    }, 1000)
  }, [])

  return (
    <SafeAreaView
      style={SafeAndroidArea.AndroidSafeArea}
      className="bg-[#00CCBB] flex-1 justify-center items-center"
    >
      <Animatable.Image
        source={require("../../assets/order-process.png")}
        iterationCount={1}
        className="h-72 w-72"
        animation="slideInUp"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={2}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Bar height={6} width={150} indeterminate={true} color="white" />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen
