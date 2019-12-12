import React from "react";
import Login from "./Login";
import HomePage from "./HomePage";
import HomeUser from "./HomeUser";
import UserPage from "./users/UsersPage";
import CustomerPage from "./customers/CustomerPage";
import ManageUserPage from "./users/ManageUserPage";
import ManageCustomerPage from "./customers/ManageCustomerPage";
import ViewClaims from "./users/ViewClaims";
import ViewAccounts from "./customers/ViewAccounts";
import TransactionsPage from "./transactions/TransactionsPage";
import ManageTransactionPage from "./transactions/ManageTransactionPage";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={HomePage} />
        <Route path="/users" component={UserPage} />
        <Route path="/user/:id" component={ViewClaims} />
        <Route path="/createUser" component={ManageUserPage} />
        <Route path="/my-account" component={HomeUser} />
        <Route path="/customers" component={CustomerPage} />
        <Route path="/customer/:id" component={ViewAccounts} />
        <Route path="/createCustomer" component={ManageCustomerPage} />
        <Route path="/transactions" component={TransactionsPage} />
        <Route path="/createTransaction" component={ManageTransactionPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
