import { observable, action } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';

class UserStore {
  @observable authToken = null;

  @action
  login = async token => {
    await AsyncStorage.setItem('token', token);
    this.authToken = token;
    Actions.replace('home');
  };

  @action
  logout = async () => {
    await AsyncStorage.removeItem('token');
    this.authToken = null;
    Actions.replace('login');
  };
}

export const user = new UserStore();
