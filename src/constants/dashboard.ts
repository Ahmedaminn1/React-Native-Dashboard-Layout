// ─── Types ────────────────────────────────────────────────────────────────────

export interface Stat {
  label: string;
  value: string;
  color: string;
}

export interface Insight {
  title: string;
  subtitle: string;
  badge: string;
  content: string;
  progressText: string;
  /** 0 – 100 */
  progressValue: number;
}

export type BadgeColor = { bg: string; text: string };

// ─── Data ─────────────────────────────────────────────────────────────────────

export const stats: Stat[] = [
  { label: "Balance", value: "$12.8k", color: "#2563eb" },
  { label: "Tasks",   value: "24",     color: "#10b981" },
  { label: "Growth",  value: "+18%",   color: "#f59e0b" },
];

export const insightData: Insight[] = [
  {
    title: "Today",
    subtitle: "Real Layout Example",
    badge: "Live",
    content: "A clean screen made from a header, quick stat bar and an info section for today.",
    progressText: "Weekly Progress",
    progressValue: 72,
  },
  {
    title: "Tomorrow",
    subtitle: "Next Schedule",
    badge: "Soon",
    content: "Starting the day with focus mode and a quick review of the goals.",
    progressText: "Next Up",
    progressValue: 50,
  },
  {
    title: "Day After",
    subtitle: "Key Highlights",
    badge: "Overdue",
    content: "Catching up on pending tasks and preparing for the week ahead.",
    progressText: "Status",
    progressValue: 45,
  },
  {
    title: "Upcoming Week",
    subtitle: "Overview",
    badge: "upcoming",
    content: "Preparing the main presentation for the review meeting.",
    progressText: "Priority",
    progressValue: 90,
  },
];

export const badgeColors: Record<string, BadgeColor> = {
  Live:     { bg: "#dcfce7", text: "#015803" },
  Soon:     { bg: "#dbeafe", text: "#1e40af" },
  Overdue:  { bg: "#fee2e2", text: "#991b1b" },
  upcoming: { bg: "#fef3c7", text: "#92400e" },
};
