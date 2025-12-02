"use client";

import { useRef, useEffect, memo, useCallback } from "react";
import type { CardProps, PhysicsState } from "./types";
import { lerp } from "./utils";

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
    const labelContainerRef = useRef<HTMLDivElement>(null);
    const labelBubbleRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number | null>(null);

    // Physics State
    const physics = useRef<PhysicsState>({
      targetX: 0,
      targetY: 0,
      currentX: 0,
      currentY: 0,
      targetTilt: 0,
      currentTilt: 0,
    });

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
    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        physics.current.targetX = x;
        physics.current.targetY = y;
        physics.current.targetTilt = (x / rect.width - 0.5) * 60;
      },
      []
    );

    // Animation Loop
    const animate = useCallback(() => {
      if (!labelContainerRef.current || !labelBubbleRef.current) return;

      physics.current.currentX = lerp(
        physics.current.currentX,
        physics.current.targetX,
        0.12
      );
      physics.current.currentY = lerp(
        physics.current.currentY,
        physics.current.targetY,
        0.12
      );
      physics.current.currentTilt = lerp(
        physics.current.currentTilt,
        physics.current.targetTilt,
        0.08
      );

      labelContainerRef.current.style.transform = `translate3d(${physics.current.currentX}px, ${physics.current.currentY}px, 0)`;
      labelBubbleRef.current.style.transform = `translate(-50%, -50%) rotate(${physics.current.currentTilt}deg)`;

      requestRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
      if (isHovered) requestRef.current = requestAnimationFrame(animate);
      return () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
      };
    }, [isHovered, animate]);

    const transitionClass = !animationComplete
      ? "transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
      : isHovered
      ? "transition-all duration-400 ease-out"
      : "transition-all duration-300 ease-out";

    const staggerDelay = !animationComplete ? `${index * 100}ms` : "0ms";

    return (
      <div
        ref={cardRef}
        onMouseEnter={() => onHover(guide.id)}
        onMouseLeave={onLeave}
        onMouseMove={handleMouseMove}
        className={`relative w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 lg:w-52 lg:h-64
         rounded-2xl overflow-visible
          border border-[#d1d5db] cursor-none shrink-0 will-change-transform ${transitionClass}
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
            isHovered ? "border-[#3ca4f7]" : "border-[#d1d5db]"
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
        <div
          ref={labelContainerRef}
          className="absolute top-0 left-0 pointer-events-none z-[200] will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          <div
            ref={labelBubbleRef}
            className={`bg-white text-gray-900 px-3 py-1.5 rounded-full shadow-xl text-xs font-bold whitespace-nowrap border border-gray-100 transition-opacity duration-200 ease-out ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ transform: "translate(-50%, -50%)" }}
          >
            More about {guide.name}
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";
