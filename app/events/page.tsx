"use client";

import EventCard from "@/components/EventCard";
import { GET_EVENTS } from "@/lib/operations";
import { useQuery } from "@apollo/client/react";

type Event = {
  id: string;
  name: string;
  description: string;
  posterLink: string;
  brochureLink?: string | null;
  type?: string[];
  date: string | number;
  regLink?: string | null;
};

type EventsQueryProp = {
  events: Event[];
};

const EventsPage = () => {
  const { data, loading, error } = useQuery<EventsQueryProp>(GET_EVENTS, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold my-6">Events</h1>
      <div>
        {data?.events && (
          <div className="flex flex-col gap-6 mx-auto w-full px-4">
            {data.events.map((event: any) => (
              <EventCard
                key={event.id}
                id={event.id}
                name={event.name}
                description={event.description}
                posterLink={event.posterLink}
                brochureLink={event.brochureLink}
                type={event?.type}
                date={event.date}
                regLink={event.regLink}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
