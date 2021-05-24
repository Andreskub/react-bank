import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TransactionItem from './TransactionItem';

import { connect } from 'react-redux';

import { deleteTransaction } from './data/actions/transaction';

import styled from 'styled-components'
import addButton from './icons/person-add.svg'

const AddButton = styled.button`
    padding-left: 100px;
    width: 40px;
    height: 40px;
    text-align: left;
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

const ButtonWrapper = styled.section`
background: pink;
`

const TitleStyle = styled.div`
  text-align: center;
  background-color: lightblue;
  padding: 1em;
  color: ${(props) => props.color};
  border-radius: 10px;
  p {
    font-size: 30px;
  }
`

const TitleWrapper = styled.section`
  padding: 2em;
  background: gray;
  border-radius: 10px;
`

const Home = ({ transactions, reduxDeleteTransaction }) => {

  const removeTransaction = (transaction) => {
    reduxDeleteTransaction(transaction.id);
  };

  return (
    <div style={{ margin: '10px' }}>
      <TitleWrapper>
        <TitleStyle color="black"> Transaction System</TitleStyle>
      </TitleWrapper>
      <ButtonWrapper >
        <p> 
          <Link to='/add'><AddButton></AddButton></Link> Add New Transaction
        </p>
      </ButtonWrapper>
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