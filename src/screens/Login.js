import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { images, fonts, colors } from 'res';
import { ScaledSheet } from 'react-native-size-matters';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { inject, observer } from 'mobx-react';

const signUp = gql`
  query {
    pastOrders(limit: 5, index: 0) {
      status: status
      address: address {
        addressLine1
        addressLine2
        city {
          id
          name
          slugName
          timezone
        }
        country {
          id
          isoCode
          name
          slugName
        }
        flatNumber
        fullName
        geoEnabled
        id
        lat
        lon
        postalCode
        tips
        title
        userAddressId
      }
      orderDate: orderDate
    }
  }
`;

const Login = props => {
  const [getToken, data] = useMutation(signUp);

  useEffect(async () => {
    console.log(await getToken());
  }, []);

  console.log('data', data);

  return (
    <View style={styles.container}>
      <Text>My Starter Kit</Text>
    </View>
  );
};

export default inject('store')(observer(Login));

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
