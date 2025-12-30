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

  // Use different colors based on theme
  const particleColors = theme === 'dark' ? ['#ffffff', '#ffffff'] : ['#001F3D', '#001F3D'];

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        particleColors={particleColors}
        particleCount={150}
        particleSpread={8}
        speed={0.05}
        particleBaseSize={50}
        cameraDistance={15}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

export default BackgroundParticles;
