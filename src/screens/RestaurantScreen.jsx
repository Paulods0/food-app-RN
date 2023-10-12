import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native"
import React from "react"
import { SafeAndroidArea } from "../safeArea"
import { useNavigation, useRoute } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import { urlFor } from "../../sanity"
import {
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline"
import {
  StarIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "react-native-heroicons/solid"
import DishRow from "../components/DishRow"
import BasketIcon from "../components/BasketIcon"

const RestaurantScreen = () => {
  const navigation = useNavigation()

  const {
    params: {
      id,
      title,
      imgUrl,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 bg-gray-200"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute bottom-4 left-2 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon color="#00BBCC" size={20} />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row items-center space-x-2 my-1">
              <StarIcon color="green" size={20} opacity={0.4} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-700">{rating}</Text> {genre}
              </Text>
              <View className="flex-row items-center space-x-1 my-1">
                <MapPinIcon color={"gray"} opacity={0.4} size={20} />
                <Text className="text-xs text-gray-500 ">
                  Nearby - {address.substring(0, 25)}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 pb-4 mt-2">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-y-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ArrowRightIcon color="#00BBCC" size={20} />
          </TouchableOpacity>
        </View>

        <View className="pb-32">
          <Text className="px-4 pt-6 text-xl font-bold">Menu</Text>
          {/**Dish Rows */}
          {dishes?.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              description={dish.short_descrition}
              name={dish.name}
              image={dish.image}
              price={dish.price}
            />
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default RestaurantScreen
