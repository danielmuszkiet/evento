import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-36 px-3">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">Find events around you</h1>
      <p className="m-12 mt-7 text-2xl lg:text-3xl opacity-75 text-center">
        Browse more than{" "}
        <span className="font-bold italic underline text-[#a4f839]">10,000 events</span> around you
      </p>

      <form className="w-full sm:w-145">
        <input
          className="w-full h-16 bg-white/7 rounded-lg px-6 outline-none ring-[#a4f839]/50 transition focus:ring-2 focus:bg-white/10"
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
