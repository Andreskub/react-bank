// import ADD_EMPLOYEE, { DELETE_EMPLOYEE } from './types';
import { ADD_TRANSACTION, DELETE_TRANSACTION } from './types';

export const addTransaction = (transaction) => ({
  type: ADD_TRANSACTION,
  payload: transaction
});
export const deleteTransaction = (transactionId) => ({
  type: DELETE_TRANSACTION,
  payload: {
    transactionId
  }
});