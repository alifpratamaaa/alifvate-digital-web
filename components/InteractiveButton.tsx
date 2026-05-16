
import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

interface InteractiveButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
}

export const InteractiveButton: React.FC<InteractiveButtonProps> = ({ 
  href, 
  children, 
  className = "", 
  icon,
  external = true
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('#')) return; // Let smooth scroll handle anchors
    
    setIsLoading(true);
    // Simulate a brief delay for visual feedback
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        icon
      )}
      <span>{isLoading ? 'Menghubungkan...' : children}</span>
    </>
  );

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className={`relative flex items-center justify-center gap-3 transition-all active:scale-95 ${isLoading ? "pointer-events-none opacity-80" : ""} ${className}`}
    >
      {content}
    </a>
  );
};
