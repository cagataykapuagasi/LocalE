import { user } from './userStore';
import { observable, action } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

export class RootStore {
  @observable
  user = user;

  @action init = () => {
    return new Promise(async (resolve, reject) => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        this.user.authToken = token;
        resolve();
      } else {
        reject();
      }
    });
  };
}

export const store = new RootStore();
