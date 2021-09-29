// import { split} from "apollo-link";
// import { HttpLink } from "apollo-link-http";
// import { WebSocketLink } from "apollo-link-ws";
// import { getMainDefinition } from "@apollo/client/utilities";
// import ApolloClient from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
//
//
// const headers = {
//     Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MzUyNjg4MDksImlhdCI6MTYzMjg0OTYwOSwiaXNzIjoiY2hhdGx5IiwianRpIjoiMWJjMWNhNmItNjA0NC00ZjlhLThhZDMtNGE0ZmJmNjhmZDVjIiwibmJmIjoxNjMyODQ5NjA4LCJzdWIiOiI4Y2IzZGRlNC1iZTRjLTRhYmQtYmI0ZS05MWE0NWI4MDk3ZGUiLCJ0eXAiOiJhY2Nlc3MifQ.FSwSczngYJngqfTUWzpMUN9F2y2hQHs-1qSPgQfF-4WeTKAgaYoGFSWG8AkYecvVvV0_TTL53zWeFQaT8ZgItA',
// };
//
// const httpLink = new HttpLink({
//     uri: "https://chat.thewidlarzgroup.com/api/graphiql",
//     headers,
// })
//
// const wsLink = new WebSocketLink({
//     uri: "ws://chat.thewidlarzgroup.com/socket",
//     options: {
//         reconnect: true,
//         connectionParams: {
//             headers,
//         },
//     },
// })
//
// const link = split(
//     ({ query }) => {
//         const definition = getMainDefinition(query);
//         return (
//             definition.kind === "OperationDefinition" &&
//             definition.operation === "subscription"
//         );
//     },
//     wsLink,
//     httpLink
// )
//
// export default new ApolloClient({
//     link,
//     cache: new InMemoryCache(),
// })

import { split, HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { createHttpLink } from 'apollo-link-http'
import * as ws from "ws";
import {setContext} from "@apollo/client/link/context";


const headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MzUyNjg4MDksImlhdCI6MTYzMjg0OTYwOSwiaXNzIjoiY2hhdGx5IiwianRpIjoiMWJjMWNhNmItNjA0NC00ZjlhLThhZDMtNGE0ZmJmNjhmZDVjIiwibmJmIjoxNjMyODQ5NjA4LCJzdWIiOiI4Y2IzZGRlNC1iZTRjLTRhYmQtYmI0ZS05MWE0NWI4MDk3ZGUiLCJ0eXAiOiJhY2Nlc3MifQ.FSwSczngYJngqfTUWzpMUN9F2y2hQHs-1qSPgQfF-4WeTKAgaYoGFSWG8AkYecvVvV0_TTL53zWeFQaT8ZgItA',
};

const httpLink = new HttpLink({
    uri: "https://chat.thewidlarzgroup.com/api/graphiql",
    fetch,
})

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MzUyNjg4MDksImlhdCI6MTYzMjg0OTYwOSwiaXNzIjoiY2hhdGx5IiwianRpIjoiMWJjMWNhNmItNjA0NC00ZjlhLThhZDMtNGE0ZmJmNjhmZDVjIiwibmJmIjoxNjMyODQ5NjA4LCJzdWIiOiI4Y2IzZGRlNC1iZTRjLTRhYmQtYmI0ZS05MWE0NWI4MDk3ZGUiLCJ0eXAiOiJhY2Nlc3MifQ.FSwSczngYJngqfTUWzpMUN9F2y2hQHs-1qSPgQfF-4WeTKAgaYoGFSWG8AkYecvVvV0_TTL53zWeFQaT8ZgItA',
        },
    }
})

const cache = new InMemoryCache();

export default new ApolloClient({
    link: authLink.concat(httpLink),
    cache
})
