import { View, Text, StyleSheet } from "react-native";
import type { DashboardHeaderProps } from "./types/DashboardHeaderProps";

export default function DashboardHeader({
  greeting = "Good Morning,",
  title = "Dashboard",
  avatarChar = "A",
}: DashboardHeaderProps) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.text1}>{greeting}</Text>
        <Text style={styles.text2}>{title}</Text>
      </View>
      <View style={styles.headerRight}>
        <Text style={styles.headerRightText}>{avatarChar}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 12,
    fontWeight: "500",
    color: "#64748b",
  },
  text2: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 4,
  },
  headerRight: {
    width: 48,
    height: 48,
    borderRadius: 20,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "center",
  },
  headerRightText: {
    color: "#fff",
    fontSize: 17,
  },
});
