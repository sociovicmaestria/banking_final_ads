import React, { useState, useEffect } from "react";
import HeaderManager from '../common/HeaderManager'
import accountStore from '../../stores/accountStore'
import { loadAccounts } from '../../actions/accountActions'
import AccountList from './AccountList'
import { Link } from 'react-router-dom'

function AccountsPage() {
  const [accounts, setAccounts] = useState(accountStore.getAccounts());

  useEffect(() => {
    accountStore.addChangeListener(onChange);
    loadAccounts();
    return () => accountStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setAccounts(accountStore.getAccounts());
  }

  return (
    <>
      <HeaderManager />
      <main role="main" className="container">
        <div className="col-md-12">
          <h2>Accounts</h2>
          <hr />
          <Link
            className="btn btn-success"
            style={{ float: "right" }}
            to="/lockAccount"
          >
            Lock Account
          </Link>
          <br /><br />
          <AccountList accounts={accounts}/>
        </div>
      </main>
    </>
  );
}

export default AccountsPage;