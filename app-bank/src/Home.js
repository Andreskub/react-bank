import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TransactionItem from './TransactionItem';

import { connect } from 'react-redux';

import { deleteTransaction } from './data/actions/transaction';

import styled from 'styled-components'
import addButton from './icons/person-add.svg'

const AddButton = styled.button`
    //padding-left: 15px;
    align: right;
    width: 70px;
    height: 40px;
    background: ${props => props.primary ?
    "white":"palevioletered"};
    //background-color: pink;
    background-image: url('${addButton}');
    background-size: 100% 100%;
    
    color: gray;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 30px;
`

const ButtonWrapperText = styled.a`
  text-align: left;
  color: black;
  padding-right: 20px;
`

const ButtonWrapper = styled.section`
  padding: 0.8em 1em;
  width: 250px;
  background: pink;
  text-align: center;
  border-radius: 10px;
`

const SubtitleStyle = styled.a`
  text-align: center;
  color: white;
`

const TitleStyle = styled.div`
  text-align: center;
  align: center;
  width: 500px;
  color: #00134d;
  background: white;
  border-radius: 10px;
  font-size: 50px;
  border: 1px;
`

const TitleWrapper = styled.section`
  padding: 2em;
  background: #00134d;
  border-radius: 10px;
`

const Home = ({ transactions, reduxDeleteTransaction }) => {

  const removeTransaction = (transaction) => {
    reduxDeleteTransaction(transaction.id);
  };

  return (
    <div style={{ margin: '10px' }}>
      <TitleWrapper>
        <TitleStyle>Transaction System</TitleStyle>
        <SubtitleStyle>Welcome to the new Transaction System of the National Bank of Pilar</SubtitleStyle>
      </TitleWrapper>
      <p></p> 
      <ButtonWrapper primary>
        <ButtonWrapperText>New Transaction</ButtonWrapperText>
        <Link to='/add'><AddButton></AddButton></Link>
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