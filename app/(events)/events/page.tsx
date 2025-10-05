"use client";

import EventsMain from "@/components/Events/Main";
import React from "react";

const Events = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen overflow-hidden transition-opacity duration-700 ease-in-out">
      <EventsMain />
    </div>
  );
};

export default Events;
