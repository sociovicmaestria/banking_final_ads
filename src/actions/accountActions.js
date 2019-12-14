import * as accountApi from '../api/accountApi'
import dispatcher from '../appDispatcher'
import actionTypes from './actionTypes'

export function loadAccounts() {
  return accountApi.getAccounts().then(accounts => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_ACCOUNTS,
      accounts: accounts
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