import { prisma } from "./prisma";

export async function getEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: { city: city === "all" ? undefined : { contains: city } },
  });
  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug },
  });
  return event;
}
