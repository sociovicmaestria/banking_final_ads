import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _customers = [];
let _customer = [];
let _transaction = [];
let _responseTransaction = [];

class CustomerStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCustomers() {
    return _customers;
  }

  getCustomerById() {
    return _customer;
  }

  getResponseTransaction() {
    return _responseTransaction;
  }

  getTransaction() {
    return _transaction;
  }
}

const store = new CustomerStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_CUSTOMER:
      _customers.push(action.customer);
      store.emitChange();
      break;
    case actionTypes.LOAD_CUSTOMERS:
      _customers = action.customers;
      store.emitChange();
      break;
    case actionTypes.GET_CUSTOMER:
      _customer = action.customer;
      store.emitChange();
      break;
    case actionTypes.CREATE_TRANSACTION:
      _responseTransaction = action.responseTransaction;
      store.emitChange();
      break;
    default:
  }
});

export default store;
