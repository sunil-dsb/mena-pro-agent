"use client";

import { useRef, useEffect, memo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { CardProps } from "./types";

export const Card = memo<CardProps>(
  ({
    guide,
    index,
    isHovered,
    onHover,
    onLeave,
    randomRot,
    loaded,
    animationComplete,
  }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Smooth mouse following with Framer Motion
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });
    const tilt = useSpring(0, { stiffness: 100, damping: 15 });

    // Video Playback
    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      if (isHovered) {
        if (video.readyState >= 2) video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }, [isHovered]);

    // Mouse Movement
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
      tilt.set((x / rect.width - 0.5) * 60);
    };

    const transitionClass = !animationComplete
      ? "transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
      : isHovered
      ? "transition-all duration-400 ease-out"
      : "transition-all duration-300 ease-out";

    const staggerDelay = !animationComplete ? `${index * 100}ms` : "0ms";

    return (
      <motion.div
        ref={cardRef}
        onMouseEnter={() => onHover(guide.id)}
        onMouseLeave={onLeave}
        onMouseMove={handleMouseMove}
        className={`relative w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 lg:w-52 lg:h-64
         rounded-2xl overflow-visible
          border border-default shrink-0 will-change-transform ${transitionClass}
          ${
            !loaded
              ? "opacity-0 translate-y-32 scale-90 rotate-0"
              : "opacity-100 scale-100"
          }
          ${loaded && !isHovered ? guide.rotation : ""}
          ${index !== 0 ? "-ml-8 md:-ml-12 lg:-ml-14" : ""}`}
        style={{
          zIndex: isHovered ? 100 : index,
          transitionDelay: staggerDelay,
          transform: isHovered
            ? `rotate(${randomRot}deg) scale(1.20)`
            : undefined,
          boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)",
        }}
      >
        {/* Media Layer */}
        <div
          className={`w-full h-full relative group overflow-hidden rounded-2xl pointer-events-none border-4 transition-colors duration-300 ${
            isHovered ? "border-active" : "border-default"
          }`}
        >
          <img
            src={guide.image}
            alt={guide.name}
            className="w-full transition-transform duration-500"
          />
          <video
            ref={videoRef}
            src={guide.video}
            muted={true}
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity mix-blend-normal ${
              isHovered
                ? "opacity-100 duration-500 ease-out z-10"
                : "opacity-0 duration-0 z-0"
            }`}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Floating Label */}
        <motion.div
          className="absolute top-0 left-0 pointer-events-none z-[200]"
          style={{ x: smoothX, y: smoothY }}
        >
          <motion.div
            className={`bg-white text-gray-900 px-3 py-1.5 rounded-full shadow-xl text-xs font-bold whitespace-nowrap border border-gray-100 transition-opacity duration-200 ease-out ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ 
              x: "-50%", 
              y: "-50%",
              rotate: tilt
            }}
          >
            More about {guide.name}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";
