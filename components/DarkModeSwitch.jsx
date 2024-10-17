"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
export const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdOutlineLightMode
            onClick={() => setTheme("light")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <MdOutlineDarkMode
            onClick={() => setTheme("dark")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ))}
    </div>
  );
};
