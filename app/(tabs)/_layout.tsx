// app/_layout.tsx
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerTitleStyle: { fontWeight: "800", color: "#0f172a" },
          headerTintColor: "#0f172a",
          headerShadowVisible: false,
          tabBarStyle: { backgroundColor: "#ffffff", borderTopColor: "#e5e7eb", height: 54 },
          tabBarActiveTintColor: "#0f172a",
          tabBarInactiveTintColor: "#94a3b8",
          tabBarLabelStyle: { fontSize: 12 },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Fatlind Nebihi",
            tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color, size }) => <Feather name="send" color={color} size={size} />,
          }}
        />
      </Tabs>
    </>
  );
}
