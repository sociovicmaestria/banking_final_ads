import React from "react";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import SelectInput from '../common/SelectInput';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserForm(props) {
  return (
    <main role="main" className="container">
      <div className="col-md-12">
        <h2>Manage User</h2>
        <hr />
      </div>
      <form onSubmit={props.onSubmit}>
        <div className="row ml-0 mr-0">
          <div className="col-md-6">
            <div className="form-manage">
              <TextInput
                id="name"
                name="name"
                label="Name"
                onChange={props.onChange}
                value={props.user.name}
                error={props.errors.name}
              />
              <TextInput
                id="firstName"
                name="firstName"
                label="First Name"
                onChange={props.onChange}
                value={props.user.firstName}
                error={props.errors.firstName}
              />
              <TextInput
                id="idNumber"
                name="idNumber"
                label="DNI"
                onChange={props.onChange}
                value={props.user.idNumber}
                maxLength="8"
                error={props.errors.idNumber}
              />
              <TextInput
                id="phone"
                name="phone"
                label="Phone"
                onChange={props.onChange}
                value={props.user.phone}
                error={props.errors.phone}
              />
              <SelectInput
                id="role"
                name="role"
                label="Role"
                onChange={props.onRoleChange}
                value={props.user.role}
                options={props.roles}
                error={props.errors.role}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-manage">
              <PasswordInput
                id="password"
                name="password"
                label="Password"
                onChange={props.onChange}
                value={props.user.password}
                error={props.errors.password}
              />
              <TextInput
                id="lastName"
                name="lastName"
                label="Last Name"
                onChange={props.onChange}
                value={props.user.lastName}
                error={props.errors.lastName}
              />
              <TextInput
                id="address"
                name="address"
                label="Address"
                onChange={props.onChange}
                value={props.user.address}
                error={props.errors.address}
              />
              <TextInput
                id="email"
                name="email"
                label="Email"
                onChange={props.onChange}
                value={props.user.email}
                error={props.errors.email}
              />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <input type="submit" value="Save" className="btn btn-primary" />
          <Link to="/users" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </form>
    </main>
  );
}

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  roles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onRoleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default UserForm;
