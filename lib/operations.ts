import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query GetEvents {
    events {
      id
      name
      description
      posterLink
      type
      date
    }
  }
`;

export const GET_EVENT_BY_ID = gql`
  query GetEventById($id: ID!) {
    event(id: $id) {
      id
      name
      description
      posterLink
      brochureLink
      type
      regLink
      date
    }
  }
`;
