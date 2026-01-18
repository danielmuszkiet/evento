import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-3 pt-36">
      <h1 className="text-3xl font-bold tracking-tight lg:text-6xl">
        Find events around you
      </h1>
      <p className="m-12 mt-7 text-center text-2xl opacity-75 lg:text-3xl">
        Browse more than{" "}
        <span className="font-bold text-accent italic underline">
          10,000 events
        </span>{" "}
        around you
      </p>

      <form className="w-full sm:w-145">
        <input
          className="h-16 w-full rounded-lg bg-white/7 px-6 ring-accent/50 transition outline-none focus:bg-white/10 focus:ring-2"
          type="text"
          placeholder="Search events in any city..."
          spellCheck={false}
        />
      </form>

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
