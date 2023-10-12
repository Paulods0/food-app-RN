import { View, Text, TouchableOpacity, Image } from "react-native"
import React from "react"
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline"
import { urlFor } from "../../sanity"
import { useNavigation } from "@react-navigation/native"

const RestaurantCard = ({
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
}) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", {
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
        })
      }
      className="shadow bg-white mr-3 "
    >
      <View className="h-36">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="h-full rounded-sm object-cover"
        />
      </View>

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500 ">{rating}</Text> - {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500 ">
            Nearby - {address.substring(0, 20)}...
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard
