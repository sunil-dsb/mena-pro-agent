"use client";

import type { Guide } from "./types";
import { Card } from "./card";

interface CardGalleryProps {
  guides: Guide[];
  hoveredId: number | null;
  onHover: (id: number) => void;
  onLeave: () => void;
  randomRot: number;
  loaded: boolean;
  animationComplete: boolean;
}

export const CardGallery: React.FC<CardGalleryProps> = ({
  guides,
  hoveredId,
  onHover,
  onLeave,
  randomRot,
  loaded,
  animationComplete,
}) => {
  return (
    <div className="flex justify-start md:justify-center items-center px-4 w-full overflow-x-auto overflow-y-visible no-scrollbar py-12">
      {guides.map((guide, index) => (
        <Card
          key={guide.id}
          guide={guide}
          index={index}
          isHovered={hoveredId === guide.id}
          onHover={onHover}
          onLeave={onLeave}
          randomRot={randomRot}
          loaded={loaded}
          animationComplete={animationComplete}
        />
      ))}
      <div className="w-8 flex shrink-0 md:hidden"></div>
    </div>
  );
};
