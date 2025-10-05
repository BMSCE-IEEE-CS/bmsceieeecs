"use client";

import { GET_EVENT_BY_ID } from "@/lib/operations";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import React from "react";

const EventSlugPage = () => {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_EVENT_BY_ID, {
    variables: { id: slug },
  });

  console.log(data);
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

export default EventSlugPage;
