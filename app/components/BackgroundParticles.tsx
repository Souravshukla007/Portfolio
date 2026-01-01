"use client";
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import Particles from '../Animations/Particles';

const BackgroundParticles: React.FC = () => {
  const context = useContext(ThemeContext);

  // Don't render anything if context is not available (during SSR)
  if (!context) {
    return null;
  }

  const { theme } = context as { theme: string; toggleTheme: () => void };

  // For light mode, use gradient background instead of particles
  if (theme === 'light') {
    return (
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0">
          <div className="relative h-full w-full [&>div]:absolute [&>div]:bottom-0 [&>div]:right-0 [&>div]:z-[-2] [&>div]:h-full [&>div]:w-full [&>div]:bg-gradient-to-b [&>div]:from-blue-400 [&>div]:to-white">
            <div></div>
          </div>
        </div>
      </div>
    );
  }

  // Use different colors based on theme for dark mode particles
  const particleColors = ['#ffffff', '#ffffff'];

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        particleColors={particleColors}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

export default BackgroundParticles;
