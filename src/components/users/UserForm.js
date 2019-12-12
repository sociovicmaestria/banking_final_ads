import React from "react";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserForm(props) {
  return (
    <main role="main" className="container">
      <div className="col-md-6">
        <h2>Manage User</h2>
        <div className="form-manage">
          <form onSubmit={props.onSubmit}>
            <TextInput
              id="name"
              name="name"
              label="Name"
              onChange={props.onChange}
              value={props.user.name}
              error={props.errors.name}
            />

            <PasswordInput
              id="password"
              name="password"
              label="Password"
              onChange={props.onChange}
              value={props.user.password}
              error={props.errors.password}
            />

            <input type="submit" value="Save" className="btn btn-primary" />
            <Link to="/users" className="btn btn-danger">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default UserForm;
