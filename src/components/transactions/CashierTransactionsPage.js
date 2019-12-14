import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import HeaderCashier from "../common/HeaderCashier";
import transactionStore from "../../stores/transactionStore";
import {loadTransactions} from "../../actions/transactionActions";
import TransactionList from "./TransactionList";

function CashierTransactionsPagee() {
  const [transactions, setTransactions] = useState(transactionStore.getTransactions());

  useEffect(() => {
    transactionStore.addChangeListener(onChange);
    loadTransactions();
    return () => transactionStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setTransactions(transactionStore.getTransactions());
  }
  const cashierTransactions = transactions.filter(transaction => (transaction.transferType === 'D' || transaction.transferType === 'R'));
  return (
    <>
      <HeaderCashier />
      <main role="main" className="container">
        <div className="col-md-12">
          <h2>Transactions</h2>
          <hr />
          <Link
            className="btn btn-success ml-2"
            style={{ float: "right" }}
            to="/createDepositTransaction"
          >
            Deposit
          </Link>
          <Link
            className="btn btn-success"
            style={{ float: "right" }}
            to="/createWithdrawnTransaction"
          >
            Withdrawn
          </Link>
          <br /><br />
          <TransactionList transactions={cashierTransactions}/>
        </div>
      </main>
    </>
  );
}

export default CashierTransactionsPagee;
