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

let limit = 25,
  index = 0;

const { width, height } = Dimensions.get('window');

const renderItem = ({
  item: { description, subject, update_at, id, read },
}) => {
  return (
    <View style={styles.box}>
      <Text>da</Text>
    </View>
  );
};

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
    height: height * 0.1,
    width: '100%',
    borderWidth: 1,
  },
});
