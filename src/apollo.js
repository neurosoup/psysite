import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { PrismicLink } from 'apollo-link-prismic';

let client;

const createClient = () => {
  return new ApolloClient({
    link: PrismicLink({
      uri: 'https://psysite.prismic.io/graphql',
      accessToken:
        'MC5YVm1qUkJFQUFDTUFxaWs2.XDXvv73vv73vv70h77-9Owvvv71XB--_vTvvv71XbO-_vQrvv73vv71377-977-977-977-9Fu-_vUPvv73vv71Y'
    }),
    ssrMode: true,
    cache: new InMemoryCache(),
    connectToDevTools: true
  });
};

export const initClient = () => {
  // Server side, create a new client for each request
  if (typeof window === 'undefined') {
    return createClient();
  }

  if (!client) {
    client = createClient();
  }
  return client;
};
