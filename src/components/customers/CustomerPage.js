import React, { useState, useEffect } from "react";
import customerStore from "../../stores/customerStore";
import CustomerList from "./CustomerList";
import { Link } from "react-router-dom";
import { loadCustomers } from "../../actions/customerActions";
import Header from "../common/Header";

function CustomersPage() {
  const [customers, setCustomers] = useState(customerStore.getCustomers());

  useEffect(() => {
    customerStore.addChangeListener(onChange);
    loadCustomers();
    return () => customerStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCustomers(customerStore.getCustomers());
  }

  return (
    <>
      <Header />
      <main role="main" className="container">
        <div className="col-md-8">
          <h2>Customers</h2>
          <Link
            className="btn btn-success"
            style={{ float: "right" }}
            to="/createCustomer"
          >
            Add Customer
          </Link>
          <CustomerList customers={customers} />
        </div>
      </main>
    </>
  );
}

export default CustomersPage;
