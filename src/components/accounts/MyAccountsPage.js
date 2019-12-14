import React, { useState, useEffect } from "react";
import HeaderCustomer from '../common/HeaderCustomer'
import accountStore from '../../stores/accountStore'
import { loadAccountsCustomer } from '../../actions/accountActions'
import AccountList from './AccountList'
import { Link } from 'react-router-dom'
import AuthService from "services/AuthService";

function MyAccountsPage() {
  const [accounts, setAccounts] = useState(accountStore.getAccounts());

  useEffect(() => {
    accountStore.addChangeListener(onChange);
    loadAccountsCustomer(AuthService.getPersonInfo().person.id);
    return () => accountStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setAccounts(accountStore.getAccounts());
  }

  return (
    <>
      <HeaderCustomer />
      <main role="main" className="container">
        <div className="col-md-12">
          <h2>My Accounts</h2>
          <hr />
          <Link
            className="btn btn-success"
            style={{ float: "right" }}
            to="/openAccount"
          >
            Open Account
          </Link>
          <br /><br />
          <AccountList accounts={accounts}/>
        </div>
      </main>
    </>
  );
}

export default MyAccountsPage;