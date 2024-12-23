"use client";

import { useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  console.log(theme);

  return { theme, toggleTheme };
}
