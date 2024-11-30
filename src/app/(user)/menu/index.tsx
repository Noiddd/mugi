import { FlatList, Text } from "react-native";
import ProductListItem from "@/components/ProductListItem";
import { ActivityIndicator } from "react-native";
import { useProductList } from "@/api/products";

export default function HomeScreen() {
  const { data: products, error, isLoading } = useProductList();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch products</Text>;
  }

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
