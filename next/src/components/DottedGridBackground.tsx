import clsx from "clsx";
import React from "react";

interface DottedGridBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const DottedGridBackground = ({ children, className, backgroundColor }: DottedGridBackgroundProps) => {
  const backgroundStyle = {
    background: backgroundColor, // Colore di sfondo desiderato
  };

  return (
    <div className={clsx(className)} style={backgroundStyle}>
      {children}
    </div>
  );
};
export default DottedGridBackground;
