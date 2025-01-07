import React from "react";
import { useTheme } from "../../contexts/themeContext.tsx";

const BackgroundGrid = ({
  className = "",
  id = "fadeGradient",
  marginTop = 28,
  height = "100%-7rem",
  startOffset = 0,
  midStartOffset = 35,
  midEndOffset = 65,
  endOffset = 100,
  darkColor = "text-gray-700",
  lightColor = "text-gray-300",
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={`mt-${marginTop} absolute inset-0 w-full h-[calc(${height})] ${className}`}
    >
      <div className="absolute inset-0 w-full h-full">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeDasharray="4 4"
                className={`${
                  theme === "dark" ? `${darkColor}` : `${lightColor}`
                }`}
              />
            </pattern>

            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop
                offset={`${startOffset}%`}
                stopColor="white"
                stopOpacity="0"
              />
              <stop
                offset={`${midStartOffset}%`}
                stopColor="white"
                stopOpacity="0.5"
              />
              <stop
                offset={`${midEndOffset}%`}
                stopColor="white"
                stopOpacity="0.5"
              />
              <stop
                offset={`${endOffset}%`}
                stopColor="white"
                stopOpacity="0"
              />
            </linearGradient>

            <mask id="fadeMask">
              <rect width="100%" height="100%" fill={`url(#${id})`} />
            </mask>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            mask="url(#fadeMask)"
          />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundGrid;
