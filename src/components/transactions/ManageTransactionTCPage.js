import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import TransactionTCForm from "./TransactionTCForm";
import { toast } from "react-toastify";
import * as customerActions from "../../actions/customerActions";
import HeaderCustomer from "../common/HeaderCustomer";
import accountStore from '../../stores/accountStore'
import { loadAccountsCustomer } from '../../actions/accountActions'
import AuthService from "services/AuthService";

const ManageTransactionTCPage = props => {
  const [errors, setErrors] = useState({});
  const [accounts, setAccounts] = useState(accountStore.getAccounts());
  const [transaction, setTransaction] = useState({
    fromAccountNumberId: "",
    fromAccountNumber: "",
    toAccountNumberId: "",
    toAccountNumber: "",
    amount: "",
    transferType:"TC"
  });

  useEffect(() => {
    accountStore.addChangeListener(onChange);
    loadAccountsCustomer(AuthService.getPersonInfo().person.id);
    return () => accountStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setAccounts(accountStore.getAccounts());
  }

  function handleChange({ target }) {
    //debugger;
    setTransaction({
      ...transaction,
      [target.name]: target.value
    });
  }

  function handleFromAccountChange({ target }) {
    //debugger;
    setTransaction({
      ...transaction,
      [target.name]: target.value,
      fromAccountNumber: target.options[target.value].innerHTML
    });
  }

  function handleToAccountChange({ target }) {
    //debugger;
    setTransaction({
      ...transaction,
      [target.name]: target.value,
      toAccountNumber: target.options[target.value].innerHTML
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!transaction.fromAccountNumber) _errors.fromAccountNumber = "Origin account is required";
    if (!transaction.toAccountNumber) _errors.toAccountNumber = "Destiny account is required";
    if (!transaction.amount) _errors.amount = "amount is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    const transactionData = {
      fromAccountNumber: transaction.fromAccountNumber,
      toAccountNumber: transaction.toAccountNumber,
      amount: transaction.amount,
      transferType:transaction.transferType
    }

    customerActions.saveTransaction(transactionData).then(() => {
      props.history.push("/myTransactions");
      toast.success("Transfer done!");
    });
  }

  const myAccounts = accounts.map(account => {
    return {
      id: account.id,
      name: account.number
    }
  })

  return (
    <>
      <HeaderCustomer />
      <TransactionTCForm
        transaction={transaction}
        accounts={myAccounts}
        errors={errors}
        onChange={handleChange}
        onFromAccountChange={handleFromAccountChange}
        onToAccountChange={handleToAccountChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

ManageTransactionTCPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default ManageTransactionTCPage;
