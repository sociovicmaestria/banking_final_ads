import React from "react";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SelectInput from '../common/SelectInput'

function TransactionTCForm(props) {
  return (
    <main role="main" className="container">
      <div className="col-md-6">
        <h2>Own Transfers</h2>
        <div className="form-manage">
          <form onSubmit={props.onSubmit}>
            <SelectInput
              id="fromAccountNumberId"
              name="fromAccountNumberId"
              label="Origin Account"
              onChange={props.onFromAccountChange}
              value={props.transaction.fromAccountNumberId}
              options={props.accounts}
              error={props.errors.fromAccountNumberId}
            />

            <SelectInput
              id="toAccountNumberId"
              name="toAccountNumberId"
              label="Destiny Account"
              onChange={props.onToAccountChange}
              value={props.transaction.toAccountNumberId}
              options={props.accounts}
              error={props.errors.toAccountNumberId}
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
            <Link to="/myTransactions" className="btn btn-danger">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}

TransactionTCForm.propTypes = {
  transaction: PropTypes.object.isRequired,
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFromAccountChange: PropTypes.func.isRequired,
  onToAccountChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default TransactionTCForm;
