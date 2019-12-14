import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import HeaderManager from "../common/HeaderManager";
import transactionStore from '../../stores/transactionStore'
import { loadTransactions } from '../../actions/transactionActions'
import TransactionList from './TransactionList'

function TransactionsPage() {
  const [transactions, setTransactions] = useState(transactionStore.getTransactions());

  useEffect(() => {
    transactionStore.addChangeListener(onChange);
    loadTransactions();
    return () => transactionStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setTransactions(transactionStore.getTransactions());
  }
  return (
    <>
      <HeaderManager />
      <main role="main" className="container">
        <div className="col-md-12">
          <h2>Transactions</h2>
          <hr />
          <Link
            className="btn btn-success"
            style={{ float: "right" }}
            to="/createTransaction"
          >
            Add Transaction
          </Link>
          <br /><br />
          <TransactionList transactions={transactions}/>
        </div>
      </main>
    </>
  );
}

export default TransactionsPage;
