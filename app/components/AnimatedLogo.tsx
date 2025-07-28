'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Pre-defined animation sets for common use cases
export const ANIMATION_SETS = {
  ERROR_FRAMES: [
    "/images/components/error/frame1.svg",
    "/images/components/error/frame2.svg",
    "/images/components/error/frame3.svg"
  ],
  // Add more sets here in the future, for example:
  // LOADING_FRAMES: ["/images/loading/frame1.svg", "/images/loading/frame2.svg"],
  // SUCCESS_FRAMES: ["/images/success/frame1.svg", "/images/success/frame2.svg"],
} as const;

interface AnimatedLogoProps {
  frames: readonly string[] | string[]; // Array of image paths (allow both mutable and readonly)
  width?: number;
  height?: number;
  className?: string;
  interval?: number; // Animation speed in milliseconds
  alt?: string; // Alt text for accessibility
}

const AnimatedLogo = ({ 
  frames,
  width = 100, 
  height = 100, 
  className = "", 
  interval = 500,
  alt = "Animated Image"
}: AnimatedLogoProps) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    // Only run the interval if frames exist and are not empty
    if (!frames || frames.length === 0) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, frames]);

  // Validate that frames array is not empty
  if (!frames || frames.length === 0) {
    console.warn('AnimatedLogo: No frames provided');
    return null;
  }

  return (
    <Image
      src={frames[currentFrame]}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
};

export default AnimatedLogo;
