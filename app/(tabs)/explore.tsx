// app/explore.tsx
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Explore() {
  const open = (url: string) => Linking.openURL(url);

  return (
    <ScrollView style={{ backgroundColor: "#f8fafc" }} contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Projects</Text>

        <Project
          title="TaskMate"
          blurb="To-do app with offline storage and dark mode."
          tags={["React Native", "Expo Router", "AsyncStorage"]}
          onPress={() => open("https://github.com/your-username/taskmate")}
        />
        <Project
          title="FitTrack"
          blurb="Fitness tracker with charts and weekly goals."
          tags={["TypeScript", "Expo"]}
          onPress={() => open("https://github.com/your-username/fittrack")}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <View style={styles.row}>
          <ActionButton label="Email" icon="mail" onPress={() => open("mailto:your.email@example.com")} />
          <ActionButton label="GitHub" icon="github" onPress={() => open("https://github.com/your-username")} />
          <ActionButton label="LinkedIn" icon="linkedin" onPress={() => open("https://www.linkedin.com/in/your-username")} />
        </View>
      </View>

      <View style={{ height: 24 }} />
    </ScrollView>
  );
}

function Project({
  title, blurb, tags, onPress,
}: { title: string; blurb: string; tags: string[]; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.projectCard}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Feather name="code" size={18} color="#0f172a" />
        <Text style={styles.projectTitle}>{title}</Text>
        <Feather name="arrow-up-right" size={16} color="#0f172a" />
      </View>
      <Text style={styles.projectDesc}>{blurb}</Text>
      <View style={styles.chips}>
        {tags.map((t) => (
          <View key={t} style={styles.chip}>
            <Text style={styles.chipText}>{t}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
}

function ActionButton({
  label, icon, onPress,
}: { label: string; icon: keyof typeof Feather.glyphMap; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.actionBtn} activeOpacity={0.85}>
      <Feather name={icon} size={18} color="#0f172a" />
      <Text style={styles.actionText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 20 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: 10, color: "#0f172a" },
  // actions
  row: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  actionBtn: { flexDirection: "row", alignItems: "center", paddingVertical: 8, paddingHorizontal: 12, borderRadius: 12, backgroundColor: "#f1f5f9", gap: 6 },
  actionText: { fontWeight: "600", color: "#0f172a" },
  // chips
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 8 },
  chip: { backgroundColor: "#eef2ff", paddingVertical: 6, paddingHorizontal: 10, borderRadius: 999 },
  chipText: { color: "#3730a3", fontWeight: "600" },
  // project
  projectCard: { backgroundColor: "#fff", borderRadius: 14, padding: 14, borderWidth: 1, borderColor: "#f1f5f9", marginBottom: 12 },
  projectTitle: { fontSize: 16, fontWeight: "800", color: "#0f172a" },
  projectDesc: { color: "#334155", marginTop: 6, lineHeight: 20 },
});
