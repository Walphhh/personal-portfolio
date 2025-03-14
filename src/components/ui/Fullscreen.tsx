import { ReactNode } from "react";

interface FullscreenProps {
  children: ReactNode;
  className?: string;
}

const Fullscreen = ({ children, className }: FullscreenProps) => {
  return <div className={`w-full min-h-dvh ${className}`}>{children}</div>;
};

export default Fullscreen;
