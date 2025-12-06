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
  className="
    px-5 py-3
    bg-purple-600 text-white font-semibold
    rounded-2xl
    shadow-lg shadow-purple-600/30
    hover:bg-purple-500 hover:shadow-purple-500/40 hover:-translate-y-0.5
    active:translate-y-0 active:bg-purple-700
    transition-all duration-300
    focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-400/40
  "
>
  {cursorEnabled ? "Disable Cursor" : "Enable Cursor"}
</button>

      </div>

      {/* Conditionally render SplashCursor */}
      {cursorEnabled && <SplashCursor />}
    </>
  );
}
