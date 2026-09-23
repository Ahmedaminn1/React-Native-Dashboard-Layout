import { View, Text, StyleSheet } from "react-native";
import type { InsightCardProps } from "./types/InsightCardProps";
import { badgeColors } from "@/constants/dashboard";
import { useTheme } from "@/context/ThemeContext";

export default function InsightCard({ insight }: InsightCardProps) {
  const { theme } = useTheme();
  const badge = badgeColors[insight.badge] ?? { bg: "#e5e7eb", text: "#374151" };

  return (
    <View style={[styles.container, { backgroundColor: theme.card }]}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={[styles.title, { color: theme.accent }]}>{insight.title}</Text>
          <Text style={[styles.subtitle, { color: theme.text }]}>{insight.subtitle}</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: badge.bg }]}>
          <Text style={[styles.badgeText, { color: badge.text }]}>
            {insight.badge}
          </Text>
        </View>
      </View>

      {/* Content */}
      <Text style={[styles.content, { color: theme.subtext }]}>{insight.content}</Text>

      {/* Progress bar */}
      <View style={[styles.progressTrack, { backgroundColor: theme.progressTrack }]}>
        <View
          style={[
            styles.progressFill,
            { width: `${insight.progressValue}%`, backgroundColor: theme.progressFill },
          ]}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={[styles.footerLabel, { color: theme.text }]}>{insight.progressText}</Text>
        <Text style={[styles.footerValue, { color: theme.accent }]}>{insight.progressValue}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
    minHeight: 170,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 7,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 80,
  },
  badgeText: {
    fontWeight: "900",
    fontSize: 12,
  },
  content: {
    fontSize: 13,
    marginTop: 8,
    fontWeight: "500",
  },
  progressTrack: {
    borderRadius: 99,
    height: 12,
    marginTop: 18,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 99,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  footerLabel: {
    fontSize: 13,
    fontWeight: "600",
  },
  footerValue: {
    fontSize: 13,
    fontWeight: "600",
  },
});
