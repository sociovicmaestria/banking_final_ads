import dispatcher from "../appDispatcher";
import * as customerApi from "../api/customerApi";
import actionTypes from "./actionTypes";

export function saveCustomer(customer) {
  return customerApi.saveCustomer(customer).then(savedCustomer => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_CUSTOMER,
      customer: savedCustomer
    });
  });
}

export function loadCustomers() {
  return customerApi.getCustomers().then(customers => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_CUSTOMERS,
      customers: customers.data
    });
  });
}

export function loadCustomerById(id) {
  return customerApi.getCustomerById(id).then(customer => {
    dispatcher.dispatch({
      actionType: actionTypes.GET_CUSTOMER,
      customer: customer
    });
  });
}

export function saveTransaction(transaction) {
  return customerApi.saveTransaction(transaction).then(responseTransaction => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_TRANSACTION,
      responseTransaction: responseTransaction
    });
  });
}
