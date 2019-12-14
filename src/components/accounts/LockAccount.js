import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import HeaderManager from '../common/HeaderManager';
import LockAccountForm from './LockAccountForm';
import * as accountActions from "../../actions/accountActions";
import { toast } from 'react-toastify'

const LockAccount = props => {
  const [errors, setErrors] = useState({});
  const [account, setAccount] = useState({
    number: "",
  });

  function handleChange({ target }) {
    //debugger;
    setAccount({
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!account.number) _errors.number = "Account Number is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    accountActions.lockedAccount(account).then(() => {
      props.history.push("/accounts");
      toast.success("Account Locked done!");
    });
  }

  return (
    <>
      <HeaderManager />
      <LockAccountForm
        account={account}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

LockAccount.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default LockAccount;