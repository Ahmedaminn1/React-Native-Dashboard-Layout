import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import type { DashboardHeaderProps } from "./types/DashboardHeaderProps";
import { useTheme } from "@/context/ThemeContext";

export default function DashboardHeader({
  greeting = "Good Morning,",
  title = "Dashboard",
  avatarChar = "A",
}: DashboardHeaderProps) {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <View style={styles.header}>
      <View>
        <Text style={[styles.text1, { color: theme.subtext }]}>{greeting}</Text>
        <Text style={[styles.text2, { color: theme.text }]}>{title}</Text>
      </View>
      <View style={styles.rightGroup}>
        <TouchableOpacity onPress={toggleTheme} style={styles.toggleBtn}>
          <Text style={styles.toggleIcon}>{isDark ? "☀️" : "🌙"}</Text>
        </TouchableOpacity>
        <View style={[styles.avatar, { backgroundColor: theme.avatarBg }]}>
          <Text style={[styles.avatarText, { color: theme.avatarText }]}>
            {avatarChar}
          </Text>
        </View>
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
  },
  text2: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 4,
  },
  rightGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  toggleBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  toggleIcon: {
    fontSize: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 17,
  },
});
