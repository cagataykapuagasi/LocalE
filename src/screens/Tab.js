import React, { useEffect, useState } from 'react';
import {
  View,
  Dimensions,
  Linking,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { colors, fonts } from 'res';
import { ScaledSheet } from 'react-native-size-matters';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';

let limit = 15,
  index = 0;

const { width, height } = Dimensions.get('window');

const ListEmptyComponent = () => (
  <View style={styles.empty}>
    <Text style={styles.cardContent}>Veri bulunamadı :(</Text>
  </View>
);

const ListFooterComponent = () => <ActivityIndicator size="large" />;

const Tab = ({ query, tag }) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefresing] = useState(false);
  const [pagination, setPagination] = useState(false);
  const { loading, fetchMore, refetch, ...response } = useQuery(
    query({ limit, index })
  );

  const renderItem = ({
    item: { distance, open, name, orderDate, restaurant, status },
  }) => {
    return tag === 'pastOrders' ? (
      <View style={styles.box}>
        <Text style={styles.boxNameText}>{restaurant.name}</Text>
        <Text style={styles.boxLeftText}>
          {moment(orderDate).format('DD.MM.YYYY')}
        </Text>
        <Text
          style={[
            styles.boxRightText,
            {
              color: status === 'ORDER_COMPLETED' ? 'green' : 'red',
            },
          ]}>
          {status === 'ORDER_COMPLETED' ? 'Completed' : 'Timeout'}
        </Text>
      </View>
    ) : (
      <View style={styles.box}>
        <Text style={styles.boxNameText}>{name}</Text>
        <Text style={styles.boxLeftText}>{distance} m</Text>
        <Text
          style={[
            styles.boxRightText,
            {
              color: open ? 'green' : 'red',
            },
          ]}>
          {open ? 'Open' : 'Closed'}
        </Text>
      </View>
    );
  };

  const onRefresh = () => {
    setRefresing(true);
    setData([]);
    refetch({ limit, index });
    setRefresing(false);
  };

  const fetch = () => {
    console.warn('tetik');

    setPagination(true);
    fetchMore({
      variables: {
        offset: response.data[tag].length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log('fetch more', fetchMoreResult);
        console.log('prev', prev);
        setPagination(false);
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          [tag]: [...prev[tag], ...fetchMoreResult[tag]],
        });
      },
    });
  };

  console.log('data', response);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={response.data && Object.values(response.data)[0]}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'id' + index}
        ListEmptyComponent={!loading && !refreshing && ListEmptyComponent}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={!loading && response.data && fetch}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          !refreshing && (loading || pagination) && ListFooterComponent
        }
      />
    </View>
  );
};

export default Tab;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
  },
  box: {
    height: height * 0.2,
    width: '90%',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10@vs',
    borderTopRightRadius: 50,
  },
  boxNameText: {
    fontSize: 20,
  },
  boxLeftText: {
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  boxRightText: {
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
});
