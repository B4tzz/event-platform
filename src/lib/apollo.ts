import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pnu8q124oj01ywhsh0dk1b/master',
    cache: new InMemoryCache()
})