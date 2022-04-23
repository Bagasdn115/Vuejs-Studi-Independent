import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApollo from 'vue-apollo'
import { ApolloClient, HttpLink, InMemoryCache, split } from 'apollo-boost'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import Vue from 'vue'
import { createProvider } from './vue-apollo'

createApp(App).use(router).mount('#app')

const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: 'https://helpful-grouper-31.hasura.app/v1/graphql'
  })

const wsLink = new WebSocketLink({
    uri: 'ws://https://helpful-grouper-31.hasura.app/v1/graphql',
    options: {
        reconnect: true,
    }
});

const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind == "OperationDefinition" && definition.operation == 'subscription';
    },
    wsLink,
    httpLink,
);

const apolloClient = new ApolloClient({
    link, 
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

Vue.use(VueApollo);

new Vue({
    router,
    apolloProvider,
    apolloProvider: createProvider(),
    render: function(h) { return h(App) }
}).$mount('#app')