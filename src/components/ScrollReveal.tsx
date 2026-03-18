import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className, delay = 0 }: Props) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 translate-y-8 scale-[0.985] transition-all duration-700 ease-out will-change-transform",
        isVisible && "opacity-100 translate-y-0 scale-100",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
