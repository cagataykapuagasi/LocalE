import { observable, action } from 'mobx';

class UserStore {
  @observable authToken = null;
  @observable user = null;

  @action
  setUser = user => {
    this.user = user;
  };

  @action
  setAuthToken = session => {
    this.authToken = session;
  };

  @action
  reset = () => {
    this.authToken = null;
    this.user = null;
  };
}

export const user = new UserStore();
