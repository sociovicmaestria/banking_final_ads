import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import UserForm from "./UserForm";
import userStore from "../../stores/userStore";
import { toast } from "react-toastify";
import * as userActions from "../../actions/userActions";
import HeaderManager from "../common/HeaderManager";
import { loadRoles } from '../../actions/userActions';

const ManageUserPage = props => {
  const [errors, setErrors] = useState({});
  const [roles, setRoles] = useState(userStore.getRoles());
  const [user, setUser] = useState({
    id: null,
    name: "",
    password: "",
    firstName: "",
    lastName: "",
    idNumber: "",
    address: "",
    phone: "",
    email: "",
    role: "",
    roleName: ""
  });

  useEffect(() => {
    userStore.addChangeListener(onChange);
    loadRoles();
    return () => userStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setRoles(userStore.getRoles());
  }

  function handleChange({ target }) {
    //debugger;
    setUser({
      ...user,
      [target.name]: target.value
    });
  }

  function handleRoleChange({ target }) {
    //debugger;
    setUser({
      ...user,
      [target.name]: target.value,
      roleName: target.options[target.value].innerHTML
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!user.name) _errors.name = "Name is required";
    if (!user.password) _errors.password = "Password is required";
    if (!user.firstName) _errors.firstName = "First Name is required";
    if (!user.lastName) _errors.lastName = "Last Name is required";
    if (!user.idNumber) _errors.idNumber = "DNI is required";
    if (user.idNumber.length!==8) _errors.idNumber = "DNI should have 8 digits";
    if (!user.phone) _errors.phone = "Phone is required";
    if (!user.email) _errors.email = "Email is required";
    if (!user.role) _errors.role = "Role is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    const userToSave = {
      name: user.name,
      password: user.password,
      person: {
        firstName: user.firstName,
        lastName: user.lastName,
        idNumber: user.idNumber,
        address: user.address,
        phone: user.phone,
        email: user.email,
      },
      role: {
        id: user.role,
        name: user.roleName
      }
    }
    userActions.saveUser(userToSave).then(() => {
      props.history.push("/users");
      toast.success("User saved.");
    });
  }

  return (
    <>
      <HeaderManager />
      <UserForm
        user={user}
        roles={roles}
        errors={errors}
        onChange={handleChange}
        onRoleChange={handleRoleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

ManageUserPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default ManageUserPage;
