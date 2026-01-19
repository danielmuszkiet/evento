import EventCard from "./EventCard";
import { getEvents } from "@/lib/events";

type EventsListProps = {
  city: string;
};

async function EventsList({ city }: EventsListProps) {
  const events = await getEvents(city);
  return (
    <section className="flex max-w-6xl flex-wrap justify-center gap-10 px-5">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventsList;
