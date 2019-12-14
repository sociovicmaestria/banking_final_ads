import React from "react";
import PropTypes from "prop-types";
import { MDBDataTable } from 'mdbreact';

function TransactionList(props) {
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'ORIGIN ACCOUNT',
        field: 'numberAccountOrigin',
        sort: 'asc',
        width: 150
      },
      {
        label: 'DESTINY ACCOUNT',
        field: 'numberAccountDestiny',
        sort: 'asc',
        width: 150
      },
      {
        label: 'DATE',
        field: 'dateRegistry',
        sort: 'asc',
        width: 150
      },
      {
        label: 'AMOUNT',
        field: 'amount',
        sort: 'asc',
        width: 150
      },
      {
        label: 'TYPE',
        field: 'transferType',
        sort: 'asc',
        width: 150
      },
      {
        label: 'OPERATION NUMBER',
        field: 'operationNumber',
        sort: 'asc',
        width: 150
      },
      {
        label: 'CUSTOMER',
        field: 'customer',
        sort: 'asc',
        width: 150
      }
    ],
    rows: props.transactions.map(transaction => {
      return {
        ...transaction,
        customer: transaction.person.lastName + ', ' + transaction.person.firstName,
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

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

TransactionList.defaultProps = {
  transactions: []
};

export default TransactionList;
