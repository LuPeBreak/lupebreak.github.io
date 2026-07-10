import React, { useEffect, useRef } from "react";

/**
 * StarField — canvas fullscreen de estrelas com parallax do mouse.
 * Leve, performático, pointer-events:none para não bloquear cliques.
 */
export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const STAR_COUNT = Math.min(180, Math.floor((width * height) / 8000));
    const stars = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      const colorRoll = Math.random();
      let color;
      if (colorRoll < 0.7) color = "255, 255, 255";
      else if (colorRoll < 0.85) color = "124, 58, 237";
      else color = "6, 182, 212";

      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.8 + 0.2,
        radius: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        color: color,
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    const handleMouse = (e) => {
      mouseX = (e.clientX / width - 0.5) * 2;
      mouseY = (e.clientY / height - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    const shootingStars = [];
    function spawnShootingStar() {
      if (Math.random() > 0.995 && shootingStars.length < 2) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.4),
          vx: Math.random() * 4 + 3,
          vy: Math.random() * 2 + 1,
          life: 1,
          trail: [],
        });
      }
    }

    let animationId;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = (Math.sin(star.twinklePhase) + 1) / 2;
        const currentOpacity = star.opacity * (0.4 + twinkle * 0.6);

        const parallaxX = star.x + mouseX * 20 * star.z;
        const parallaxY = star.y + mouseY * 20 * star.z;

        ctx.beginPath();
        ctx.arc(parallaxX, parallaxY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${currentOpacity})`;
        ctx.fill();

        if (star.radius > 1) {
          ctx.beginPath();
          ctx.arc(parallaxX, parallaxY, star.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${star.color}, ${currentOpacity * 0.15})`;
          ctx.fill();
        }
      });

      spawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.trail.push({ x: s.x, y: s.y });
        if (s.trail.length > 15) s.trail.shift();

        s.trail.forEach((t, idx) => {
          const trailOpacity = (idx / s.trail.length) * s.life * 0.6;
          ctx.beginPath();
          ctx.arc(t.x, t.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${trailOpacity})`;
          ctx.fill();
        });

        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.life})`;
        ctx.fill();

        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.01;

        if (s.life <= 0 || s.x > width || s.y > height) {
          shootingStars.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
      style={{
        zIndex: 0,
        position: "fixed",
        pointerEvents: "none",
      }}
    />
  );
}
