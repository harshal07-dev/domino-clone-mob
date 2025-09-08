import { Link, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProductDemo = () => {
  const  { id } = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Link href={'/'} asChild>
          <Pressable style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </Pressable>
        </Link>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Product Details for id: {id}</Text>
      </View>
    </SafeAreaView>
  )
}

export default ProductDemo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    // backgroundColor: '#f8f9fa',
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: 'orange',
    color: '#000',
    borderRadius: 20,
    width: 80,
    height: 45,
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 45,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
})