import products from "@/assets/data/products";
import { Colors } from "@/constants/Colors";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const product = products[0];
export default function Index() {
  return (
   <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
     <StatusBar barStyle="dark-content"/>
     <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111",
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.tintColor
  },
  image:{
    width: '100%',
    aspectRatio: 1,
  }
}) 
