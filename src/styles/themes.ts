export interface ThemeType {
  body: string;
  text: string;
  textAccent: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  cardBg: string;
  shadow: string;
  border: string;
  navBackground: string;
}

export const lightTheme: ThemeType = {
  body: "#FFFFFF",
  text: "#333333",
  textAccent: "#FFFFFF",
  primary: "#4361EE",
  secondary: "#3F37C9",
  accent: "#51badb",
  background: "#F8F9FA",
  cardBg: "#FFFFFF",
  shadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  border: "#E9ECEF",
  navBackground: "rgba(255, 255, 255, 0.95)", // Solid white for light theme navbar
};

export const darkTheme: ThemeType = {
  body: "#1A1A2E",
  text: "#F8F8F8",
  textAccent: "#FFFFFF",
  primary: "#4361EE",
  secondary: "#51badb",
  accent: "#0dd6cf",
  background: "#0F3460",
  cardBg: "#16213E",
  shadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
  border: "#1F2937",
  navBackground: "#rgba(22, 33, 62, 0.95)", // Darker shade for dark theme navbar
};