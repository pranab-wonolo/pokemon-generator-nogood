import { createClient } from 'urql';

const client = createClient({
  url: 'https://graphql-pokemon2.vercel.app/',
});

export default client;

