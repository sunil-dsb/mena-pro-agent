"use client";

import { useState, useEffect, useCallback } from "react";
import { guides } from "./data";
import { CardGallery } from "./card-gallery";

export default function CardGalleryWrapper() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [randomRot, setRandomRot] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLoaded(true), 100);
    const t2 = setTimeout(() => setAnimationComplete(true), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleHover = useCallback((id: number) => {
    setHoveredId(id);
    setRandomRot((Math.random() - 0.5) * 6);
  }, []);

  const handleLeave = useCallback(() => {
    setHoveredId(null);
    setRandomRot(0);
  }, []);

  return (
    <div className="w-full">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <CardGallery
        guides={guides}
        hoveredId={hoveredId}
        onHover={handleHover}
        onLeave={handleLeave}
        randomRot={randomRot}
        loaded={loaded}
        animationComplete={animationComplete}
      />
    </div>
  );
}
