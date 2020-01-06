import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();
const link = new HttpLink({
  // staging url uri: 'https://staging.carandaway.com/gateway/graphql',
  //mock url
  uri:
    "https://countries.trevorblades.com/"
});
const client = new ApolloClient({
  cache,
  link
});

export default client;
