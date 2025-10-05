"use client";

import EventCard from "@/components/Events/EventDeetCard";
import Loader from "@/components/Home/Loader";
import { GET_EVENT_BY_ID } from "@/lib/operations";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import React from "react";

interface EventData {
  event: {
    id: string;
    name: string;
    description: string;
    posterLink: string;
    brochureLink?: string | null;
    type?: string[];
    regLink?: string | null;
    date: string;
  };
}

const EventSlugPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery<EventData>(GET_EVENT_BY_ID, {
    variables: { id },
  });

  if (loading)
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <Loader />
      </div>
    );

  if (error)
    return (
      <p className="text-red-400 text-center">Error occured: {error.message}</p>
    );

  return (
    <div>
      {data ? (
        <div className="p-4">
          <EventCard {...data.event} />
        </div>
      ) : (
        <h1>No such event</h1>
      )}
    </div>
  );
};

export default EventSlugPage;
