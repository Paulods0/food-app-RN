import { ScrollView, Text, View } from "react-native"
import CategoryCard from "./CategoryCard"
import foods from "../data"

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {foods.map((food) => (
        <CategoryCard imgUrl={food.imgUrl} title={food.title} />
      ))}
    </ScrollView>
  )
}

export default Categories
