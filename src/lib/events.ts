import "server-only";

import { notFound } from "next/navigation";
import { prisma } from "./prisma";
import { cacheLife } from "next/cache";
import { sleep } from "@/utils/helpers";

const EVENTS_PER_PAGE = 6;

export async function getEvents(city: string, page = 1) {
  "use cache";
  cacheLife("hours");

  await sleep(2000);

  const where = {
    city: city === "all" ? undefined : { contains: city },
  };
  const [events, totalCount] = await prisma.$transaction([
    prisma.eventoEvent.findMany({
      where,
      orderBy: { date: "asc" },
      take: EVENTS_PER_PAGE,
      skip: (page - 1) * EVENTS_PER_PAGE,
    }),
    prisma.eventoEvent.count({
      where,
    }),
  ]);

  return {
    events,
    totalCount,
    totalPages: Math.ceil(totalCount / EVENTS_PER_PAGE),
  };
}

export async function getEvent(slug: string) {
  "use cache";
  cacheLife("hours");

  const event = await prisma.eventoEvent.findUnique({
    where: { slug },
  });

  if (!event) {
    notFound();
  }

  return event;
}
