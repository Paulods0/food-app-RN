import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { selectRestaurant } from "../features/restaurantSlice"
import {
  memoizedSelectBasketTotal,
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice"
import { XCircleIcon } from "react-native-heroicons/solid"
import { urlFor } from "../../sanity"

const BasketScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      results[item.id] = [...(results[item.id] || []), item]
      return results
    }, {})

    setGroupedItemsInBasket(groupedItems)
  }, [items])

  // console.log(groupedItemsInBasket)
  return (
    <View className="relative flex-1">
      <View className="relative rounded-t-3xl flex-1 bg-gray-100 pb-10 ">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-8 right-4 bg-gray-100 rounded-full z-10"
        >
          <XCircleIcon size={40} color="#00BBCC" />
        </TouchableOpacity>

        <View className="w-full p-4 bg-white border-b rounded-t-3xl border-gray-300">
          <Text className="text-black font-bold text-lg text-center">
            Basket
          </Text>
          <Text className="text-gray-400 text-center">{restaurant.title}</Text>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 rounded-full p-4 bg-gray-100"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00BBCC]">{items.length}x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="w-12 h-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                ${items[0]?.price.toFixed(2)}
              </Text>

              <TouchableOpacity>
                <Text
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                  className="text-[#00BBCC] text-xs"
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4 ">
          <View className="flex-row justify-between ">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">${basketTotal.toFixed(2)}</Text>
          </View>

          <View className="flex-row justify-between ">
            <Text className="text-gray-400">Delivery Free</Text>
            <Text className="text-gray-400">$5.99</Text>
          </View>

          <View className="flex-row justify-between ">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              ${(basketTotal + 5.99).toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrderScreen")}
            className="rounded-lg p-4 bg-[#00BBCC]"
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default BasketScreen
