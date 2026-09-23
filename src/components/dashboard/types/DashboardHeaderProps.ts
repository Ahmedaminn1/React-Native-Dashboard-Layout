export interface DashboardHeaderProps {
  greeting?: string;
  title?: string;
  /** Single character shown in the avatar circle */
  avatarChar?: string;
  isDark?: boolean;
  onToggleTheme?: () => void;
}
