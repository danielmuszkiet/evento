import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";

import { citySchema, pageNumberSchema } from "@/lib/zod-schemas";
import { capitalize } from "@/utils/helpers";
import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";

type MetaDataProps = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({
  params,
}: MetaDataProps): Promise<Metadata> {
  const { city } = await params;

  return {
    title: `Evento | ${city !== "all" ? `Events in ${capitalize(city)}` : "All Events"}`,
  };
}

type EventsPageProps = {
  params: Promise<{ city: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const { city } = await params;
  const rawPage = (await searchParams).page;

  const parsedCity = citySchema.parse(city);
  const parsedPage = pageNumberSchema.parse(rawPage);

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-5 py-24">
      <H1 className="mb-28">
        {parsedCity !== "all"
          ? `Events in ${capitalize(parsedCity)}`
          : "All Events"}
      </H1>

      <Suspense key={parsedCity + parsedPage} fallback={<Loading />}>
        <EventsList city={parsedCity} page={parsedPage} />
      </Suspense>
    </main>
  );
}
