import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
  clickable = false,
  onClick,
}) => {
  const baseClasses = "bg-white dark:bg-gray-800 rounded-2xl shadow-lg";
  const hoverClasses = hover
    ? "hover:shadow-xl transition-all duration-300"
    : "";
  const clickableClasses = clickable
    ? "cursor-pointer transform hover:-translate-y-1"
    : "";

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
