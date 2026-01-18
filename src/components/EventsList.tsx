import { TEvent } from "@/schemas/event.schema";

import EventCard from "./EventCard";

type EventListProps = {
  events: TEvent[];
};

function EventsList({ events }: EventListProps) {
  return (
    <section className="mt-18 flex max-w-6xl flex-wrap justify-center gap-10 px-5">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventsList;
