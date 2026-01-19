import Skeleton from "@/components/Skeletons/Skeleton";

function Loading() {
  return (
    <div className="flex flex-col items-center gap-4 pt-28">
      <Skeleton className="h-4 w-137.5" />
      <Skeleton className="h-4 w-100" />
      <Skeleton className="h-4 w-100" />
    </div>
  );
}

export default Loading;
