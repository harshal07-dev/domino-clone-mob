import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useCart } from './providers/CartProvider'

const CartScreen = () => {
  const { items, increase, decrease } = useCart()

  return (
    <SafeAreaView style={styles.safeArea} edges={['top','left','right']}>
      <Text style={styles.header}>cart</Text>
      {items.map((item) => (
        <View key={item.id} style={styles.row}>
          {item.product.image ? (
            <Image source={{uri: item.product.image}} style={styles.image} />
          ) : (
            <View style={[styles.image,{backgroundColor:'#eee'}]} />
          )}
          <View style={{flex:1}}>
            <Text style={styles.name}>{item.product.name}</Text>
            <Text style={styles.sub}>${item.product.price.toFixed(2)}  Size: {item.size}</Text>
          </View>
          <View style={styles.qtyRow}>
            <Pressable onPress={() => decrease(item.id)} style={styles.qtyBtn} hitSlop={10}>
              <Text style={styles.qtyBtnText}>−</Text>
            </Pressable>
            <Text style={styles.qty}>{item.quantity}</Text>
            <Pressable onPress={() => increase(item.id)} style={styles.qtyBtn} hitSlop={10}>
              <Text style={styles.qtyBtnText}>+</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </SafeAreaView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    backgroundColor:'#f2f2f2'
  },
  header:{
    textAlign:'center',
    paddingVertical:12,
    fontWeight:'700',
    fontSize:18,
    backgroundColor:'#fff',
    borderBottomWidth:1,
    borderBottomColor:'#eee'
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    gap:12,
    padding:12,
    backgroundColor:'#fff',
    borderBottomWidth:1,
    borderBottomColor:'#eee'
  },
  image:{
    width:50,
    height:50,
    borderRadius:25,
    marginRight:8
  },
  name:{
    fontSize:16,
    fontWeight:'600',
    color:'#111'
  },
  sub:{
    color:'#666',
    marginTop:2
  },
  qtyRow:{
    flexDirection:'row',
    alignItems:'center',
    gap:8
  },
  qtyBtn:{
    width:24,
    height:24,
    borderRadius:12,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#ccc'
  },
  qtyBtnText:{
    fontSize:16,
    lineHeight:16
  },
  qty:{
    width:24,
    textAlign:'center'
  }
})