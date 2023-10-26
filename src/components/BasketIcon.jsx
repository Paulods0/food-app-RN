import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { useSelector } from "react-redux"
import {
  memoizedSelectBasketTotal,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice"
import { useNavigation } from "@react-navigation/native"

const BasketIcon = () => {
  const navigation = useNavigation()
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)

  if (items.length === 0) return null

  return (
    <View className="absolute bottom-4 z-50 w-full">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 rounded">
          {items.length}
        </Text>
        <Text className="flex-1 text-white text-center font-semibold  text-lg">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          ${basketTotal.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon
