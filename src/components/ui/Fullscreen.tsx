import { ReactNode } from "react";

interface FullscreenProps {
  children: ReactNode;
  className?: string;
}

const Fullscreen = ({ children, className }: FullscreenProps) => {
  return (
    <div className={`w-screen min-h-[calc(100vh-4rem)] ${className}`}>
      {children}
    </div>
  );
};

export default Fullscreen;
