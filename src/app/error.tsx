"use client"; // Error boundaries must be Client Components

import H1 from "@/components/H1";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="py-24 text-center">
      <H1 className="mb-15">Something went wrong!</H1>
      <button
        className="cursor-pointer rounded bg-white/15 px-4 py-2 text-white hover:bg-white/20"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
