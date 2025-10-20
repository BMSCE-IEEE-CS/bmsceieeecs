import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri:
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_PORTAL_DEV!
        : process.env.NEXT_PUBLIC_PORTAL_URI!,
  }),
  cache: new InMemoryCache(),
});
