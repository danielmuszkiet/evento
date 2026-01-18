import { z } from "zod";

export const EventSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  city: z.string(),
  location: z.string(),
  date: z.iso.datetime(),
  organizerName: z.string(),
  imageUrl: z.url(),
  description: z.string(),
});

export const EventsSchema = z.array(EventSchema);

export type TEvent = z.infer<typeof EventSchema>;
