import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductListItem = ({product}) => {
  return(
    <View style={styles.container}>
    <Image source={{uri: product.image}} style={styles.image}/>
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </View>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  
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
