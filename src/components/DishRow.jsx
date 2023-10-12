import { View, Text, TouchableOpacity, Image } from "react-native"
import React, { useState } from "react"
import { urlFor } from "../../sanity"
import { PlusCircleIcon, MinusCircleIcon } from "react-native-heroicons/solid"
import { useDispatch, useSelector } from "react-redux"
import {
  addToBasket,
  removeFromBasket,
  selectBasaketItemById,
  selectBasketItems,
} from "../features/basketSlice"
import { useNavigation } from "@react-navigation/native"

const DishRow = ({ id, name, description, price, image }) => {
  const navigation = useNavigation()
  const [isPressed, setIsPressed] = useState(false)
  const items = useSelector((state) => selectBasaketItemById(state, id))
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }))
  }

  const removeItemFromBasket = () => {
    if (!items.length > 0) return

    dispatch(removeFromBasket({ id }))
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed((prev) => !prev)}
        className={`p-4 bg-white ${
          !isPressed ? "border border-gray-200" : ""
        } `}
      >
        <View className="flex-row items-center">
          <View className="flex-1 or-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">${price}</Text>
          </View>

          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              className="w-20 h-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="w-full p-4 bg-white">
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color={"#00BBCC"} />
            </TouchableOpacity>

            <Text className="font-bold">{items.length}</Text>

            <TouchableOpacity
              onPress={removeItemFromBasket}
              disabled={!items.length > 0}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#00BBCC" : "gray"}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow
