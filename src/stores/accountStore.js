import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _accounts = [];
let _account = [];
let _responseLockedAccount = [];
let _responseOpenAccount = [];

class AccountStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getAccounts() {
    return _accounts;
  }
}

const store = new AccountStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.LOAD_ACCOUNTS:
      _accounts = action.accounts;
      store.emitChange();
      break;
    case actionTypes.LOCKED_ACCOUNT:
      _responseLockedAccount = action.responseLockedAccount;
      store.emitChange();
      break;
    case actionTypes.OPEN_ACCOUNT:
      _responseOpenAccount = action._responseOpenAccount;
      store.emitChange();
      break;
    default:
  }
});

export default store;
