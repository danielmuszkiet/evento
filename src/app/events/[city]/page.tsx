import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";

import { capitalize } from "@/utils/helpers";
import { Suspense } from "react";
import Loading from "./loading";

export default async function EventsPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-5 py-24">
      <H1 className="mb-28">
        {city !== "all" ? `Events in ${capitalize(city)}` : "All Events"}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
