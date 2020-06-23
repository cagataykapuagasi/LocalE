import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, Actions, Tabs } from 'react-native-router-flux';
import { Provider } from 'mobx-react';
import { Home, Login, Profile } from './src/screens';
import { colors } from 'res';
import RNBootSplash from 'react-native-bootsplash';
import { store } from './src/store';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';
import AsyncStorage from '@react-native-community/async-storage';
import { TabIcon } from '~/components/navigations';

const httpLink = new HttpLink({
  uri: 'http://209.250.226.42:8083/graphql',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const { authToken } = store.user;

  operation.setContext({
    headers: {
      Authorization: authToken && `Bearer ${authToken}`,
    },
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
        Actions.replace('home');
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
            <Scene hideNavBar component={Login} initial key="login" />

            <Scene
              tabBarStyle={styles.tab}
              showLabel={false}
              hideNavBar
              icon={TabIcon}
              tabs
              key="home">
              <Scene
                iconName="home"
                hideNavBar
                component={Home}
                key="_home"
              />
              <Scene
                iconName="cog"
                hideNavBar
                component={Profile}
                key="profile"
              />
            </Scene>
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
    backgroundColor: 'white',
    borderTopWidth: 0,
  },
});
