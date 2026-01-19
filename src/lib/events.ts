import { EventSchema, EventsSchema } from "@/schemas/event.schema";

export async function getEvents(city: string) {
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  const json = await res.json();

  // Zod Validation
  const events = EventsSchema.parse(json);

  return events;
}

export async function getEvent(slug: string) {
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  const json = await res.json();

  // Zod Validation
  const event = EventSchema.parse(json);

  return event;
}
