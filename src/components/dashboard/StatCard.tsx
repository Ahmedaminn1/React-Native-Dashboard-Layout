import { View, Text, StyleSheet } from "react-native";
import type { StatCardProps } from "./types/StatCardProps";
import { useTheme } from "@/context/ThemeContext";

export default function StatCard({ stat }: StatCardProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <View style={[styles.dot, { backgroundColor: stat.color }]} />
      <Text style={[styles.value, { color: theme.text }]}>{stat.value}</Text>
      <Text style={[styles.label, { color: theme.subtext }]}>{stat.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    minHeight: 100,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginBottom: 18,
  },
  value: {
    fontSize: 20,
    fontWeight: "800",
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 4,
  },
});
