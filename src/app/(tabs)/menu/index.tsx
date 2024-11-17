import { View, FlatList } from "react-native";
import products from "@assets/data/products";
import ProductListItem from "@/components/ProductListItem";

export default function HomeScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }} // vertical gap between items and padding around items
      columnWrapperStyle={{ gap: 10 }} // horizontal gap between items
    />
  );
}
