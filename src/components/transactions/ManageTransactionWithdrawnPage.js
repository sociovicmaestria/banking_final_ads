import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import TransactionWithdrawnForm from "./TransactionWithdrawnForm";
import { toast } from "react-toastify";
import * as customerActions from "../../actions/customerActions";
import HeaderCashier from "../common/HeaderCashier";

const ManageTransactionWithdrawnPage = props => {
  const [errors, setErrors] = useState({});
  const [transaction, setTransaction] = useState({
    fromAccountNumber: "",
    toAccountNumber: "",
    amount: "",
    transferType:"R"
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
    if (!transaction.fromAccountNumber) _errors.toAccountNumber = "Origin account is required";
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
      <TransactionWithdrawnForm
        transaction={transaction}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

ManageTransactionWithdrawnPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default ManageTransactionWithdrawnPage;
