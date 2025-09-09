import { Colors } from "@/constants/Colors";
import { Product } from "@/constants/types";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";


type ProductListItemProps = {
    product: Product
}
const ProductListItem = ({product}: ProductListItemProps) => {
  return(
    <Link href={`/${product.id}`} asChild>
    <Pressable style={styles.container}>
    {product.image && (
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
    )}
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </Pressable>
    </Link>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#fff',
    padding: 10,
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    margin: 10,
    maxWidth: '50%'
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.tintColor
  },
  image:{
    width: '100%',
    aspectRatio: 1,
  }
}) 
