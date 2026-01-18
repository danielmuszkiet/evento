import H1 from "@/_components/H1";
import { capitalize } from "@/_utils/helpers";

export default async function EventsPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-5 py-24">
      <H1>{city !== "all" ? `Events in ${capitalize(city)}` : "All Events"}</H1>
    </main>
  );
}
