import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TransactionItem from './TransactionItem';

import { connect } from 'react-redux';

import { deleteTransaction } from './data/actions/transaction';

import styled from 'styled-components'
import addButton from './icons/person-add.svg'

const AddButton = styled.button`
    padding-left: 100px;
    //align-self: center;
    width: 40px;
    height: 40px;
    background-color: pink;
    background-image: url('${addButton}');
    background-size: 100% 100%;
    //border: 0;
    color: gray;
    font-size: 0;
    vertical-align: middle;
    cursor: pointer;
    outline: none;
`

const Home = ({ transactions, reduxDeleteTransaction }) => {

  const removeTransaction = (transaction) => {
    reduxDeleteTransaction(transaction.id);
  };

  return (
    <div style={{ margin: '10px' }}>
      <h1 style={{ backgroundColor: 'gray' }}>Salary: </h1>
      <Link to='/add'><AddButton ></AddButton></Link>
      <ol className='transaction-list'>
        {transactions.map(transaction => (
          <TransactionItem key={transaction.id} onDeleteTransaction={removeTransaction} transaction={transaction} />
        ))}
      </ol>
    </div >
  );
};

const mapStateToProps = (reduxState) => {
  return {
    transactions: reduxState.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    reduxDeleteTransaction: (id) => dispatch(deleteTransaction(id))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)