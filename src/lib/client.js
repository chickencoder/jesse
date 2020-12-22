import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient(process.env.API_URL, {
  headers: {
    authorization: `Bearer ${process.env.API_KEY}`,
  },
})
