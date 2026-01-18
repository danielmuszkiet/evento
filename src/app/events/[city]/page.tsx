import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";

import { getEvents } from "@/lib/events";
import { capitalize } from "@/utils/helpers";

export default async function EventsPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const events = await getEvents(city);

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-5 py-24">
      <H1 className="mb-28">
        {city !== "all" ? `Events in ${capitalize(city)}` : "All Events"}
      </H1>

      <EventsList events={events} />
    </main>
  );
}
