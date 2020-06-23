import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Modal, Router } from 'react-native-router-flux';
import { Provider } from 'mobx-react';
import { Home } from './src/screens';
import { colors } from 'res';
import RNBootSplash from 'react-native-bootsplash';
import { store } from './src/store';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';
import AsyncStorage from '@react-native-community/async-storage';

const httpLink = new HttpLink({
  uri: 'http://209.250.226.42:8083/graphql',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  AsyncStorage.getItem('token').then(token => {
    operation.setContext({
      headers: {
        Authorization: token && `Bearer ${token}`,
      },
    });
  });

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

const App = () => {
  useEffect(() => {
    store
      .init()
      .then(() => {
        //
      })
      .catch(() => {
        //
      })
      .finally(() => RNBootSplash.hide({ duration: 250 }));
  }, []);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router
          sceneStyle={styles.scene}
          titleStyle={styles.title}
          tintColor={colors.headerTint}
          headerTintColor={colors.headerTint}>
          <Scene>
            <Scene hideNavBar component={Home} initial key="home" />
          </Scene>
        </Router>
      </Provider>
    </ApolloProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  scene: {
    backgroundColor: colors.background,
  },
  tab: {
    backgroundColor: colors.lightGray,
  },
});
