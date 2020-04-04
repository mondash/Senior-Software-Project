import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: process.env.SERVICES_URI + '/graphql',
});

export default client;
