import products from "@/assets/data/products";
import Button from "@/components/Button";
import { Link, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const sizes = ["S", "M", "L", "XL"];

const ProductDemo = () => {
  const { id } = useLocalSearchParams();
  
  const [selectedSize, setSelectedSize] = useState('M')

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    console.warn('Adding to cart, size: ', selectedSize  )
  }

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Link href={"/"} asChild>
          <Pressable style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </Pressable>
        </Link>
        <Text style={styles.headerTitle}>{product?.name ?? "Product"}</Text>
      </View>
      <View>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>

      <View style={styles.content}>
        <Text style={{fontSize: 18}}>Select size</Text>
        <View style={styles.sizesRow}>
          {sizes.map((size) => (
            <Text
              key={size}
              onPress={() => setSelectedSize(size)} 
              style={[
                styles.sizePill,
                {backgroundColor: selectedSize === size ? 'dodgerblue' : 'white',
                  color: selectedSize === size ? 'white' : '#000'
                }
              ]
              }
            >
              {size}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>${product.price}</Text>
        <Button onPress={addToCart} text='Add to cart'/>
      </View>
    </SafeAreaView>
  );
};

export default ProductDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    position: "relative",
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    // backgroundColor: '#f8f9fa',
    position: "absolute",
    left: -10,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: "600",
    backgroundColor: "dodgerblue",
    color: "#fff",
    borderRadius: 20,
    width: 80,
    height: 45,
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 45,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    textAlign: "right",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  
  footer: {
   padding: 15,
   marginVertical: -60,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  sizesRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
    justifyContent: 'space-around'
  },
  sizePill: {
    borderRadius: 30,
    width: 50,
    aspectRatio: 1,
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 50,
    borderColor: "#ddd",
    backgroundColor: "#fafafa",
    fontWeight: "600",
    marginRight: 12,
    fontSize: 20,
    
  }
});
