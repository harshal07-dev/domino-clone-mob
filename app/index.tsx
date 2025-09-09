import products from "@/assets/data/products";
import ProductListItem from "@/components/ProductListItem";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MenuScreen() {
  const router = useRouter();
  return (
   <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
     <StatusBar barStyle="dark-content"/>
     
     {/* Header */}
     <View style={styles.header}>
       <Text style={styles.title}>Menu</Text>
       <Pressable onPress={() => router.push("/cart")} hitSlop={8} style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}>
         <Ionicons name="cart-outline" size={24} color="#1f1f1f" />
       </Pressable>
     </View>

     {/* Menu Grid */}
     <FlatList 
     data={products} 
     renderItem={({item}) => <ProductListItem product={item}/>} 
     numColumns={2}
     contentContainerStyle={{gap:10, padding: 10}}
     columnWrapperStyle={{gap: 10}} 
     />

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
  },
})


