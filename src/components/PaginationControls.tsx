import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const btnStyles =
  "flex items-center justify-center gap-1 rounded-md bg-white/5 px-5 py-3 text-sm text-white opacity-75 transition hover:opacity-100";

function PaginationControls({
  hasNextPage,
  hasPreviousPage,
  previousPath,
  nextPath,
}: {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  previousPath: string;
  nextPath: string;
}) {
  return (
    <section className="flex w-full justify-between">
      {hasPreviousPage && (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon /> Previous
        </Link>
      )}

      {hasNextPage && (
        <Link href={nextPath} className={`ml-auto ${btnStyles}`}>
          Next <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}

export default PaginationControls;
