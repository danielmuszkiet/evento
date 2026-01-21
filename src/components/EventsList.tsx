import EventCard from "./EventCard";
import { getEvents } from "@/lib/events";
import PaginationControls from "./PaginationControls";

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
