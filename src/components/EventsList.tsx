import EventCard from "./EventCard";
import { getEvents } from "@/lib/events";
import PaginationControls from "./PaginationControls";
import Link from "next/link";

type EventsListProps = {
  city: string;
  page: number;
};

async function EventsList({ city, page }: EventsListProps) {
  const { events, totalPages } = await getEvents(city, page);

  const previousPath = `/events/${city}?page=${page - 1}`;
  const nextPath = `/events/${city}?page=${page + 1}`;
  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  if (events.length === 0) {
    return (
      <section className="flex w-full flex-col items-center justify-center gap-10 px-5 lg:px-20">
        <p className="text-xl font-bold">No events found.</p>
        <Link className="rounded-xl bg-white/20 px-4 py-2" href="/events/all">
          Go back to all events
        </Link>
      </section>
    );
  }

  return (
    <section className="flex w-full flex-wrap justify-center gap-10 px-5 lg:px-20">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls
        previousPath={previousPath}
        nextPath={nextPath}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
      />
    </section>
  );
}

export default EventsList;
