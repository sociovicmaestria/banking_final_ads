import React from "react";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TransactionForm(props) {
  return (
    <main role="main" className="container">
      <div className="col-md-6">
        <h2>Manage Transactions</h2>
        <div className="form-manage">
          <form onSubmit={props.onSubmit}>
            <TextInput
              id="fromAccountNumber"
              name="fromAccountNumber"
              label="Origin Account"
              onChange={props.onChange}
              value={props.transaction.fromAccountNumber}
              error={props.errors.fromAccountNumber}
            />

            <TextInput
              id="toAccountNumber"
              name="toAccountNumber"
              label="Destiny Account"
              onChange={props.onChange}
              value={props.transaction.toAccountNumber}
              error={props.errors.toAccountNumber}
            />

            <TextInput
              id="amount"
              name="amount"
              label="Amount"
              onChange={props.onChange}
              value={props.transaction.amount}
              error={props.errors.amount}
            />

            <input type="submit" value="Save" className="btn btn-primary" />
            <Link to="/transactions" className="btn btn-danger">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}

TransactionForm.propTypes = {
  transaction: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default TransactionForm;
