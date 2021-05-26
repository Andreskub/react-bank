import React, { useState, useCallback, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { addTransaction } from './data/actions/transaction';

import styled from 'styled-components';

const ItemStyle = styled.a`
  //padding-right: 10px;
  padding: 10px;
`

const FormTitleStyle = styled.a`
  text-align: center;
  align: center;
  width: 500px;
  color: #00134d;
  background: white;
  border-radius: 10px;
  font-size: 50px;
  border: 1px;
`
const FormSubtitleStyle = styled.a`
  text-align: center;
  color: white;
`

const FormWrapper = styled.section`
  padding: 2em;
  background: #00134d;
  border-radius: 10px;
`

const TransactionAdd = ({ dispatch }) => {
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      let transaction = {
        amount: event.target.amount.value,
        date: event.target.date.value,
        namereceiver: event.target.namereceiver.value,
        namesender: event.target.namesender.value,
      };
      dispatch(addTransaction(transaction));
      setRedirect(curState => !curState);
    }, [dispatch]
  );
  
  return (
    redirect ? (<Redirect to="/" />) : (
      <div style={{ margin: '10px' }}>
        <FormWrapper>
          <FormTitleStyle>New Transaction</FormTitleStyle><br/>
          <FormSubtitleStyle>Complete the fields</FormSubtitleStyle>
          <form onSubmit={handleSubmit} className='create-transaction-form' align="center">
            <ItemStyle><input type="text" placeholder="Amount" name="amount"  lassName='create-transaction-details'/></ItemStyle>
            <ItemStyle><input type="datetime-local" placeholder="Date" name="date" ></input></ItemStyle>
            <ItemStyle><input type="text" placeholder="To" name="namereceiver" className='create-transaction-details' /></ItemStyle>
            <ItemStyle><input type="text" placeholder="From" name="namesender" className='create-transaction-details' /></ItemStyle>
            <input type="submit" value="Save" /><br />
          </form>
        </FormWrapper>
      </div>
      )
  );
}

/*
<label for="transactioin">Transaction Date (month and year)</label><br />
  <input type="month" id="bdaymonth" name="bdaymonth"></input>

<input type="month" id="bdaymonth" name="bdaymonth"></input>
<label for="transaction">Transaction Date (month and year)</label><br />
*/

export default connect()(TransactionAdd)