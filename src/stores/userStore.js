import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _users = [];
let _roles = [];
let _user = [];

class UserStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getUsers() {
    return _users;
  }

  getRoles() {
    return _roles;
  }

  getUserById() {
    return _user;
  }
}

const store = new UserStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_USER:
      _users.push(action.user);
      store.emitChange();
      break;
    case actionTypes.LOAD_USERS:
      _users = action.users;
      store.emitChange();
      break;
    case actionTypes.GET_USER:
      _user = action.user;
      store.emitChange();
      break;
    case actionTypes.LOAD_ROLES:
      _roles = action.roles;
      store.emitChange();
      break;
    default:
  }
});

export default store;
