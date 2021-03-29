import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Error Handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message, locations, path }) =>
			// tslint:disable-next-line
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`,
			),
		);
	}
	if (networkError) {
		// tslint:disable-next-line
		console.log(`[Network error]: ${networkError}`);
	}
});

const httpLink = createHttpLink({
	uri: 'http://localhost:3000/graphql',
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
	link: errorLink.concat(httpLink),
	cache,
});
