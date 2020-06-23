import { user } from './userStore';
import { observable, action } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

export class RootStore {
  @observable
  user = user;

  @action init = () => {
    return new Promise((resolve, reject) => {
      if (user.user) {
        resolve();
      } else {
        reject();
      }
    });
  };
}

export const store = new RootStore();
