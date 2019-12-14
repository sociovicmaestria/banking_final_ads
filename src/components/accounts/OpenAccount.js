import React, { useState } from "react";
import PropTypes from 'prop-types';
import HeaderManager from '../common/HeaderManager';
import AccountForm from './AccountForm';
import * as accountActions from "../../actions/accountActions";
import { toast } from 'react-toastify'
import AuthService from "services/AuthService";

const OpenAccount = props => {
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
    accountActions.openAccount(account, AuthService.getPersonInfo().person.id).then(() => {
      props.history.push("/myAccounts");
      toast.success("Open Account done!");
    });
  }

  return (
    <>
      <HeaderManager />
      <AccountForm
        title="Open Account"
        route="/myAccounts"
        account={account}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

OpenAccount.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default OpenAccount;