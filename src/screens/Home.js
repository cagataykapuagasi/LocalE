import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { images, fonts, colors } from 'res';
import { ScaledSheet } from 'react-native-size-matters';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { inject, observer } from 'mobx-react';

const signUp = gql`
  mutation {
    loginWithEmail(email: "oliverjones@gmail.com", password: "123456") {
      token
    }
  }
`;

const Home = props => {
  const [getToken, data] = useMutation(signUp);

  useEffect(async () => {
    console.log(await getToken());
  }, []);

  console.log('data', props);

  return (
    <View style={styles.container}>
      <Text>My Starter Kit</Text>
    </View>
  );
};

export default inject('store')(observer(Home));

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
