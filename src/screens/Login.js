import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { colors } from 'res';
import { ScaledSheet } from 'react-native-size-matters';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { inject, observer } from 'mobx-react';

const Login = ({ store }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [getToken, data] = useMutation(gql`
  mutation {
    loginWithEmail(email: "${email}", password: "${password}") {
      token
    }
  }
`);

  const login = () => {
    getToken()
      .then(({ data }) => {
        store.user.login(data.loginWithEmail.token);
      })
      .catch(e =>
        Alert.alert('Hata', 'Giriş bilgilerinizi kontrol edin.')
      );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="email"
        onChangeText={value => setEmail(value)}
        numberOfLines={1}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        onChangeText={value => setPassword(value)}
        numberOfLines={1}
      />
      <TouchableOpacity onPress={login} style={styles.button}>
        {data.loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default inject('store')(observer(Login));

const container = {
  height: '60@vs',
  width: '80%',
  borderRadius: '8@s',
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    ...container,
    borderWidth: 0.5,
    padding: '10@s',
    marginTop: '10@vs',
  },
  button: {
    ...container,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20@vs',
  },
  buttonText: {
    color: 'white',
  },
});
