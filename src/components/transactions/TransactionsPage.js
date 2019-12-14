import React from "react";
import { Link } from "react-router-dom";
import HeaderManager from "../common/HeaderManager";

function TransactionsPage() {

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
        </div>
      </main>
    </>
  );
}

export default TransactionsPage;
