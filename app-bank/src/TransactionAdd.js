import React, { useState, useCallback, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { addTransaction } from './data/actions/transaction'

const TransactionAdd = ({ dispatch }) => {
  const [redirect, setRedirect] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      let transaction = {
        amount: event.target.amount.value,
        date: event.target.date.value,
        namereceiver: event.target.namereceiver.value,
        namesender: event.target.namesender.value,
        salary: event.target.salary.value
      };
      dispatch(addTransaction(transaction));
      setRedirect(curState => !curState);
    }, [dispatch]
  );

  const handleCounter = useCallback(
    (event) => {
      event.preventDefault();
      //0
      setCounter(curState => curState + 1);
    }, []
  );

  useEffect(() => {
    console.log('useEffect has been called as MOUNT');
    return () => {
      console.log('useEffect has been called as DISPOSE');
    };
  }, []);

  useEffect(() => {
    console.log(`COUNTER => ${counter}`);
  }, [counter]);

  return (
    redirect ? (<Redirect to="/" />) : (
      <form onSubmit={handleSubmit} className='create-transaction-form' >
        <input type="text" placeholder="Amount" name="amount" className='create-transaction-details' /><br />
        <input type="text" placeholder="Date" name="date" className='create-transaction-details' /><br />
        <input type="text" placeholder="To" name="namereceiver" className='create-transaction-details' /><br />
        <input type="text" placeholder="From" name="namesender" className='create-transaction-details' /><br />
        <input type="text" placeholder="Salary" name="salary" className='create-transaction-details' /><br />
        <input type="submit" value="Save" /><br />
        <input type="button" value="UPDATE COUNTER" onClick={handleCounter} /><br />
      </form>)
  );
}

/*
<label for="transactioin">Transaction Date (month and year)</label><br />
  <input type="month" id="bdaymonth" name="bdaymonth"></input>
*/

export default connect()(TransactionAdd)