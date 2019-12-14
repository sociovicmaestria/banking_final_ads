import React from "react";
import PropTypes from "prop-types";
import { MDBDataTable } from 'mdbreact';

function AccountList(props) {
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'NUMBER',
        field: 'number',
        sort: 'asc',
        width: 150
      },
      {
        label: 'BALANCE',
        field: 'balance',
        sort: 'asc',
        width: 150
      },
      {
        label: 'CUSTOMER',
        field: 'customer',
        sort: 'asc',
        width: 150
      },
      {
        label: 'DNI',
        field: 'dni',
        sort: 'asc',
        width: 150
      },
      {
        label: 'STATE',
        field: 'state',
        sort: 'asc',
        width: 150
      }
    ],
    rows: props.accounts.map(account => {
      return {
        ...account,
        customer: account.person.lastName + ', ' + account.person.firstName,
        dni: account.person.idNumber,
        state: account.locked === true ? 'LOCKED' : 'ACTIVE'
      }
    })
  }
  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

AccountList.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired
    })
  ).isRequired
};

AccountList.defaultProps = {
  accounts: []
};

export default AccountList;
