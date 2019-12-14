import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import HeaderCashier from "../common/HeaderCashier";

function CashierTransactionsPagee() {
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
        </div>
      </main>
    </>
  );
}

export default CashierTransactionsPagee;
