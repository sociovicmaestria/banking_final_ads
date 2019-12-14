import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import TransactionDepositForm from "./TransactionDepositForm";
import { toast } from "react-toastify";
import * as customerActions from "../../actions/customerActions";
import HeaderCashier from "../common/HeaderCashier";

const ManageTransactionDepositPage = props => {
  const [errors, setErrors] = useState({});
  const [transaction, setTransaction] = useState({
    fromAccountNumber: "",
    toAccountNumber: "",
    amount: "",
    transferType:"D"
  });


  function handleChange({ target }) {
    //debugger;
    setTransaction({
      ...transaction,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!transaction.toAccountNumber) _errors.toAccountNumber = "Destiny account is required";
    if (!transaction.amount) _errors.amount = "amount is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    customerActions.saveTransaction(transaction).then(() => {
      props.history.push("/cashierTransactions");
      toast.success("Transfer done!");
    });
  }

  return (
    <>
      <HeaderCashier />
      <TransactionDepositForm
        transaction={transaction}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

ManageTransactionDepositPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default ManageTransactionDepositPage;
