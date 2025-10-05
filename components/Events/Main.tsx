"use client";

import { GET_EVENTS } from "@/lib/operations";
import { useQuery } from "@apollo/client/react";
import Loader from "../Home/Loader";
import EventBriefCard from "./EventBriefCard";
import { Montserrat } from "next/font/google";

const title = Montserrat({ subsets: ["latin"] });

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

const EventsMain = () => {
  const { data, loading, error } = useQuery<EventsQueryProp>(GET_EVENTS, {
    fetchPolicy: "cache-and-network",
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <h1
        className={`${title.className} text-orange-400 text-4xl md:text-5xl mt-10 font-bold text-center`}
      >
        Events
      </h1>{" "}
      <div>
        {loading && (
          <div className="mt-6">
            <Loader />
          </div>
        )}
        {error && <p>Error occured: {error.message}</p>}
        <div className="py-10">
          {data?.events && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto w-full lg:w-3/4 px-4">
              {data.events.map((event: any) => (
                <EventBriefCard
                  key={event.id}
                  id={event.id}
                  name={event.name}
                  description={event.description}
                  imageUrl={event.posterLink}
                  type={event?.type}
                  date={event.date}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsMain;
