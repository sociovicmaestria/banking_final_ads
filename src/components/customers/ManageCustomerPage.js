import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CustomerForm from "./CustomerForm";
import customerStore from "../../stores/customerStore";
import { toast } from "react-toastify";
import * as customerActions from "../../actions/customerActions";
import Header from "../common/Header";

const ManageCustomerPage = props => {
  const [errors, setErrors] = useState({});
  const [customers, setCustomers] = useState(customerStore.getCustomers());
  const [customer, setCustomer] = useState({
    id: null,
    firstName: "",
    lastName: "",
    isActive: true
  });

  useEffect(() => {
    customerStore.addChangeListener(onChange);
    const id = props.match.params.id;
    if (customers.length === 0) {
      customerActions.loadCustomers();
    } else if (id) {
      setCustomer(customerStore.getCustomerById(id));
    }
    return () => customerStore.removeChangeListener(onChange);
  }, [customers.length, props.match.params.id]);

  function onChange() {
    setCustomers(customerStore.getCustomers());
  }

  function handleChange({ target }) {
    //debugger;
    setCustomer({
      ...customer,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!customer.firstName) _errors.firstName = "firstName is required";
    if (!customer.lastName) _errors.lastName = "lastName is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    customerActions.saveCustomer(customer).then(() => {
      props.history.push("/customers");
      toast.success("Customer saved.");
    });
  }

  return (
    <>
      <Header />
      <CustomerForm
        customer={customer}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

ManageCustomerPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default ManageCustomerPage;
