import H1 from "@/components/H1";
import { getEvent } from "@/lib/events";
import Image from "next/image";

import type { Metadata } from "next";

type MetaDataProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: MetaDataProps): Promise<Metadata> {
  const { slug } = await params;

  const event = (await getEvent(slug)) || { name: "Event Not Found" };

  return {
    title: `Evento | ${event.name}`,
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) return <p>Event not found</p>;

  return (
    <main>
      <section className="relative flex items-center justify-center overflow-hidden p-6 md:p-12">
        <Image
          src={event.imageUrl}
          alt="Event background image"
          fill
          className="z-0 object-cover blur-2xl"
          sizes="(max-width: 1280px) 100vw, 1280px"
          quality={50}
        />
        <div className="relative z-1 flex flex-col gap-8 p-3 md:flex-row lg:gap-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={200}
            priority
            className="w-full rounded-xl border-2 border-white/50 object-cover md:w-75"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mt-1 mb-2 whitespace-nowrap text-white lg:text-5xl">
              {event.name}
            </H1>
            <p className="text-xl whitespace-nowrap text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="state-effects mt-5 cursor-pointer rounded-md border-2 border-white/10 bg-white/20 px-4 py-2 text-base capitalize hover:bg-white/30 md:mt-auto md:text-lg">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="px-16 py-16 text-center md:px-10">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mx-auto mb-10 max-w-4xl">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-5 text-2xl">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return <div className="text-lg leading-7 text-white/75">{children}</div>;
}
