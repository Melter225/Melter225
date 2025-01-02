"use client";
import { useTheme } from "../../contexts/themeContext.tsx";

interface ThemeProviderProps {
  children: React.ReactNode;
  poppinsClass: string;
}

export function ThemeLayoutProvider({
  children,
  poppinsClass,
}: ThemeProviderProps) {
  const { theme } = useTheme();

  return (
    <body
      className={`${poppinsClass} ${
        theme === "dark"
          ? "bg-gray-950 text-gray-50"
          : "bg-gray-50 text-gray-950"
      }`}
    >
      {children}
    </body>
  );
}
