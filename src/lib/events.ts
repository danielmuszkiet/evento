import { EventSchema, EventsSchema } from "@/schemas/event.schema";

import { ZodError } from "zod";

export async function getEvents(city: string) {
  try {
    const res = await fetch(
      `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
      {
        next: { revalidate: 300 },
      },
    );

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    const json = await res.json();

    // Zod Validation
    return EventsSchema.parse(json);
  } catch (error) {
    if (error instanceof ZodError) {
      console.error("Zod validation failed:", error.message);
      throw new Error("Invalid event data received from the server.");
    }

    console.error("getEvents failed:", error);
    throw new Error("Events could not be loaded.");
  }
}

export async function getEvent(slug: string) {
  try {
    const res = await fetch(
      `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
      {
        next: { revalidate: 300 },
      },
    );

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error("Event not found");
      }
      throw new Error(`HTTP Error: ${res.status}`);
    }

    const json = await res.json();

    return EventSchema.parse(json);
  } catch (error) {
    if (error instanceof ZodError) {
      console.error("Zod validation failed:", error.message);
      throw new Error("Invalid event data received from the server.");
    }

    console.error("getEvent failed:", error);
    throw error;
  }
}
