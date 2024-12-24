"use client";

import { useTheme } from "../../hooks/useTheme";

interface ThemeProviderProps {
  children: React.ReactNode;
  poppinsClass: string;
}

export function ThemeProvider({ children, poppinsClass }: ThemeProviderProps) {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <body
      className={`${poppinsClass} ${
        theme === "dark"
          ? "bg-gray-950 text-gray-200"
          : "bg-gray-200 text-gray-950"
      }`}
    >
      {children}
    </body>
  );
}
