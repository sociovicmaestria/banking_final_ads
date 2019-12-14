import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import HeaderCustomer from "../common/HeaderCustomer";
import transactionStore from '../../stores/transactionStore'
import { loadTransactions } from '../../actions/transactionActions'
import TransactionList from './TransactionList'
import AuthService from "services/AuthService";

function MyTransactionsPage() {
  const [transactions, setTransactions] = useState(transactionStore.getTransactions());

  useEffect(() => {
    transactionStore.addChangeListener(onChange);
    loadTransactions();
    return () => transactionStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setTransactions(transactionStore.getTransactions());
  }
  const myTransactions = transactions.filter(transaction => transaction.person.id === AuthService.getPersonInfo().person.id);
  return (
    <>
      <HeaderCustomer />
      <main role="main" className="container">
        <div className="col-md-12">
          <h2>My Transactions</h2>
          <hr />
          <Link
            className="btn btn-success ml-2"
            style={{ float: "right" }}
            to="/createTCTransaction"
          >
            Own Transfers
          </Link>
          <Link
            className="btn btn-success"
            style={{ float: "right" }}
            to="/createTTTransaction"
          >
            External Transfers
          </Link>
          <br /><br />
          <TransactionList transactions={myTransactions}/>
        </div>
      </main>
    </>
  );
}

export default MyTransactionsPage;
