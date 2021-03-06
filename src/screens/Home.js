import React, { useState } from 'react';
import { Dimensions, SafeAreaView } from 'react-native';
import { colors } from 'res';
import { ScaledSheet } from 'react-native-size-matters';
import { inject, observer } from 'mobx-react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { getOrders, getRestaurants } from '~/utils/query';
import Tab from './Tab';

const { width } = Dimensions.get('window');

const initialLayout = { width };

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStyle}
    style={styles.tabStyle}
    activeColor={colors.primary}
    inactiveColor={colors.lightGray}
  />
);

const Home = props => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Orders' },
    { key: 'second', title: 'Restaurants' },
  ]);
  const renderScene = SceneMap({
    first: () => <Tab query={getOrders} tag="pastOrders" />,
    second: () => <Tab query={getRestaurants} tag="restaurants" />,
  });

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </SafeAreaView>
  );
};

export default inject('store')(observer(Home));

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  tabStyle: {
    backgroundColor: 'transparent',
  },
  indicatorStyle: {
    backgroundColor: colors.primary,
  },
});
