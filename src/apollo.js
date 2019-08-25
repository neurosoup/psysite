import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { PrismicLink } from 'apollo-link-prismic';

export const client = new ApolloClient({
  link: PrismicLink({
    uri: 'https://psysite.prismic.io/graphql',
    accessToken:
      'MC5YVm1qUkJFQUFDTUFxaWs2.XDXvv73vv73vv70h77-9Owvvv71XB--_vTvvv71XbO-_vQrvv73vv71377-977-977-977-9Fu-_vUPvv73vv71Y'
  }),
  cache: new InMemoryCache()
});
