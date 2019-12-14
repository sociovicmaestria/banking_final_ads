import React from "react";
import LoginPage from "./login/loginPage";
import HomeManager from "./HomeManager";
import HomeCashier from "./HomeCashier";
import HomerCustomer from "./HomeCustomer";
import UsersPage from "./users/UsersPage";
import ManageUserPage from "./users/ManageUserPage";
import AccountsPage from "./accounts/AccountsPage";
import LockAccount from "./accounts/LockAccount";
import TransactionsPage from "./transactions/TransactionsPage";
import ManageTransactionPage from "./transactions/ManageTransactionPage";
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
        <Route path="/lockAccount" component={LockAccount} />
        <Route path="/transactions" component={TransactionsPage} />
        <Route path="/createTransaction" component={ManageTransactionPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
