import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _transactions = [];

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

  getTransactions() {
    return _transactions;
  }
}

const store = new AccountStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.LOAD_TRANSACTIONS:
      _transactions = action.transactions;
      store.emitChange();
      break;
    default:
  }
});

export default store;
