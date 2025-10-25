// app/index.tsx
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AVATAR = require("../../assets/images/FN.jpg");



export default function Home() {
  return (
    <ScrollView
      style={{ backgroundColor: "#f8fafc" }}
      contentContainerStyle={styles.container}
    >
      {/* Header / Identity */}
      <View style={styles.card}>
        <Image source={AVATAR} style={styles.avatar} />
        <Text style={styles.name}>Fatlind Nebihi</Text>
        <Text style={styles.sub}>Computer Science • 3rd Year</Text>

        <View style={styles.row}>
          <ActionButton label="Gmail" icon="mail" onPress={() => Linking.openURL("mailto:fatlind.nebihi@umib.net")} />
          <ActionButton label="Instagram" icon="instagram" onPress={() => Linking.openURL("https://www.instagram.com/fatlindnebihi")} />
         </View>
      </View>

      {/* Skills */}
      <View style={styles.card}>
        <SectionTitle>Skills</SectionTitle>
        <View style={styles.chips}>
          <Chip>Html</Chip><Chip>Css</Chip><Chip>Python</Chip>
          <Chip>CS Player</Chip>
        </View>
      </View>

      {/* Highlights */}
      <View style={styles.card}>
        <SectionTitle>Highlights</SectionTitle>
        <Bullet>Built a cross-platform app with Expo Router</Bullet>
        <Bullet>Responsive layouts & reusable components</Bullet>
        <Bullet>Clean Git workflow & code reviews (PRs)</Bullet>
      </View>
    </ScrollView>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.chip}>
      <Text style={styles.chipText}>{children}</Text>
    </View>
  );
}
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.bulletRow}>
      <Feather name="check-circle" size={18} color="#16a34a" />
      <Text style={styles.bulletText}>{children}</Text>
    </View>
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
  container: { 
    padding: 20, 
    gap: 20 
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 12,
    borderWidth: 3,
    borderColor: "#e2e8f0",   // soft border
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },

  name: { 
    fontSize: 24, 
    fontWeight: "800", 
    textAlign: "center", 
    color: "#0f172a" 
  },

  sub: { 
    fontSize: 14, 
    color: "#64748b", 
    textAlign: "center", 
    marginTop: 4, 
    marginBottom: 8 
  },

  row: { 
    flexDirection: "row", 
    justifyContent: "center", 
    gap: 10, 
    marginTop: 8, 
    flexWrap: "wrap" 
  },

  actionBtn: { 
    flexDirection: "row", 
    alignItems: "center", 
    paddingVertical: 8, 
    paddingHorizontal: 12, 
    borderRadius: 12, 
    backgroundColor: "#f1f5f9", 
    gap: 6 
  },

  actionText: { 
    fontWeight: "600", 
    color: "#0f172a" 
  },

  sectionTitle: { 
    fontSize: 18, 
    fontWeight: "700", 
    marginBottom: 8, 
    color: "#0f172a" 
  },

  chips: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    gap: 8 
  },

  chip: { 
    backgroundColor: "#eef2ff", 
    paddingVertical: 6, 
    paddingHorizontal: 10, 
    borderRadius: 999 
  },

  chipText: { 
    color: "#3730a3", 
    fontWeight: "600" 
  },

  bulletRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 8, 
    marginBottom: 8 
  },

  bulletText: { 
    color: "#334155", 
    fontSize: 15, 
    flexShrink: 1 
  },
});




