"use client";

import EventBriefCard from "@/components/Events/EventBriefCard";
import Loader from "@/components/Home/Loader";
import Navbar from "@/components/Home/Navbar";
import { GET_EVENTS } from "@/lib/operations";
import { useQuery } from "@apollo/client/react";
import { Montserrat } from "next/font/google";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const title = Montserrat({ subsets: ["latin"] });

type Event = {
  id: string;
  name: string;
  description: string;
  posterLink: string;
  brochureLink?: string | null;
  type?: string[];
  date: string | number;
  regLink: string;
};

type EventsQueryProp = {
  events: Event[];
};

const Events = () => {
  const [current, setCurrent] = useState(0);

  const { data, loading, error } = useQuery<EventsQueryProp>(GET_EVENTS, {
    fetchPolicy: "cache-and-network",
  });

  const filteredEvents = useMemo(() => {
    if (!data?.events) return [];

    const now = new Date();
    const events = data.events.map((e) => ({
      ...e,
      dateObj: new Date(e.date),
    }));

    switch (current) {
      case 0:
        return events.filter((e) => e.dateObj >= now);
      case 1:
        return events.filter((e) => e.dateObj.getFullYear() === 2025);
      case 2:
        return events.filter((e) => e.dateObj.getFullYear() === 2024);
      case 3:
        return events.filter((e) => e.dateObj.getFullYear() === 2023);
      case 4:
        return events.filter((e) => e.dateObj.getFullYear() === 2022);
      case 5:
        return events.filter((e) => e.dateObj.getFullYear() === 2021);
      default:
        return [];
    }
  }, [current, data]);

  useEffect(() => {
    if (!loading && data?.events) {
      const now = new Date();
      const upcoming = data.events.filter((e) => new Date(e.date) >= now);

      if (upcoming.length === 0) {
        setCurrent(1);
      }
    }
  }, [data, loading]);

  const tabs = [
    { label: "Upcoming", id: 0 },
    { label: "2025", id: 1 },
    { label: "2024", id: 2 },
    { label: "2023", id: 3 },
    { label: "2022", id: 4 },
    { label: "2021", id: 5 },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center w-full">
        <Navbar />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`${title.className} text-orange-400 text-4xl md:text-5xl mt-30 font-bold text-center`}
        >
          Events
        </motion.h1>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {tabs.map((tab, idx) => (
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx + 1) * 0.2 }}
              key={tab.id}
              onClick={() => setCurrent(tab.id)}
              className={`rounded-xl px-4 py-2 font-bold text-xl backdrop-blur-md cursor-pointer transition-all duration-150 ${
                current === tab.id
                  ? "bg-orange-400 text-black hover:bg-orange-500"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1 }}
          className="bg-slate-300 h-0.5 w-full mt-6"
        ></motion.div>
        <div className="flex flex-col items-center justify-center mt-10">
          {loading && <Loader />}
          {error && (
            <p className="text-red-400 text-xl">
              Error Occured: {error.message}
            </p>
          )}
          {!loading && !error && (
            <>
              {filteredEvents.length > 0 ? (
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 ${
                    filteredEvents.length === 1
                      ? "lg:grid-cols-3 place-items-center"
                      : "lg:grid-cols-3"
                  } gap-8 w-full lg:w-4/5 px-4 my-10`}
                >
                  {filteredEvents.map((event, idx) => (
                    <EventBriefCard
                      key={event.id}
                      idx={idx}
                      id={event.id}
                      name={event.name}
                      description={event.description}
                      imageUrl={event.posterLink}
                      regLink={event.regLink}
                      type={event.type as string[]}
                      date={event.date as string}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-lg mt-10">
                  No events found for this batch.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
