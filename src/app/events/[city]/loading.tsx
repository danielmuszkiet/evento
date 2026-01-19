import SkeletonCard from "@/components/Skeletons/SkeletonCard";

function Loading() {
  return (
    <div className="mx-auto flex max-w-6xl flex-row flex-wrap items-center justify-center gap-20 pt-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}

export default Loading;
