import { cn } from "@/lib/utils";

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassmorphicCard = ({ children, className }: GlassmorphicCardProps) => {
  return (
    <div
      className={cn(
        "backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
        "transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};
