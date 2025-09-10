import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CartProvider from "./providers/CartProvider";

export default function RootLayout() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  if (isAdmin === null) {
    return (
      <SafeAreaView style={styles.entrySafeArea}>
        <View style={styles.entryContainer}>
          <Pressable onPress={() => setIsAdmin(false)} style={styles.entryButton}>
            <Text style={styles.entryButtonText}>User</Text>
          </Pressable>
          <Pressable onPress={() => setIsAdmin(true)} style={styles.entryButton}>
            <Text style={styles.entryButtonText}>Admin</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <CartProvider>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isAdmin ? "#ffffff" : "#007AFF",
        tabBarInactiveTintColor: isAdmin ? "#ffffff" : "#8E8E93",
        tabBarStyle: {
          backgroundColor: isAdmin ? "dodgerblue" : "#ffff",
          borderTopWidth: isAdmin ? 0 : 1,
          borderTopColor: isAdmin ? "transparent" : "#E5E5EA",
          paddingBottom: 8,
          paddingTop: 8,
          height: 88,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Menu",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="[id]"
        options={{
          href: null, // Hide this tab from the tab bar
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          href: null, // Hide cart from the tab bar
        }}
      />
    </Tabs>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  entrySafeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  entryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 16,
  },
  entryButton: {
    width: '90%',
    backgroundColor: 'dodgerblue',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
  },
  entryButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
