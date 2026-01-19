import { TEvent } from "@/schemas/event.schema";
import Image from "next/image";
import Link from "next/link";

function EventCard({ event }: { event: TEvent }) {
  return (
    <Link
      href={`/event/${event.slug}`}
      className="state-effects h-95 max-w-125 flex-1 basis-80"
      draggable={false}
    >
      <section className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white/3">
        <div className="relative h-[60%] w-full">
          <Image
            src={event.imageUrl}
            alt={event.name}
            fill
            className="object-cover select-none"
            draggable={false}
          />
          <section className="0 absolute top-3 left-3 flex h-11.25 w-11.25 flex-col items-center justify-center rounded-md bg-white/10 select-none">
            <p className="-mb-1.25 text-xl font-bold">
              {new Date(event.date).toLocaleDateString("en-US", {
                day: "2-digit",
              })}
            </p>
            <p className="text-xs text-accent uppercase">
              {new Date(event.date).toLocaleDateString("en-US", {
                month: "short",
              })}
            </p>
          </section>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center p-4">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="text-white/75 italic">By {event.organizerName}</p>
          <p className="mt-4 text-sm text-white/50">{event.location}</p>
        </div>
      </section>
    </Link>
  );
}

export default EventCard;
