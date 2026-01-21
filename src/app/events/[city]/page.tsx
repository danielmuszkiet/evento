import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";

import { capitalize } from "@/utils/helpers";
import { Suspense } from "react";
import Loading from "./loading";
import type { Metadata } from "next";

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
  const rawPage = (await searchParams).page || "1";

  const page = Array.isArray(rawPage) ? rawPage[0] : rawPage;

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-5 py-24">
      <H1 className="mb-28">
        {city !== "all" ? `Events in ${capitalize(city)}` : "All Events"}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} page={Number(page) < 1 ? 1 : Number(page)} />
      </Suspense>
    </main>
  );
}
