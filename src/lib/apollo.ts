import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: import.meta.env.VITE_GRAPHCMS_URL,
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_TOKEN_GRAPHCMS}`
    },
    cache: new InMemoryCache()
})