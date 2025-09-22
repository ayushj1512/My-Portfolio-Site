"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const LetterGlitch = ({
  glitchColors = ["#7C3AED", "#9F67FF", "#5B21B6"], // Purple + matching shades
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789",
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const letters = useRef([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef(null);
  const lastGlitchTime = useRef(Date.now());
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const lettersAndSymbols = Array.from(characters);
  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;

  const getRandomChar = () =>
    lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];

  const getRandomColor = () =>
    glitchColors[Math.floor(Math.random() * glitchColors.length)];

  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const interpolateColor = (start, end, factor) => {
    const result = {
      r: Math.round(start.r + (end.r - start.r) * factor),
      g: Math.round(start.g + (end.g - start.g) * factor),
      b: Math.round(start.b + (end.b - start.b) * factor),
    };
    return `rgb(${result.r}, ${result.g}, ${result.b})`;
  };

  const calculateGrid = (width, height) => {
    const columns = Math.ceil(width / charWidth);
    const rows = Math.ceil(height / charHeight);
    return { columns, rows };
  };

  const initializeLetters = (columns, rows) => {
    grid.current = { columns, rows };
    const totalLetters = columns * rows;
    letters.current = Array.from({ length: totalLetters }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1,
    }));
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    if (context.current) {
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const { columns, rows } = calculateGrid(rect.width, rect.height);
    initializeLetters(columns, rows);

    drawLetters();
  };

 const drawLetters = () => {
  if (!context.current || !canvasRef.current || letters.current.length === 0) return;
  const ctx = context.current;
  const canvasRect = canvasRef.current.getBoundingClientRect();
  if (!canvasRect) return; // extra safety

  const { width, height } = canvasRect;
  ctx.clearRect(0, 0, width, height);
  ctx.font = `${fontSize}px monospace`;
  ctx.textBaseline = "top";

  letters.current.forEach((letter, index) => {
    const x = (index % grid.current.columns) * charWidth;
    const y = Math.floor(index / grid.current.columns) * charHeight;
    ctx.fillStyle = letter.color;
    ctx.fillText(letter.char, x, y);
  });
};


  const updateLetters = () => {
    if (!letters.current || letters.current.length === 0) return;

    const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05));

    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * letters.current.length);
      if (!letters.current[index]) continue;

      letters.current[index].char = getRandomChar();
      letters.current[index].targetColor = getRandomColor();

      if (!smooth) {
        letters.current[index].color = letters.current[index].targetColor;
        letters.current[index].colorProgress = 1;
      } else {
        letters.current[index].colorProgress = 0;
      }
    }
  };

  const handleSmoothTransitions = () => {
    let needsRedraw = false;
    letters.current.forEach((letter) => {
      if (letter.colorProgress < 1) {
        letter.colorProgress += 0.05;
        if (letter.colorProgress > 1) letter.colorProgress = 1;

        const startRgb = hexToRgb(letter.color);
        const endRgb = hexToRgb(letter.targetColor);
        if (startRgb && endRgb) {
          letter.color = interpolateColor(
            startRgb,
            endRgb,
            letter.colorProgress
          );
          needsRedraw = true;
        }
      }
    });

    if (needsRedraw) {
      drawLetters();
    }
  };

  const animate = () => {
    const now = Date.now();
    if (now - lastGlitchTime.current >= glitchSpeed) {
      updateLetters();
      drawLetters();
      lastGlitchTime.current = now;
    }

    if (smooth) {
      handleSmoothTransitions();
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    context.current = canvas.getContext("2d");
    resizeCanvas();
    animate();

    let resizeTimeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        cancelAnimationFrame(animationRef.current);
        resizeCanvas();
        animate();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [glitchSpeed, smooth]);

  // Progress bar simulation + redirect
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((p) => Math.min(p + 1, 100));
      }, 50);
      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => {
        router.push("/home");
      }, 800); // small delay after 100%
      return () => clearTimeout(timeout);
    }
  }, [progress, router]);

  return (
    <div className="relative w-full h-screen bg-black flex flex-col justify-center items-center overflow-hidden text-center px-4">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* Overlay text and loader */}
      <div className="z-10 flex flex-col items-center">
        {/* Heading */}
       <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg">
  Loading Ayush’s World...
</h1>

{/* Subheading */}
<p className="text-white text-base sm:text-lg md:text-2xl font-semibold opacity-90 mb-8 animate-pulse">
  WHERE <span className="text-white">CODE</span> MEETS{" "}
  <span className="text-white">DESIGN</span>
</p>



        {/* Progress Bar */}
        <div className="w-64 sm:w-80 md:w-96 h-4 bg-white/20 rounded-full overflow-hidden shadow-lg">
          <div
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-gray-300 mt-4 text-sm sm:text-base font-semibold tracking-wide">
          {progress}%
        </p>
      </div>

      
    </div>
  );
};

export default LetterGlitch;
