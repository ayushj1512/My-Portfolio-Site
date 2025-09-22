"use client";

import { useState } from "react";
import SplashCursor from "./SplashCursor";

export default function ToggleCursor() {
  // Disabled by default
  const [cursorEnabled, setCursorEnabled] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <button
          onClick={() => setCursorEnabled(!cursorEnabled)}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500
                     text-white font-bold rounded-2xl shadow-[0_0_15px_rgba(255,0,255,0.6)]
                     hover:shadow-[0_0_25px_rgba(255,0,255,0.9)] hover:scale-110 
                     transition-all duration-500 ease-in-out
                     animate-gradient-x"
        >
          {cursorEnabled ? "Disable Cursor" : "Enable Cursor"}
        </button>
      </div>

      {/* Conditionally render SplashCursor */}
      {cursorEnabled && <SplashCursor />}
    </>
  );
}
