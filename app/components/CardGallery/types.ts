export interface Guide {
  id: number;
  name: string;
  image: string;
  video: string;
  rotation: string;
}

export interface CardProps {
  guide: Guide;
  index: number;
  isHovered: boolean;
  onHover: (id: number) => void;
  onLeave: () => void;
  randomRot: number;
  loaded: boolean;
  animationComplete: boolean;
}

export interface PhysicsState {
  targetX: number;
  targetY: number;
  currentX: number;
  currentY: number;
  targetTilt: number;
  currentTilt: number;
}
