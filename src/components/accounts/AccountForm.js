import PropTypes from 'prop-types'
import React from 'react'
import TextInput from '../common/TextInput'
import { Link } from 'react-router-dom'

function AccountForm(props) {
  return (
    <main role="main" className="container">
      <div className="col-md-12">
        <h2>{props.title}</h2>
        <hr />
        <form onSubmit={props.onSubmit}>
          <div className="col-md-6">
            <div className="form-manage">
              <TextInput
                id="number"
                name="number"
                label="Account Number"
                onChange={props.onChange}
                value={props.account.number}
                error={props.errors.number}
              />
            </div>
          </div>
          <div className="col-md-6">
            <input type="submit" value="Save" className="btn btn-primary" />
            <Link to={props.route} className="btn btn-danger">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

AccountForm.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  account: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default AccountForm;
