import React from "react";
import LoginPage from "./login/loginPage";
import HomeManager from "./HomeManager";
import HomeCashier from "./HomeCashier";
import HomerCustomer from "./HomeCustomer";
import UsersPage from "./users/UsersPage";
import ManageUserPage from "./users/ManageUserPage";
import AccountsPage from "./accounts/AccountsPage";
import MyAccountsPage from "./accounts/MyAccountsPage";
import LockAccount from "./accounts/LockAccount";
import OpenAccount from "./accounts/OpenAccount";
import TransactionsPage from "./transactions/TransactionsPage";
import MyTransactionsPage from "./transactions/MyTransactionsPage";
import CashierTransactionsPage from "./transactions/CashierTransactionsPage";
import ManageTransactionTCPage from "./transactions/ManageTransactionTCPage";
import ManageTransactionTTPage from "./transactions/ManageTransactionTTPage";
import ManageTransactionDepositPage from "./transactions/ManageTransactionDepositPage";
import ManageTransactionWithdrawnPage from "./transactions/ManageTransactionWithdrawnPage";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../assets/css/style.css';

function App() {
  return (
    <div className="container-fluid pl-0">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/homeManager" component={HomeManager} />
        <Route path="/homeCashier" component={HomeCashier} />
        <Route path="/homeCustomer" component={HomerCustomer} />
        <Route path="/users" component={UsersPage} />
        <Route path="/createUser" component={ManageUserPage} />
        <Route path="/accounts" component={AccountsPage} />
        <Route path="/myAccounts" component={MyAccountsPage} />
        <Route path="/lockAccount" component={LockAccount} />
        <Route path="/openAccount" component={OpenAccount} />
        <Route path="/transactions" component={TransactionsPage} />
        <Route path="/myTransactions" component={MyTransactionsPage} />
        <Route path="/cashierTransactions" component={CashierTransactionsPage} />
        <Route path="/createTCTransaction" component={ManageTransactionTCPage} />
        <Route path="/createTTTransaction" component={ManageTransactionTTPage} />
        <Route path="/createDepositTransaction" component={ManageTransactionDepositPage} />
        <Route path="/createWithdrawnTransaction" component={ManageTransactionWithdrawnPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
