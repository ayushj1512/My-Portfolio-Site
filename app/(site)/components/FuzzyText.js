import React, { useEffect, useRef } from 'react';

const FuzzyText = ({
  children,
  fontSize = 'clamp(2rem, 10vw, 10rem)',
  fontWeight = 900,
  fontFamily = 'inherit',
  color = '#8C70D4', // accent color default
  enableHover = true,
  baseIntensity = 0.18,
  hoverIntensity = 0.5
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let isCancelled = false;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const init = async () => {
      if (document.fonts?.ready) await document.fonts.ready;
      if (isCancelled) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const computedFontFamily =
        fontFamily === 'inherit' ? window.getComputedStyle(canvas).fontFamily || 'sans-serif' : fontFamily;

      const fontSizeStr = typeof fontSize === 'number' ? `${fontSize}px` : fontSize;
      let numericFontSize;
      if (typeof fontSize === 'number') numericFontSize = fontSize;
      else {
        const temp = document.createElement('span');
        temp.style.fontSize = fontSize;
        document.body.appendChild(temp);
        numericFontSize = parseFloat(window.getComputedStyle(temp).fontSize);
        document.body.removeChild(temp);
      }

      const text = React.Children.toArray(children).join('');

      const offscreen = document.createElement('canvas');
      const offCtx = offscreen.getContext('2d');
      if (!offCtx) return;

      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = 'alphabetic';
      const metrics = offCtx.measureText(text);

      const textWidth = metrics.width;
      const textHeight = numericFontSize;

      offscreen.width = Math.ceil(textWidth);
      offscreen.height = Math.ceil(textHeight);

      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = 'alphabetic';
      offCtx.fillStyle = color;
      offCtx.fillText(text, 0, textHeight * 0.8); // approximate baseline

      // Set canvas size with extra margin for fuzz effect
      const horizontalMargin = 20;
      const verticalMargin = 0;
      canvas.width = offscreen.width + horizontalMargin * 2;
      canvas.height = offscreen.height + verticalMargin * 2;
      ctx.translate(horizontalMargin, verticalMargin);

      // Center horizontally
      const dxCenter = (canvas.width - offscreen.width) / 2;

      let isHovering = false;
      const fuzzRange = 30;

      const run = () => {
        if (isCancelled) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const intensity = isHovering ? hoverIntensity : baseIntensity;
        for (let j = 0; j < offscreen.height; j++) {
          const dx = dxCenter + Math.floor(intensity * (Math.random() - 0.5) * fuzzRange);
          ctx.drawImage(offscreen, 0, j, offscreen.width, 1, dx, j, offscreen.width, 1);
        }
        animationFrameId = window.requestAnimationFrame(run);
      };

      run();

      const isInsideTextArea = (x, y) =>
        x >= dxCenter && x <= dxCenter + offscreen.width && y >= 0 && y <= offscreen.height;

      const handleMouseMove = e => {
        if (!enableHover) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };

      const handleMouseLeave = () => (isHovering = false);
      const handleTouchMove = e => {
        if (!enableHover) return;
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };
      const handleTouchEnd = () => (isHovering = false);

      if (enableHover) {
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
        canvas.addEventListener('touchend', handleTouchEnd);
      }

      const cleanup = () => {
        window.cancelAnimationFrame(animationFrameId);
        if (enableHover) {
          canvas.removeEventListener('mousemove', handleMouseMove);
          canvas.removeEventListener('mouseleave', handleMouseLeave);
          canvas.removeEventListener('touchmove', handleTouchMove);
          canvas.removeEventListener('touchend', handleTouchEnd);
        }
      };

      canvas.cleanupFuzzyText = cleanup;
    };

    init();

    return () => {
      isCancelled = true;
      window.cancelAnimationFrame(animationFrameId);
      if (canvas && canvas.cleanupFuzzyText) canvas.cleanupFuzzyText();
    };
  }, [children, fontSize, fontWeight, fontFamily, color, enableHover, baseIntensity, hoverIntensity]);

  return (
    <div className="w-full flex justify-center">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default FuzzyText;
