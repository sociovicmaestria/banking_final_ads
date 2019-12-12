import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";

function TransactionsPage() {

  return (
    <>
      <Header />
      <main role="main" className="container">
        <div className="col-md-8">
          <h2>Transactions</h2>
          <Link
            className="btn btn-success"
            style={{ float: "right" }}
            to="/createTransaction"
          >
            Add Transaction
          </Link>
        </div>
      </main>
    </>
  );
}

export default TransactionsPage;
