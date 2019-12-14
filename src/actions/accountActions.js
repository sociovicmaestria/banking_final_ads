import * as accountApi from '../api/accountApi'
import dispatcher from '../appDispatcher'
import actionTypes from './actionTypes'

export function loadAccounts() {

  return accountApi.getAccounts().then(accounts => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_ACCOUNTS,
      accounts: accounts.data
    });
  });
}

export function lockedAccount(account) {
  return accountApi.lockedAccount(account).then(responseLockedAccount => {
    dispatcher.dispatch({
      actionType: actionTypes.LOCKED_ACCOUNT,
      responseLockedAccount: responseLockedAccount
    });
  });
}

export function loadAccountsCustomer(personId) {
  return accountApi.getAccountsCustomer(personId).then(accounts => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_ACCOUNTS,
      accounts: accounts.data
    });
  });
}

export function openAccount(account, personId) {
  return accountApi.openAccount(account, personId).then(_responseOpenAccount => {
    dispatcher.dispatch({
      actionType: actionTypes.OPEN_ACCOUNT,
      _responseOpenAccount: _responseOpenAccount
    });
  });
}