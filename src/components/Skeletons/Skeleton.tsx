import { cn } from "@/utils/cn";

function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-4 w-137.5 animate-pulse rounded-md bg-white/15",
        className,
      )}
    />
  );
}

export default Skeleton;
