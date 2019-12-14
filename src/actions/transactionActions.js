import * as transactionApi from '../api/transactionApi'
import dispatcher from '../appDispatcher'
import actionTypes from './actionTypes'

export function loadTransactions() {
  return transactionApi.getTransactions().then(transactions => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_TRANSACTIONS,
      transactions: transactions
    });
  });
}
