import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "card-elegant p-6",
        hover && "cursor-default",
        className
      )}
    >
      {children}
    </div>
  );
}
