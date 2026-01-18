import H1 from "@/_components/H1";
import SearchForm from "@/_components/SearchForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-3 pt-36">
      <H1>Find events around you</H1>
      <p className="m-12 mt-7 text-center text-2xl opacity-75 lg:text-3xl">
        Browse more than{" "}
        <span className="font-bold text-accent italic underline">
          10,000 events
        </span>{" "}
        around you
      </p>

      <SearchForm />

      <section className="mt-6 flex gap-3 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
