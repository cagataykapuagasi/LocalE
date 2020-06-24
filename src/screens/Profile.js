import React, { useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useQuery } from '@apollo/react-hooks';
import { inject, observer } from 'mobx-react';
import { getUser } from '~/utils/query';
import colors from 'res/colors';

const Profile = ({ store }) => {
  const { data } = useQuery(getUser);

  if (!data) return <ActivityIndicator />;

  const { fullName, city, country } = data.user.addresses[0];

  return (
    <View style={styles.container}>
      <Text>Name: {fullName}</Text>
      <Text>City: {city.name}</Text>
      <Text>Country: {country.name}</Text>

      <TouchableOpacity onPress={store.user.logout} style={styles.button}>
        <Text style={styles.buttonText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default inject('store')(observer(Profile));

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    height: '60@vs',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20@vs',
    borderRadius: '8@s',
  },
  buttonText: {
    color: 'white',
  },
});
