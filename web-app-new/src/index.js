import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import graphqlClient from '#root/api/graphqlClient';
import Root from '#root/components/Root';
import store from '#root/store';

import '#root/styles/index.global.scss';

render(
  <Provider store={store}>
    <ApolloProvider client={graphqlClient}>
      <Root />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);
