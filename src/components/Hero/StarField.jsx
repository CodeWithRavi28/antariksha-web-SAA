import React, { useEffect, useRef } from 'react';

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let stars = [];
    const numStars = 160;
    
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.3 + 0.3,
          opacity: Math.random() * 0.8 + 0.2,
          speed: (Math.random() * 0.012 + 0.003) * (prefersReducedMotion ? 0 : 1),
          factor: Math.random() > 0.5 ? 1 : -1,
          driftX: (Math.random() * 0.04 - 0.02) * (prefersReducedMotion ? 0 : 1),
          driftY: (Math.random() * 0.04 - 0.02) * (prefersReducedMotion ? 0 : 1)
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        
        if (!prefersReducedMotion) {
          // Twinkle effect
          star.opacity += star.speed * star.factor;
          if (star.opacity > 0.95 || star.opacity < 0.15) {
            star.factor = -star.factor;
          }
          
          // Drift effect
          star.x += star.driftX;
          star.y += star.driftY;
          
          // Warp boundary conditions
          if (star.x < 0) star.x = canvas.width;
          if (star.x > canvas.width) star.x = 0;
          if (star.y < 0) star.y = canvas.height;
          if (star.y > canvas.height) star.y = 0;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(248, 250, 252, ${star.opacity})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
