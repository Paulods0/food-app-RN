import { useNavigation } from "@react-navigation/native"
import React, { useLayoutEffect } from "react"
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native"
import { SafeAndroidArea } from "../safeArea"
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline"
import Categories from "../components/Categories"
import FeaturedRow from "../components/FeaturedRow"

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={SafeAndroidArea.AndroidSafeArea}
      className="bg-white py-5"
    >
      {/**Header */}
      <View className="flex-row pb-3 items-center mt-4 space-x-2 px-4">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 rounded-full p-4"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-xl">Current Location</Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/** Search */}
      <View className="flex-row justify-center items-center space-x-2 px-4 pb-2">
        <View className="flex items-center flex-row  space-x-2 flex-1 bg-gray-300 p-2 rounded-xl mb-2">
          <MagnifyingGlassIcon color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            className="w-full h-full text-white placeholder:text-white"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/** Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/**Categories */}
        <Categories />
        {/**Featured */}
        <FeaturedRow
          id="testing 1"
          title="Featured"
          description="Paid placements from our partners"
        />
        {/**Tasty discounts */}
        <FeaturedRow
          id="testing 2"
          title="Tasty discounts"
          description="Everyone's enjoying these juicy discounts"
        />
        {/**Offers near you */}
        <FeaturedRow
          id="testing 3"
          title="Offers near you"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
