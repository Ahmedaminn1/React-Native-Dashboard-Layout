import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { stats, insightData } from "@/constants/dashboard";
import { useTheme } from "@/context/ThemeContext";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import InsightCard from "@/components/dashboard/InsightCard";

export default function index() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: theme.bg }]}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header Section */}
        <DashboardHeader
          greeting="Good Morning,"
          title="Dashboard"
          avatarChar="A"
        />

        {/* Stats Section */}
        <View style={styles.statsRow}>
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </View>

        {/* Insights Section */}
        {insightData.map((insight, index) => (
          <InsightCard key={index} insight={insight} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
    gap: 16,
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
  },
});
