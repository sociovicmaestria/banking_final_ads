import React, { useState } from "react";
import PropTypes from "prop-types";
import TransactionForm from "./TransactionForm";
import { toast } from "react-toastify";
import * as customerActions from "../../actions/customerActions";
import HeaderManager from "../common/HeaderManager";

const ManageTransactionPage = props => {
  const [errors, setErrors] = useState({});
  const [transaction, setTransaction] = useState({
    fromAccountNumber: "",
    toAccountNumber: "",
    amount: ""
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
    if (!transaction.fromAccountNumber) _errors.fromAccountNumber = "fromAccountNumber is required";
    if (!transaction.toAccountNumber) _errors.toAccountNumber = "toAccountNumber is required";
    if (!transaction.amount) _errors.amount = "amount is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    customerActions.saveTransaction(transaction).then(() => {
      props.history.push("/transactions");
      toast.success("Transfer done!");
    });
  }

  return (
    <>
      <HeaderManager />
      <TransactionForm
        transaction={transaction}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

ManageTransactionPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default ManageTransactionPage;
