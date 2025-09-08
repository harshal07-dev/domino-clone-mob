import products from "@/assets/data/products";
import ProductListItem from "@/components/ProductListItem";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MenuScreen() {
  return (
   <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
     <StatusBar barStyle="dark-content"/>
     <ProductListItem product={products[0]}/>
     <ProductListItem product={products[1]}/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
})


